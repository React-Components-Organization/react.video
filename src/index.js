/* jshint strict: true */
/* jshint esversion: 6 */

/**
 * @author oliviercolonna@gmail.com
 * Copyright(c) 2016 Olivier Colonna
 * MIT Licensed
 *
 * ReactVideo
 */

import React from 'react';

class ReactVideo extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      volume: 1,
      playbackRate: 1
    };
  }

  /**
   * The canPlayType() method checks if the browser can play the specified audio/video type.
   * @param {string} format, common values (video/mp4, video/webm, audio/mpeg, audio/ogg, audio/mp4).
   * @return {string} format, common values, including codecs.
   */
  canPlayType (format) {
    return this.refs.ReactVideo.canPlayType(format);
  }

  /**
   * return if the media is currently playing.
   * @return {Boolean} playing, return the playback playing status.
   */
  isPlaying () {
    return !Boolean(this.refs.ReactVideo.paused);
  }

  /**
   * get whenever the media playback has ended.
   * @return {Boolean} ended, return the playback ended status.
   */
  isEnded () {
    return Boolean(this.refs.ReactVideo.ended);
  }

  /**
   * Will begin loading the media immediately.
   */
  load () {
    this.refs.ReactVideo.load();
  }

  /**
   * Starts or resumes media playback.
   */
  play () {
    this.refs.ReactVideo.play();
  }

  /**
   * Pauses media playback.
   */
  pause () {
    this.refs.ReactVideo.pause();
  }

  /**
   * Stops media playback and returns to the beginning.
   */
  stop () {
    const me = this;

    me.setCurrentTime(0);
    me.pause();
  }

  /**
   * The duration property returns the length of the current audio/video, in seconds.
   * @return {number} duration, A Number representing the length of the video, in seconds. If no video is set, "NaN" (Not-a-Number) is returned.
   */
  getDuration () {
    return this.refs.ReactVideo.duration;
  }

  /**
   * Returns the current time of the media, in seconds.
   * @return {Number} seconds.
   */
  getCurrentTime () {
    return this.refs.ReactVideo.currentTime;
  }

  /**
   * Retun the current volume of the video.
   * @return {number} Must be a number between 0.0 and 1.0.
   */
  getVolume () {
    return this.state.volume;
  }

  /**
   * The TimeRanges object represents the user's buffered ranges of the video.
   * @return {object} TimeRanges Object.
   * length - get the number of buffered ranges in the audio/video
   * start(index) - get the start position of a buffered range
   * end(index) - get the end position of a buffered range
   */
  getBuffered () {
    const vid = this.refs.ReactVideo;
    
    return vid.buffured;
  }

  /**
   * @return {number} Number, the current playback speed.
   */
  getPlaybackRate () {
    return this.state.playbackRate;
  }

  /**
   * Returns the value of url.
   * @return {string} return the src value of the video.
   */
  getUrl () {
    return this.refs.ReactVideo.url;
  }

  /**
   * Set the current time of the media.
   * @param {Number} time The time, in seconds.
   * @return {Number} return time in seconds.
   */
  setCurrentTime (time) {
    this.refs.ReactVideo.currentTime = time;

    return time;
  }

  /**
   * Set the current volume of the media.
   * @param {number} volume, Specifies the current volume of the audio/video. Must be a number between 0.0 and 1.0. 
   */
  setVolume (volume) {
    this.setState({volume: volume});

    this.refs.ReactVideo.volume = this.getVolume();
  }

  /**
   * Set video to play in slow motion.
   * The playbackRate property sets the current playback speed of the video.
   * @param {number} rate, Indicates the current playback speed of the video.
   * @example
   * 1.0 is normal speed
   * 0.5 is half speed (slower)
   * 2.0 is double speed (faster)
   * -1.0 is backwards, normal speed
   * -0.5 is backwards, half speed
   */
  setPlaybackRate (rate) {
    this.setState({playbackRate: rate});

    this.state.playbackRate = this.getPlaybackRate();
  }

  /**
   * Toggles the media playback state.
   */
  toggle () {
    if (this.isPlaying()) {
      this.pause();
    } else {
      this.play();
    }
  }

  render () {
    const { not_supported_message, cls, source } = this.props;

    return (
      <video ref={'ReactVideo'} className={`video ${cls}`} {...this.props}>
        {not_supported_message}
        {source.map((item, i) => {
          return (
            <source src={item.src} type={item.type} key={i} />
          );
        })}
      </video>
    );
  }
};

ReactVideo.defaultProps = {
  cls: void 0,
  autoPlay: false,
  src: void 0,
  source: [],
  controls: true,
  loop: false,
  muted: false,
  posterUrl: void 0,
  preload: true,
  width: null,
  height: null,
  not_supported_message: 'Sorry your browser does not support HTML5 video',
  style: {}
};

ReactVideo.propTypes = {
  baseCls: React.PropTypes.string,
  autoPause: React.PropTypes.bool,
  autoResume: React.PropTypes.bool,
  source: React.PropTypes.arrayOf(React.PropTypes.object),
  src: React.PropTypes.string,
  controls: React.PropTypes.bool,
  loop: React.PropTypes.bool,
  posterUrl: React.PropTypes.string,
  preload: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default ReactVideo;
