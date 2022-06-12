const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let theaterIxx = await promiseTheaterIXX();
  let theaterVgc = await promiseTheaterVGC();
  let allTheater = [...theaterIxx, ...theaterVgc];

  let jumlahEmosi = 0;
  allTheater.map((e) => (e.hasil == emosi ? (jumlahEmosi += 1) : null));

  return jumlahEmosi;
};

module.exports = {
  promiseOutput,
};
