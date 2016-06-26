import React from 'react';
import './style.scss';

import ControlBar from './lib/ControlBar';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      currentTime: 0,
      loadedTime: 0,
      duration: 0,
      buffered: [0, 0]
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
    poster: '',
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

  handleVideoProgress() {
    if (this._controller.readyState === 4) {
      const buffered = this._controller.buffered;
      this.setState({
        buffered: [buffered.start(0), buffered.end(0)]
      });
    }
  }
  /* E: handle video event */

  render() {
    return (
      <div className="player-box" style={{width: this.props.width, height: this.props.height}}>
        <video ref="player"
               width={this.props.width}
               height={this.props.height}
               autoPlay={this.props.autoplay}
               poster={this.props.poster ? this.props.poster : null}
               controls={false}
               onClick={this.togglePlay}
               onPlay={this.handleVideoPlay}
               onPause={this.handleVideoPause}
               onProgress={this.handleVideoProgress}
               onDurationChange={this.handleVideoDurationChange}
               onTimeUpdate={this.handleVideoTimeUpdate}
        >
          {this.props.children}
        </video>
        <ControlBar paused={this.state.paused}
                    onClickPlay={this.togglePlay}
                    onClickProgressBar={this.seek}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    buffered={this.state.buffered}/>
      </div>
    )
  }
}

export default Player;