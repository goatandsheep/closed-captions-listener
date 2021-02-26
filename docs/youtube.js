
class YoutubeCaption {

    constructor(showCallback, hideCallback) {
        this._open = false
        this.showCallback = showCallback
        this.hideCallback = hideCallback


        document
        .querySelector(".ytp-caption-window-container")
        .addEventListener("DOMSubtreeModified", handleCueChange);
    }

    handleCueChange (evt) {
        if (evt.target.className === "ytp-caption-window-container") {
            if (this._open) {
                this.showCallback()
            } else {
                this.hideCallback()
            }
            this._open = !this._open
        }
    };

}