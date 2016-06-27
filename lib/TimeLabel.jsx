import React from 'react';

class TimeLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    currentTime: React.PropTypes.number,
    duration: React.PropTypes.number
  };

  static defaultProps = {
    currentTime: 0,
    duration: 0
  };

  formatSeconds(seconds) {
    let h = parseInt(seconds / 3600);
    let m = parseInt(seconds % 3600 / 60);
    let s = parseInt(seconds % 3600 % 60);
    let fH = h ? h + ':' : '';
    let fM = m ? m < 10 ? '0' + m + ':' : m + ':' : '00:';
    let fS = s ? s < 10 ? '0' + s : s : '00';
    return `${fH}${fM}${fS}`;
  }

  render() {
    const {currentTime, duration} = this.props;
    const currentTimeString = this.formatSeconds(currentTime);
    const durationString = this.formatSeconds(duration);

    return (
      <div className="time-label">
        <span className="current">{currentTimeString}</span> / <span className="duration">{durationString}</span>
      </div>
    );
  }
}

export default TimeLabel;