function convertToHumanTime(duration){
  let s = parseInt((duration / 1000) % 60, 10);
  const m = parseInt((duration / (1000 * 60)) % 60, 10);

  s = (s < 10) ? `0${s}` : s;
  return `${m}:${s}`;
}

function createMarkupTracks(tracks){
  return tracks.map(track => `
    <div class="music">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
    </div>`).join('');
}

export default function renderAlbumTracks(data, element){
  const markup = createMarkupTracks(data);
  element.innerHTML = markup;
}
