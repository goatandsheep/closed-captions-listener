class CaptionSync {
	/**
     * Listener for closed captions video events
     * @constructor
     * @param {String} vidId
     * @param {Function} showCallback callback when cue is shown
     * @param {Function} hideCallback callback when cue is hidden
     * @param {Boolean} [playPause=true] toggle pausing callback action
     */
	constructor(vidElement, showCallback, hideCallback, playPause = true) {
		this.vidEl = vidElement;
		const tracksList = vidElement.querySelectorAll('track');
		this.showCallback = showCallback;
		this.hideCallback = hideCallback;
		this.visible = false;
		if (playPause) {
			vidElement.addEventListener('pause', () => this.handlePause());
			vidElement.addEventListener('play', () => this.handlePlay());
		}

		this._toggle = false;
		for (let elementRef = 0, length_ = tracksList.length; elementRef < length_; elementRef++) {
			const element = tracksList[elementRef];
			element.addEventListener('cuechange', evt => this.handleCuechange(evt));
		}
	}

	handlePause() {
		if (this.visible === true) {
			this.hideCallback();
		}
	}

	handlePlay() {
		if (this.visible === true) {
			this.showCallback();
		}
	}

	handleCuechange(evt) {
		this._toggle = evt.target.track.activeCues.length;
		if (this._toggle) {
			this.showCallback();
			this.visible = true;
		} else {
			this.hideCallback();
			this.visible = false;
		}
	}

	close() {
		const tracksList = this.vidEl.querySelectorAll('track');
		for (let elementRef = 0, length_ = tracksList.length; elementRef < length_; elementRef++) {
			const element = tracksList[elementRef];
			element.addEventListener('cuechange', evt => this.handleCuechange(evt));
		}
	}
}

module.exports = CaptionSync;
