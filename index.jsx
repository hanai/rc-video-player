import React from 'react';
import './style.scss';

import ControlBar from './lib/ControlBar';

const Player = React.createClass({
  propTypes: {
    autoplay: React.PropTypes.bool,
    poster: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      autoplay: false,
      poster: '',
      width: 854,
      height: 480
    }
  },
  getInitialState() {
    return {
      paused: true,
      currentTime: 0,
      loadedTime: 0,
      duration: 0,
      buffered: [0, 0]
    }
  },
  componentDidMount() {
    this._controller = this.refs.player.controller ? this.refs.player.controller : this.refs.player;
  },
  _play() {
    this._controller.play();
  },
  _pause() {
    this._controller.pause();
  },
  _togglePlay() {
    if (this._controller.paused) {
      this._play();
    } else {
      this._pause();
    }
  },
  _handlePlay() {
    this.setState({
      paused: false
    });
  },
  _handlePause() {
    this.setState({
      paused: true
    });
  },
  _handleDurationChange() {
    this.setState({
      duration: this._controller.duration
    });
  },
  _handleTimeUpdate() {
    this.setState({
      currentTime: this._controller.currentTime,
    });
  },
  _handleProgress() {
    if (this._controller.readyState === 4) {
      const buffered = this._controller.buffered;
      console.log([buffered.start(0), buffered.end(0)]);
      this.setState({
        buffered: [buffered.start(0), buffered.end(0)]
      });
    }
  },
  render() {
    return (
      <div className="player-box" style={{width: this.props.width, height: this.props.height}}>
        <video ref="player"
               width={this.props.width}
               height={this.props.height}
               autoPlay={this.props.autoplay}
               poster={this.props.poster ? this.props.poster : null}
               controls={false}
               onClick={this._togglePlay}
               onPlay={this._handlePlay}
               onPause={this._handlePause}
               onProgress={this._handleProgress}
               onDurationChange={this._handleDurationChange}
               onTimeUpdate={this._handleTimeUpdate}
        >
          {this.props.children}
        </video>
        <ControlBar paused={this.state.paused}
                    onClickPlay={this._togglePlay}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    buffered={this.state.buffered}/>
      </div>
    )
  }
});

module.exports = Player;