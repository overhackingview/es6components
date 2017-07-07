function createMarkupAlbum(data){
  return (`
    <img class="album-image" src="${data.images}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists}</p>
    <p class="album-counter">${data.tarcks.length} Músicas</p>
  `);
}

export default function renderAlbumInfo(data, element){
  const markup = createMarkupAlbum(data);
  element.innerHTML = markup;
}
