function tempCheck(evt) {
    console.log(evt)
}

/**
 * Listener for closed captions video events
 * @param {String} vidId 
 * @param {Function} showCallback callback when cue is shown
 * @param {Function} hideCallback callback when cue is hidden
 */
function closedCaptionsListener(vidEl, showCallback, hideCallback) {
    const tracks = vidEl.textTracks()
    for (let i = 0, len = tracks.length; i < len; i++) {
        i.addEventListener('cuechange', tempCheck)
    }
}