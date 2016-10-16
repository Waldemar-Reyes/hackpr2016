import React, { Component, PropTypes } from 'react';
// socket.io
// canvas
// getUserMedia

export default class WebCams extends Component {
  constructor() {
    super();
    this.state = {
      videoRef: null,
      canvasRef: null,
      videoInputs: [],
    }
  }

  gotStream(stream, videoRef) {
    window.stream = stream; // make stream available to console
    videoRef.srcObject = stream;
    // Refresh button list in case labels have become available
    return navigator.mediaDevices.enumerateDevices();
  }

  start(videoRef) {
    const videoInputs = this.state.videoInputs;
    const videoSource = videoInputs.length && videoInputs.deviceId;

    if (window.stream && videoSource) {
      window.stream.getTracks().forEach(
        function (track) {
          track.stop();
        }
      );
    }

    const constraints = {
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints).then(vid => {
        console.log('videoRef', videoRef.src);
        videoRef.src = window.URL.createObjectURL(vid);
      }
    )
  }

  drawFrame(ctx, video, canvas) {
    const quality = .6; // 0.1 - 1
    ctx.drawImage(video, 0, 0);
    const dataURL = canvas.toDataURL('image/jpeg', quality);
  }

  getVideoInputs() {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
             .then(
               devices => {
                 devices.forEach(
                   device => {
                     if (device.kind === 'videoinput') {
                       this.setState({ videoInputs: [...this.state.videoInputs, device] })
                     }
                   }
                 );
               }
             )
             .catch(
               function (err) {
                 console.log(err.name + ": " + err.message);
               }
             );
  }

  handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
  }

  componentDidMount() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
      return;
    }
    this.getVideoInputs();

  }

  render() {
    console.log('state', this.state);
    if (this.state.videoRef) {
      this.start(this.state.videoRef);
    }
    // use canvas to get the data back into the server
    return (
      <div>
        <div id="container">

          <video
            id="video"
            autoPlay
            onChange={this.start}
            ref={(e) => !this.state.videoRef ? this.setState({ videoRef: e }) : null }
          />
        </div>
        <canvas
          id="mycanvas"
          width="640"
          height="480"
          ref={(e) => !this.state.videoRef ? this.setState({ canvasRef: e }) : null }
        />
        <label htmlFor="select">Video Options</label>
        <select name="" id="">
          { this.state.videoInputs.map(
            item => {
              return (
                <option value={item.deviceId} key={item}>{item.deviceId}</option>);
            }
          )}
        </select>
      </div>
    )
  }
}