import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'fire-webrtc',
  styleUrl: 'fire-rtc.css',
  shadow: true
})
export class FirertcComponent {
  /**
   * The video src
   */
  @Prop() src: string;

  /**
   * The image shown while the video is loading
   */
  @Prop() poster: string;

  /**
   * To mute the video
   */
  @Prop() muted: boolean = true;

  @Element() private videoElement: HTMLVideoElement; // pointer to the created video element

  componentDidLoad() {
    // sometimes, as the component is loaded dynamically, the video starts with sound, even if muted property is set to true
    if (this.muted) {
      this.videoElement.muted = true;
    }
  }

  render() {
    return < video autoplay loop playsinline preload="auto" muted={this.muted} src={this.src} poster={this.poster}></video>;
  }
}