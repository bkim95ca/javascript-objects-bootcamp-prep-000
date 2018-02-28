var playlist = {
  artistName: "songTitle"
}

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

const playlist = { artistName: "songTitle"}

updatePlaylist(playlist)
