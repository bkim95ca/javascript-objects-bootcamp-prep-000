var playlist = {
  artistName: "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

updatePlaylist('Phil Ochs', "Here's to the state of Mississippi")


delete playlist.artistName