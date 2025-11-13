// Obtener fotos aleatorias de perros
fetch("https://dog.ceo/api/breeds/image/random/3")
  .then(res => res.json())
  .then(data => {
    data.message.forEach(url => console.log("🐶 Foto de perro:", url));
  })
  .catch(err => console.error(err));
