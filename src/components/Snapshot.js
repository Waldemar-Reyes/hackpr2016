import React, { Component, PropTypes } from 'react';
import QrCode from 'qrcode-reader';
var qr = new QrCode();
qr.callback = function (result, err) {
  if (result) {
    console.log(result)
  } else {
    console.log('no URL');
  }
};

class Snapshot extends Component {
  constructor() {
    super();
    this.state = {
      videoRef: null,
      canvasRef: null,
      buttonRef: null,
      img: null,
    }
  }

  componentDidMount() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
        || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(
          function () {
            callback(currTime + timeToCall);
          },
          timeToCall
        );
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };

  }

  onButtonClick = () => {
    const canvas = this.state.canvasRef;
    const video = this.state.videoRef;
    const context = canvas.getContext("2d");
    context.drawImage(
      video,
      0,
      0,
      300,
      300,
    );
    const dataUrl = canvas.toDataURL("image/png");
    const data = context.getImageData(0, 0, 300, 300);
    qr.decode(data);
    this.setState({ img: dataUrl });
  };

  render() {
    const canvas = this.state.canvasRef;
    const video = this.state.videoRef;

    if (video) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(
        vid => {
          video.src = window.URL.createObjectURL(vid);
        }
      );
    }
    return (
      <div>
        <video
          autoPlay
          ref={(e) => {
            !this.state.videoRef ? this.setState({ videoRef: e }) : null
          }}
          id="v"
          width="300"
          height="300">
        </video>
        <button
          ref={(e) => {
            !this.state.buttonRef ? this.setState({ buttonRef: e }) : null
          }}
          id="b"
          type="button"
          onClick={this.onButtonClick}
        >
          Take Picture!
        </button>
        <canvas
          ref={(e) => {
            !this.state.canvasRef ? this.setState({ canvasRef: e }) : null
          }}
          id="c"
          style={{ display: "none" }}
          width="300"
          height="300">
        </canvas>
        {this.state.img ?
          <div style={{
            background: 'url(' + this.state.img + ')',
            backgroundSize: 'cover',
            width: '300px',
            height: '300px',
          }}/> : null}
      </div>
    );
  }
}

export
default
Snapshot;

// default props
Snapshot
  .defaultProps = {};

// propTypes
Snapshot
  .propTypes = {};