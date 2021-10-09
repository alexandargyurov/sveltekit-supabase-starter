export function setCookie(name: string, value: string, expires: number) {
  let date = new Date();
  date.setTime(date.getTime() + expires);
  document.cookie = name + '=' + value + '; ' + 'expires=' + date.toUTCString();
  +'; path=/';
}
