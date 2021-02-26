class CaptionSync {
    /**
     * Listener for closed captions video events
     * @constructor
     * @param {String} vidId 
     * @param {Function} showCallback callback when cue is shown
     * @param {Function} hideCallback callback when cue is hidden
     */
    constructor(vidEl, showCallback, hideCallback) {
        this.vidEl = document.getElementById(vidEl)
        this.showCall = showCallback
        this.hideCall = hideCallback
        this._toggle = false
        this.vidEl.addEventListener('cuechange', handleCuechange)
    }

    handleCuechange(evt) {
        this._toggle = evt.target.track.activeCues.length
        if (this._toggle) {
            showCall()
        } else {
            hideCall()
        }
    }
}

module.exports = CaptionSync