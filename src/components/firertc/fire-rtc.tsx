import { Component, Prop, h, State } from "@stencil/core";

@Component({
  tag: "fire-webrtc",
  styleUrl: "fire-rtc.scss",
  shadow: true
})

export class FirertcComponent {

  @Prop() src: string;

  @Prop() poster: string;

  @State() vid: any;

  @Prop() muted: boolean = true;

   video: HTMLVideoElement;

  componentDidLoad() {
    navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: true
    })
    .then(stream => {
      this.video.srcObject = stream;
      console.log(this.video);
    });
  }

  render() {
    return (
      <div class="video">
    <video ref={(el: HTMLVideoElement) => this.video = el}   autoplay playsinline preload="true"> Video stream not available.</video>
    </div>
    );

  }
}