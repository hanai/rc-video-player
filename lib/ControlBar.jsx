import React from 'react';

import ProgressBar from './ProgressBar';
import TimeLabel from './TimeLabel.jsx';
import PlayIcon from '../assets/play-icon.svg';
import PauseIcon from '../assets/pause-icon.svg';

const ControlBar = React.createClass({
  propTypes: {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired,
    onClickPlay: React.PropTypes.func.isRequired,
    buffered: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
  },
  _handleClickPlay() {
    this.props.onClickPlay();
  },
  render() {
    let {currentTime, duration, buffered, onClickProgressBar} = this.props;

    return (
      <div className="control-bar">
        <div className="play-btn" aria-role="button" onClick={this._handleClickPlay}
             aria-label={this.props.paused ? 'play' : 'pause'}>
          {
            this.props.paused ?
              <PlayIcon /> :
              <PauseIcon />
          }
        </div>
        <ProgressBar currentTime={currentTime}
                     duration={duration}
                     buffered={buffered}
                     onClickProgressBar={onClickProgressBar}
        />
        <TimeLabel currentTime={currentTime}
                   duration={duration}/>
      </div>
    )
  }
});

module.exports = ControlBar;