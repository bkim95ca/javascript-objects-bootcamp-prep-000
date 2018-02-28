var playlist = {
  artistName: "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

updatePlaylist('Phil Ochs', "Here's to the state of Mississippi")


function removeFromPlaylist(playlist, artistName) {
  return Object.assign({ artistName: songTitle }, artistName)

}

removeFromPlaylist("Kanye")
