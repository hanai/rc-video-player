import React from 'react';

import './style.scss';
import './loadSvgIcon';

import ControlBar from './lib/ControlBar';

const ControlBarHeight = 28;

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      currentTime: 0,
      loadedTime: 0,
      duration: 0,
      bufferedArr: []
    };

    this.bindMethods();
  }

  static propTypes = {
    autoplay: React.PropTypes.bool,
    poster: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };

  static defaultProps = {
    autoplay: false,
    poster: null,
    width: 854,
    height: 480
  };

  bindMethods() {
    this.play = ::this.play;
    this.pause = ::this.pause;
    this.seek = ::this.seek;
    this.togglePlay = ::this.togglePlay;

    this.handleVideoPlay = ::this.handleVideoPlay;
    this.handleVideoPause = ::this.handleVideoPause;
    this.handleVideoDurationChange = ::this.handleVideoDurationChange;
    this.handleVideoTimeUpdate = ::this.handleVideoTimeUpdate;
    this.handleVideoProgress = ::this.handleVideoProgress;
    this.handleVideoLoadedMetadata = ::this.handleVideoLoadedMetadata;
  }

  componentDidMount() {
    this._controller = this.refs.player.controller ? this.refs.player.controller : this.refs.player;
  }

  play() {
    this._controller.play();
  }

  pause() {
    this._controller.pause();
  }

  seek(time) {
    this._controller.currentTime = time;
  }

  togglePlay() {
    if (this._controller.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  /* S: handle video event */
  handleVideoPlay() {
    this.setState({
      paused: false
    });
  }

  handleVideoPause() {
    this.setState({
      paused: true
    });
  }

  handleVideoDurationChange() {
    this.setState({
      duration: this._controller.duration
    });
  }

  handleVideoTimeUpdate() {
    this.setState({
      currentTime: this._controller.currentTime,
    });
  }

  handleVideoLoadedMetadata() {
  }

  handleVideoProgress() {
    const buffered = this._controller.buffered;
    let bufferedArr = [];

    for (var i = 0; i < buffered.length; i++) {
      bufferedArr.push([
        buffered.start(i),
        buffered.end(i)
      ]);
    }

    this.setState({
      bufferedArr: bufferedArr
    });
  }
  /* E: handle video event */

  render() {
    const props = this.props;

    return (
      <div className="player-box" style={{
        height: props.height + ControlBarHeight,
        width: props.width
      }}>
        <video ref="player"
               width={props.width}
               height={props.height}
               autoPlay={props.autoplay}
               poster={props.poster}
               controls={false}
               onClick={this.togglePlay}
               onPlay={this.handleVideoPlay}
               onPause={this.handleVideoPause}
               onProgress={this.handleVideoProgress}
               onDurationChange={this.handleVideoDurationChange}
               onLoadedMetadata={this.handleVideoLoadedMetadata}
               onTimeUpdate={this.handleVideoTimeUpdate}
        >
          {props.children}
        </video>
        <ControlBar paused={this.state.paused}
                    onClickPlay={this.togglePlay}
                    onClickProgressBar={this.seek}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    bufferedArr={this.state.bufferedArr}/>
      </div>
    )
  }
}

export default Player;