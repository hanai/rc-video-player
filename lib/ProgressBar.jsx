import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointerLeft: 0,
      playPercent: 0,
      mouseOffsetRight: 0
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
    this.handleMouseEnterProgressList = ::this.handleMouseEnterProgressList;
    this.handleMouseLeaveProgressList = ::this.handleMouseLeaveProgressList;
    this.handleMouseMoveProgressList = ::this.handleMouseMoveProgressList;
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

  handleMouseEnterProgressList() {
  }

  handleMouseLeaveProgressList(event) {
    const totalLength = this.refs.progressList.clientWidth;

    this.setState({
      mouseOffsetRight: totalLength
    });
  }

  handleMouseMoveProgressList(event) {
    const progressList = this.refs.progressList;
    const offsetX = event.clientX - progressList.getBoundingClientRect().left;
    const totalLength = progressList.clientWidth;

    this.setState({
      mouseOffsetRight: totalLength - offsetX
    });
  }

  renderBufferLine({bufferedArr, currentTime, duration}) {
    let bufferLine = null;
    if (bufferedArr.length > 0) {
      bufferedArr.forEach(bufferedRange => {
        if ((bufferedRange[0] <= currentTime) && (currentTime <= bufferedRange[1])) {
          bufferLine = <div className="buffer-line" style={{
            left: `${bufferedRange[0]/duration}%`,
            right: `${(duration-bufferedRange[1])/duration*100}%`
          }}></div>
        }
      });
    }
    return bufferLine;
  }

  render() {
    const {currentTime, duration, bufferedArr} = this.props;
    const {playPercent, pointLeft, mouseOffsetRight} = this.state;

    return (
      <div className="progress-bar-container">
        <div className="progress-bar"
             ref="progressBar"
             onClick={this.handleClickProgressBar}
        >
          <div className="progress-list" ref="progressList"
               onMouseMove={this.handleMouseMoveProgressList}
               onMouseEnter={this.handleMouseEnterProgressList}
               onMouseLeave={this.handleMouseLeaveProgressList}>
            {
              this.renderBufferLine({bufferedArr, currentTime, duration})
            }
            <div className="play-line" style={{width: playPercent}}></div>
            <div className="mask-line"
                 style={{width: mouseOffsetRight}}></div>
          </div>
          <div className="pointer" style={{left: pointLeft}}></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;