class CaptionSync {
    /**
     * Listener for closed captions video events
     * @constructor
     * @param {String} vidId 
     * @param {Function} showCallback callback when cue is shown
     * @param {Function} hideCallback callback when cue is hidden
     */
    constructor(vidEl, showCallback, hideCallback) {
        this.vidEl = vidEl
        const tracksList = vidEl.getElementsByTagName('track')
        this.showCall = showCallback
        this.hideCall = hideCallback
        this._toggle = false
        for (let elRef = 0, len = tracksList.length; elRef < len; elRef++) {
            const el = tracksList[elRef]
            el.addEventListener('cuechange', handleCuechange)
        }
    }

    handleCuechange(evt) {
        this._toggle = evt.target.track.activeCues.length
        if (this._toggle) {
            this.showCall()
        } else {
            this.hideCall()
        }
    }
    close() {
        const tracksList = vidEl.getElementsByTagName('track')
        for (let elRef = 0, len = tracksList.length; elRef < len; elRef++) {
            const el = tracksList[elRef]
            el.addEventListener('cuechange', handleCuechange)
        }
    }
}

module.exports = CaptionSync