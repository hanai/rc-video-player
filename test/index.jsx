import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../';

var App = React.createClass({
  render() {
    return (
      <Player poster="./assets/poster.png" autoplay width={400} height={200}>
        <source id="mp4" src="./assets/trailer.mp4" type="video/mp4"/>
        <source id="webm" src="./assets/trailer.webm" type="video/webm"/>
        <source id="ogv" src="./assets/trailer.ogv" type="video/ogg"/>
        <p>Your browser does not support the HTML5 Video element.</p>
      </Player>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));