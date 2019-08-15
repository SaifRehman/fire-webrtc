/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FireWebrtc {
    'muted': boolean;
    'poster': string;
    'src': string;
  }
}

declare global {


  interface HTMLFireWebrtcElement extends Components.FireWebrtc, HTMLStencilElement {}
  var HTMLFireWebrtcElement: {
    prototype: HTMLFireWebrtcElement;
    new (): HTMLFireWebrtcElement;
  };
  interface HTMLElementTagNameMap {
    'fire-webrtc': HTMLFireWebrtcElement;
  }
}

declare namespace LocalJSX {
  interface FireWebrtc extends JSXBase.HTMLAttributes<HTMLFireWebrtcElement> {
    'muted'?: boolean;
    'poster'?: string;
    'src'?: string;
  }

  interface IntrinsicElements {
    'fire-webrtc': FireWebrtc;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


