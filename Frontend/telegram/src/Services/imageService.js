const images = {};

function importAll(r) {
  r.keys().forEach(key => images[key] = r(key));
}

importAll(require.context('../patterns', false, /\.(png|jpe?g|svg)$/));

const imagesArray = Object.values(images).map((image) => image);

export default imagesArray;