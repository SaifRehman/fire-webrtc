import { Component, Prop, h } from "@stencil/core";
import firebase from "firebase";

@Component({
  tag: "fire-webrtc",
  styleUrl: "fire-rtc.scss",
  shadow: true
})
export class FirertcComponent {
  @Prop() firebasecred: string;

  @Prop() iceserver: string;

  public yourId: any;

  public stream: any;

  public pc: any;

  public database: any;

  public app: any;

  video: HTMLVideoElement;

  @Prop() someFunc: Function

  endvideo: HTMLVideoElement;

  componentDidLoad() {
    console.log(JSON.parse(this.firebasecred), JSON.parse(this.iceserver));
    this.app = firebase.initializeApp(JSON.parse(this.firebasecred));
    this.initYourCamera();
    this.initWebrtcConnection();
  }

  initYourCamera() {
    this.pc = new RTCPeerConnection(JSON.parse(this.iceserver));
    this.database = firebase.database().ref();
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true
      })
      .then(stream => {
        this.video.srcObject = stream;
        this.stream = stream;
        stream.getTracks().forEach(track => this.pc.addTrack(track, stream));
      });
  }
  sendMessage(senderId, data) {
    const msg = this.database.push({
      sender: senderId,
      message: data
    });
    msg.remove();
  }
  initWebrtcConnection() {
    const yourId = Math.floor(Math.random() * 1000000000);
    this.yourId = yourId;
    this.pc.onicecandidate = event => {
      if (event.candidate) {
        this.sendMessage(
          yourId,
          JSON.stringify({
            ice: event.candidate
          })
        );
      } else {
        console.log("all ice has been sent");
      }
    };
    this.pc.ontrack = event => {
      if (event.streams && event.streams[0]) {
        this.endvideo.srcObject = event.streams[0];
      }
    };

    this.database.on("child_added", data => {
      const msg = JSON.parse(data.val().message);
      const sender = data.val().sender;
      if (sender !== yourId) {
        if (msg.ice) {
          if (this.pc) {
            this.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
          }
        } else if (msg.sdp.type === "offer" && this.pc) {
          this.pc
            .setRemoteDescription(new RTCSessionDescription(msg.sdp))
            .then(() => this.pc.createAnswer())
            .then(answer => {
              return this.pc.setLocalDescription(answer);
            })
            .then(() =>
              this.sendMessage(
                yourId,
                JSON.stringify({
                  sdp: this.pc.localDescription
                })
              )
            );
        } else if (msg.sdp.type === "answer" && this.pc) {
          this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
      }
    });
  }

  showFriendsFace() {
    console.log("calling call method");
    this.pc
      .createOffer()
      .then(offer => this.pc.setLocalDescription(offer))
      .then(() =>
        this.sendMessage(
          this.yourId,
          JSON.stringify({
            sdp: this.pc.localDescription
          })
        )
      );
  }

  render() {
    return (
      <div>
        <div class="fab" onClick={() => this.showFriendsFace()}> 📞 </div>
          <video class="endvideo"
            ref={(el: HTMLVideoElement) => (this.endvideo = el)}
            autoplay
            playsinline
            preload="true"
          >
            Video stream not available.
          </video>
          <video class="video" 
            ref={(el: HTMLVideoElement) => (this.video = el)}
            autoplay
            playsinline
            preload="true"
          >
            Video stream not available.
          </video>
      </div>
    );
  }
}
