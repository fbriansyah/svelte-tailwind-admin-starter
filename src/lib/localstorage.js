const ls = localStorage ? localStorage : null; // cek ketersediaan localStorage
const curretMenuName = btoa('current-menu'); // merubah nama menjadi base64

/**
 * fungsi untuk menyimpan data kedalam localStorage
 * jika localStorage tersedia
 * @param {string} name field pengenal untuk menyimpan data
 * @param {string} value data yang akan disimpan
 */
export const setItem = (name, value) => {
  if (ls) {
    ls.setItem(name, value)
  } else {
    console.log('Local Storage is not supported');
  }
}

/**
 * fungsi untuk mengambil data dari localStorage
 * @param {string} name aksesor untuk mengambil data
 * @returns {string}
 */
export const getItem = (name) => {
  if (ls) {
    return ls.getItem(name)
  } else {
    console.log('Local Storage is not supported');
    return null;
  }
}

/**
 * fungsi untuk menyimpan data menu yang sedang aktif
 * kedalam localStorage
 * @param {object} menu data menu yang sedang aktif
 */
export const setActiveMenu = (menu) => {
  setItem(curretMenuName, JSON.stringify(menu));
}

/**
 * fungsi untuk mengambil data menu yang terakhir aktif
 * @returns {object}
 */
export const getActiveMenu = () => {
  const menu = getItem(curretMenuName);
  if (menu !== '') {
    return JSON.parse(menu);
  } else {
    return null;
  }
}