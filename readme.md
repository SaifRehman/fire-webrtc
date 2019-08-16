![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Introduction

***Fire Webrtc*** is a framework agnostic web componenet that allows you to add simple live video conferencing features with just HTML tags. It is based in p2p webrtc protocol and firebase as a signalling server. It hides away the complexity of signalling, STUN/TURN server, and peer connections. You may run it in any framework with just few lines of HTML code.

## Quick start

1. Create a firebase account and get API credential in JSON format. JSON should be minified
2. Get STUN/TURN server. You mayb get a cheap one from Twilio, or use free version online from [viagenie](https://numb.viagenie.ca)
 example json STUN/TURN server
 ``` JSON
 {
"urls": [
"turn:13.250.13.83:3478?transport=udp"
],
"username": "YzYNCouZM1mhqhmseWk6",
"credential": "YzYNCouZM1mhqhmseWk6"
}
 ```
3. Load fire-webrtc library in HTML
``` HTML
  <script type="module" src="https://unpkg.com/fire-webrtc@0.0.6/dist/fire-rtc/fire-rtc.esm.js"></script>
  <script nomodule src="https://unpkg.com/fire-webrtc@0.0.6/dist/fire-rtc.js"></script>
```
4. Fire up the webcomponent

``` HTML
<fire-webrtc
    firebasecred= 'firebase credentials json minified'
    iceserver='ice server json minified'
  >
</fire-webrtc>
```
## Screenshot

![app](1.png)

## Todo
1. Create data channel web components
2. Add examples of integrating fire-webrtc with Angular, React, and Vue