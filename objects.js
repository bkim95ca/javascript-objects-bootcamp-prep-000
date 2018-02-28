var playlist = {
  artistName: "songTitle"
}

function updateObjectWithKeyAndValue(obj, key, value)
  return Object.assign({}, obj, { [key]: value})
}

updatePlaylist('Phil Ochs', "Here's to the state of Mississippi")
