import CryptoJS from 'crypto-js';

const encryptionKey = 'lF7B4QDkh0cuo0J';

function saveUserToCookie(value) {
  const jsonValue = JSON.stringify(value);
  const encryptedValue = CryptoJS.AES.encrypt(jsonValue, encryptionKey).toString();
  document.cookie = `MEMBER=${encryptedValue}`;
}

function getUserFromCookie() {
  const value = document.cookie.replace(
    /(?:(?:^|.*;\s*)MEMBER\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );

  if (!value) {
    return null;
  }

  const bytes = CryptoJS.AES.decrypt(value, encryptionKey);
  const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedValue);
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
};