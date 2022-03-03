function getCookie(name: string): string {
  const value = "; " + document.cookie;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

function setCookie(name: string, value: number, exp = 5): void {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString}`;
}

function deleteCookie(name: string): void {
  const date = new Date("1000-01-01").toUTCString();
  document.cookie = name + "=; expires=" + date;
}

export { getCookie, setCookie, deleteCookie };
