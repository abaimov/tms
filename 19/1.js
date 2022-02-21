const response = await fetch("https://jsonplaceholder.typicode.com/albums");

let albumsArr = [];

if (response.ok) {
  let albums = await response.json();
  for (let album of albums) {
    if (album.userId == 1 || album.userId == 4) {
      albumsArr.push(album);
    }
  }
} else {
  console.log("Ошибка HTTP: " + response.status);
}

console.log(albumsArr);
