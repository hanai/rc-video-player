import React from 'react';

import ProgressBar from './ProgressBar';
import TimeLabel from './TimeLabel.jsx';
import PlayIcon from '../assets/play-icon.svg';
import PauseIcon from '../assets/pause-icon.svg';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);

    this.bindMethods();
  }

  static propTypes = {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired,
    onClickPlay: React.PropTypes.func.isRequired,
    bufferedArr: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)).isRequired
  };

  bindMethods() {
    this.handleClickPlay = ::this.handleClickPlay;
  }

  handleClickPlay() {
    this.props.onClickPlay();
  }

  render() {
    const {currentTime, duration, bufferedArr, onClickProgressBar} = this.props;

    return (
      <div className="control-bar">
        <div className="play-btn" aria-role="button" onClick={this.handleClickPlay}
             aria-label={this.props.paused ? 'play' : 'pause'}>
          {
            this.props.paused ?
              <PlayIcon /> :
              <PauseIcon />
          }
        </div>
        <ProgressBar currentTime={currentTime}
                     duration={duration}
                     bufferedArr={bufferedArr}
                     onClickProgressBar={onClickProgressBar}
        />
        <TimeLabel currentTime={currentTime}
                   duration={duration}/>
      </div>
    )
  }
}

export default ControlBar;