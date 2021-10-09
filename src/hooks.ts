import supabase from '$lib/utils/db';
import type { User } from '@supabase/supabase-js';
import type { GetSession, Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

async function getUserByCookie(req: any): Promise<{ user: User | null; data: User | null; error: Error | null }> {
  const { access_token } = cookie.parse(req.headers.cookie || '');

  try {
    if (!access_token) throw new Error('No cookie found!');
    const { user, error } = await supabase.auth.api.getUser(access_token);
    if (error) throw error;
    return { user, data: user, error: null };
  } catch (error) {
    return { user: null, data: null, error };
  }
}

export const handle: Handle = async ({ request, resolve }) => {
  const currentUser = await getUserByCookie(request);

  if (currentUser) {
    request.locals.user = currentUser.user;
  }

  // TODO https://github.com/sveltejs/kit/issues/1046
  if (request.query.has('_method')) {
    request.method = request.query.get('_method').toUpperCase();
  }

  const response = await resolve(request);

  return response;
};

export const getSession: GetSession = (request) => {
  return request.locals.user
    ? {
        user: {
          // only include properties needed client-side —
          // exclude anything else attached to the user
          // like access tokens etc
          id: request.locals.user.id,
          metadata: request.locals.user.user_metadata,
          email: request.locals.user.email,
          role: request.locals.user.role
        }
      }
    : {};
};
