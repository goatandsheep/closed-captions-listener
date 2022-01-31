(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CaptionSync = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        this.showCallback = showCallback
        this.hideCallback = hideCallback
        this._toggle = false
        for (let elRef = 0, len = tracksList.length; elRef < len; elRef++) {
            const el = tracksList[elRef]
            el.addEventListener("cuechange", (evt) => this.handleCuechange(evt));
        }
    }

    handleCuechange(evt) {
        this._toggle = evt.target.track.activeCues.length;
        if (this._toggle) {
          this.showCallback();
        } else {
          this.hideCallback();
        }
      }
      close() {
        const tracksList = this.vidEl.getElementsByTagName("track");
        for (let elRef = 0, len = tracksList.length; elRef < len; elRef++) {
          const el = tracksList[elRef];
          el.addEventListener("cuechange", (evt) => this.handleCuechange(evt));
        }
      }
}

module.exports = CaptionSync

},{}]},{},[1])(1)
});
