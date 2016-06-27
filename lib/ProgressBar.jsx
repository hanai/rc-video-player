import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayHoverBar: false,
      pointerLeft: 0,
      playPercent: 0,
      mouseOffsetLeft: 0
    };

    this.bindMethods();
  }

  static propTypes = {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired,
    bufferedArr: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)).isRequired
  };

  bindMethods() {
    this.handleClickProgressBar = ::this.handleClickProgressBar;
    this.handleMouseEnterProgressBar = ::this.handleMouseEnterProgressBar;
    this.handleMouseLeaveProgressbar = ::this.handleMouseLeaveProgressbar;
    this.handleMouseMoveProgressBar = ::this.handleMouseMoveProgressBar;
  }

  componentWillReceiveProps(nextProps) {
    const {currentTime, duration} = nextProps;
    const progressLength = this.refs.progressList.clientWidth;
    this.setState({
      playPercent: duration ? `${(currentTime / duration) * 100}%` : 0,
      pointLeft: (duration ? (currentTime / duration) * progressLength : 0) + 'px'
    });
  }

  handleClickProgressBar(event) {
    const {duration} = this.props;

    const offsetX = event.nativeEvent.offsetX;
    const progressBar = event.currentTarget;

    let time = (offsetX/progressBar.clientWidth) * duration;

    this.props.onClickProgressBar(time);
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
    const offsetX = event.nativeEvent.offsetX;
    this.setState({
      mouseOffsetLeft: offsetX
    });
  }

  render() {
    const {currentTime, duration} = this.props;
    const {playPercent, pointLeft, displayHoverBar, mouseOffsetLeft} = this.state;

    return (
      <div className="progress-bar-container">
        <div className="progress-bar"
             ref="progressBar"
             onClick={this.handleClickProgressBar}
        >
          <div className="progress-list" ref="progressList"
               onMouseMove={this.handleMouseMoveProgressBar}
               onMouseEnter={this.handleMouseEnterProgressBar}
               onMouseLeave={this.handleMouseLeaveProgressbar}>
            <div className="play" style={{width: playPercent}}></div>
            <div className="buffer"></div>
            <div className="hover"
                 style={{opacity: displayHoverBar ? 1 : 0, width: mouseOffsetLeft}}></div>
          </div>
          <div className="pointer" style={{left: pointLeft}}></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;