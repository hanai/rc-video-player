import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayHoverBar: false,
      hoverBarLength: 0,
      pointerLeft: 0,
      playPercent: 0
    };

    this.handleMouseEnterProgressBar = ::this.handleMouseEnterProgressBar;
    this.handleMouseLeaveProgressbar = ::this.handleMouseLeaveProgressbar;
    this.handleMouseMoveProgressBar = ::this.handleMouseMoveProgressBar;
  }

  static propTypes = {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired,
    buffered: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
  };

  componentWillReceiveProps(nextProps) {
    const {currentTime, duration} = nextProps;
    const progressLength = this.refs.progressList.clientWidth;
    this.setState({
      playPercent: duration ? `${(currentTime / duration) * 100}%` : 0,
      pointLeft: (duration ? (currentTime / duration) * progressLength : 0) + 'px'
    });
  }

  handleMouseEnterProgressBar() {
    this.setState({
      displayHoverBar: true
    });
  }

  handleMouseLeaveProgressbar(event) {
    let posX = event.pageX;
    let posY = event.pageY;
    this.setState({
      displayHoverBar: false
    });
  }

  handleMouseMoveProgressBar(event) {
    let eX = event.clientX;
    let barBounding = this.refs.progressList.getBoundingClientRect();
    let barX = barBounding.left;
    let offset = eX - barX;
    this.setState({
      hoverBarLength: offset
    });
  }

  render() {
    const {currentTime, duration} = this.props;
    const {playPercent, pointLeft, displayHoverBar, hoverBarLength} = this.state;

    return (
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-list" ref="progressList"
               onMouseMove={this.handleMouseMoveProgressBar}
               onMouseEnter={this.handleMouseEnterProgressBar}
               onMouseLeave={this.handleMouseLeaveProgressbar}>
            <div className="play" style={{width: playPercent}}></div>
            <div className="buffer"></div>
            <div className="hover"
                 style={{opacity: displayHoverBar ? 1 : 0, width: hoverBarLength}}></div>
          </div>
          <div className="pointer" style={{left: pointLeft}}></div>
        </div>
      </div>
    );
  }
}

module.exports = ProgressBar;