export const USER_COOKIE = "chillfit-auth";
export const CART_ITEM = "cart-item";
export const GUEST_USER = "guest-user";

// auth data
export function getAuthData() {
  const AuthData = localStorage.getItem(USER_COOKIE);
  //  console.log(AuthData)
  if (typeof AuthData === "string") return JSON.parse(AuthData);
  else return {};
}

export function setAuthData(auth) {
  const strState = JSON.stringify(auth);
  localStorage.setItem(USER_COOKIE, strState);
}

