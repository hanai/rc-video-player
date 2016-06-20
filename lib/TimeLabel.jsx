import React from 'react';

const TimeLabel = React.createClass({
  propTypes: {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired
  },
  _formatSeconds(seconds) {
    let h = parseInt(seconds / 3600);
    let m = parseInt(seconds % 3600 / 60);
    let s = parseInt(seconds % 3600 % 60);
    let fH = h ? h + ':' : '';
    let fM = m ? m < 10 ? '0' + m + ':' : m + ':' : '00:';
    let fS = s ? s < 10 ? '0' + s : s : '00';
    return `${fH}${fM}${fS}`;
  },
  render() {
    let {currentTime, duration} = this.props;
    let currentTimeSeconds = parseInt(currentTime);
    let durationSeconds = parseInt(duration);

    let formattedCurrentTime = this._formatSeconds(currentTimeSeconds);
    let formattedDuration = this._formatSeconds(durationSeconds);

    return (
      <div className="time-label">
        <span className="current">{formattedCurrentTime}</span> / <span className="duration">{formattedDuration}</span>
      </div>
    );
  }
});

module.exports = TimeLabel;