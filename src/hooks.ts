import type { GetSession, Handle } from '@sveltejs/kit';
import supabase from '$lib/db';

export const handle: Handle = async ({ request, resolve }) => {
  const currentUser = await supabase.auth.api.getUserByCookie(request);

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
          name: request.locals.user.user_metadata,
          email: request.locals.user.email,
          role: request.locals.user.role
        }
      }
    : {};
};
