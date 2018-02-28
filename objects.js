var playlist = {
  artistName: "songTitle"
}

function updatePlaylist(playlist, 'artistName') {
  return Object.assign({}, playlist, artistName)
}
