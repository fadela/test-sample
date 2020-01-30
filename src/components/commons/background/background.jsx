import React, { Component } from "react";
import "./background.scss";
import "./canvas.js";
import BlueCircle from "../blueCircle/blueCircle";
import Menu from "../../menu/menu";

class Background extends Component {
  state = {};

  componentDidMount = () => {
    const canvas = this.refs.canvas;
    let context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //Gray Lines

    context.beginPath();
    for (let i = 0; i < 10; i++) {
      context.moveTo(200 * i, 0);
      context.lineTo(200 * i, window.innerWidth);
    }
    context.strokeStyle = "#C0AEBD";
    context.lineWidth = 0.12;
    context.stroke();

    //Second Gray-Blue Line

    context.beginPath();
    context.moveTo(400, 0);
    context.lineTo(400, 30);
    context.strokeStyle = "#F4F5F4";
    context.lineWidth = 0.5;
    context.stroke();

    context.beginPath();
    context.moveTo(400, 30);
    context.lineTo(400, 150);
    context.strokeStyle = "#5DF3F9";
    context.lineWidth = 0.7;
    context.stroke();

    // context.beginPath();
    // context.moveTo(100, 200);
    // context.lineTo(100, 150);
    // context.strokeStyle = "#5DF3F9";
    // context.lineWidth = 2;
    // context.stroke();

    //F word

    context.fillStyle = "#5DF3F9";
    context.font = "15px Arial";
    context.fillText("F", 700, 100);

    context.fillStyle = "#5DF3F9";
    context.font = "18px Arial";
    context.fillText("</>", 188, 550);
    context.fillStyle = "#F4F5F4";
    context.fillText("+", 195, 90);
  };

  render() {
    return (
      <div className="background">
        <div className="background__parts">
          <div className="blue-part"></div>
          <div className="gray-part"></div>
        </div>

        <div className="background__text top">
          <div className="top-text left">
            <h4>FADELA</h4>
          </div>
          <div className="white-line"></div>
          <div className="top-text right">
            <h4>/HOME</h4>
          </div>
        </div>

        <div className="background__text bottom">
          <div className="bottom-text left">
            <h4>CODER</h4>
          </div>
          <div className="white-line"></div>
          <div className="bottom-text right">
            <h4>R ____ L</h4>
          </div>
        </div>

        <div className="main">
          {this.props.children}
          <div className="word-wrapper">
            <div className="right-a-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#88959A"
                  stroke="none"
                >
                  <path
                    d="M4792 12188 c-61 -159 -294 -767 -437 -1143 -57 -148 -156 -407 -220
-575 -134 -350 -377 -986 -410 -1075 -13 -33 -87 -226 -165 -430 -78 -203
-197 -516 -265 -695 -68 -179 -152 -397 -186 -485 -33 -88 -137 -360 -231
-605 -213 -559 -212 -555 -258 -675 -22 -55 -92 -237 -155 -405 -64 -168 -177
-462 -250 -655 -74 -192 -168 -440 -210 -550 -42 -110 -153 -400 -246 -645
-154 -404 -189 -495 -273 -712 -15 -37 -73 -190 -130 -340 -57 -150 -159 -417
-226 -593 -68 -176 -130 -340 -140 -365 -9 -25 -42 -110 -72 -190 -31 -80
-121 -316 -201 -525 -80 -209 -149 -388 -152 -398 -7 -16 77 -17 1684 -17
l1691 0 24 48 c22 45 64 148 201 497 35 88 102 259 150 380 48 121 128 324
178 450 50 127 114 289 142 360 l52 130 1790 3 1790 2 23 -62 c12 -35 44 -124
72 -198 27 -74 72 -193 98 -265 27 -71 112 -303 190 -515 246 -670 244 -663
286 -757 l33 -73 1705 0 c1154 0 1706 3 1706 10 0 6 -47 135 -104 288 -110
293 -583 1556 -768 2052 -60 162 -143 383 -183 490 -41 107 -171 456 -290 775
-332 889 -548 1466 -645 1725 -90 239 -286 764 -675 1805 -119 319 -243 650
-275 735 -32 85 -156 416 -275 735 -266 712 -557 1491 -675 1805 -49 129 -135
360 -192 512 l-103 278 -1676 0 -1676 0 -51 -132z m1767 -4083 c32 -104 110
-352 171 -550 62 -198 146 -468 187 -600 41 -132 95 -305 120 -385 24 -80 65
-210 90 -290 25 -80 69 -221 98 -315 30 -93 71 -226 93 -295 l39 -125 -865 -3
c-476 -1 -867 -1 -869 1 -1 2 6 30 16 63 24 73 185 582 216 684 13 41 69 219
125 395 103 323 178 560 275 870 71 226 166 526 206 654 18 57 34 99 36 95 1
-5 29 -94 62 -199z"
                  />
                </g>
              </svg>
            </div>

            <div className="left-a-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#3D4347"
                  stroke="none"
                >
                  <path
                    d="M4792 12188 c-61 -159 -294 -767 -437 -1143 -57 -148 -156 -407 -220
-575 -134 -350 -377 -986 -410 -1075 -13 -33 -87 -226 -165 -430 -78 -203
-197 -516 -265 -695 -68 -179 -152 -397 -186 -485 -33 -88 -137 -360 -231
-605 -213 -559 -212 -555 -258 -675 -22 -55 -92 -237 -155 -405 -64 -168 -177
-462 -250 -655 -74 -192 -168 -440 -210 -550 -42 -110 -153 -400 -246 -645
-154 -404 -189 -495 -273 -712 -15 -37 -73 -190 -130 -340 -57 -150 -159 -417
-226 -593 -68 -176 -130 -340 -140 -365 -9 -25 -42 -110 -72 -190 -31 -80
-121 -316 -201 -525 -80 -209 -149 -388 -152 -398 -7 -16 77 -17 1684 -17
l1691 0 24 48 c22 45 64 148 201 497 35 88 102 259 150 380 48 121 128 324
178 450 50 127 114 289 142 360 l52 130 1790 3 1790 2 23 -62 c12 -35 44 -124
72 -198 27 -74 72 -193 98 -265 27 -71 112 -303 190 -515 246 -670 244 -663
286 -757 l33 -73 1705 0 c1154 0 1706 3 1706 10 0 6 -47 135 -104 288 -110
293 -583 1556 -768 2052 -60 162 -143 383 -183 490 -41 107 -171 456 -290 775
-332 889 -548 1466 -645 1725 -90 239 -286 764 -675 1805 -119 319 -243 650
-275 735 -32 85 -156 416 -275 735 -266 712 -557 1491 -675 1805 -49 129 -135
360 -192 512 l-103 278 -1676 0 -1676 0 -51 -132z m1767 -4083 c32 -104 110
-352 171 -550 62 -198 146 -468 187 -600 41 -132 95 -305 120 -385 24 -80 65
-210 90 -290 25 -80 69 -221 98 -315 30 -93 71 -226 93 -295 l39 -125 -865 -3
c-476 -1 -867 -1 -869 1 -1 2 6 30 16 63 24 73 185 582 216 684 13 41 69 219
125 395 103 323 178 560 275 870 71 226 166 526 206 654 18 57 34 99 36 95 1
-5 29 -94 62 -199z"
                  />
                </g>
              </svg>
            </div>

            <div className="f-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#3D4347"
                  stroke="none"
                >
                  <path
                    d="M3463 11133 c4 -654 10 -3176 14 -5605 l6 -4418 1599 0 1598 0 0
2130 0 2130 1540 0 1540 0 0 298 c1 163 3 780 7 1370 l5 1072 -1546 0 -1546 0
2 683 3 682 1647 3 1646 2 46 43 45 42 7 1378 7 1377 -3313 0 -3313 0 6 -1187z"
                  />
                </g>
              </svg>
            </div>

            <div className="e-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#3D4347"
                  stroke="none"
                >
                  <path
                    d="M3434 9068 c3 -1789 9 -4312 12 -5605 l6 -2353 3264 0 3263 0 3 1358
c2 746 2 1362 0 1367 -2 6 -22 25 -46 42 l-43 33 -1621 0 -1622 0 0 730 0 730
1580 0 1580 0 0 1370 0 1370 -1580 0 -1580 0 0 685 0 685 1628 0 1628 0 46 43
47 42 3 1378 3 1377 -3288 0 -3289 0 6 -3252z"
                  />
                </g>
              </svg>
            </div>

            <div className="right-d-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#3D4347"
                  stroke="none"
                >
                  <path
                    d="M1764 9753 c3 -1412 8 -3072 11 -3688 3 -616 8 -1983 11 -3038 l6
-1917 2287 0 c2368 0 2394 1 2711 40 820 102 1636 407 2335 873 684 456 1281
1097 1755 1887 107 179 304 576 383 775 207 515 334 1064 377 1624 15 198 12
648 -5 851 -96 1121 -527 2186 -1245 3079 -756 940 -1847 1645 -2980 1926
-205 51 -523 107 -700 125 -63 6 -128 14 -145 17 -16 4 -1105 8 -2419 10
l-2389 4 7 -2568z m4166 -302 c386 -51 681 -136 962 -277 92 -46 106 -55 233
-136 542 -350 964 -1000 1099 -1695 46 -235 59 -380 59 -643 0 -274 -15 -435
-64 -670 -75 -363 -207 -679 -416 -995 -387 -587 -955 -945 -1695 -1069 -224
-38 -387 -49 -748 -50 l-335 -1 -3 2784 -2 2784 377 -6 c298 -4 411 -10 533
-26z"
                  />
                </g>
              </svg>
            </div>

            <div className="left-d-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#3D4347"
                  stroke="none"
                >
                  <path
                    d="M1764 9753 c3 -1412 8 -3072 11 -3688 3 -616 8 -1983 11 -3038 l6
-1917 2287 0 c2368 0 2394 1 2711 40 820 102 1636 407 2335 873 684 456 1281
1097 1755 1887 107 179 304 576 383 775 207 515 334 1064 377 1624 15 198 12
648 -5 851 -96 1121 -527 2186 -1245 3079 -756 940 -1847 1645 -2980 1926
-205 51 -523 107 -700 125 -63 6 -128 14 -145 17 -16 4 -1105 8 -2419 10
l-2389 4 7 -2568z m4166 -302 c386 -51 681 -136 962 -277 92 -46 106 -55 233
-136 542 -350 964 -1000 1099 -1695 46 -235 59 -380 59 -643 0 -274 -15 -435
-64 -670 -75 -363 -207 -679 -416 -995 -387 -587 -955 -945 -1695 -1069 -224
-38 -387 -49 -748 -50 l-335 -1 -3 2784 -2 2784 377 -6 c298 -4 411 -10 533
-26z"
                  />
                </g>
              </svg>
            </div>

            <div className="l-word">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt"
                height="1280.000000pt"
                viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#88959A"
                  stroke="none"
                >
                  <path
                    d="M3584 11388 c3 -513 9 -3036 12 -5606 l7 -4672 3277 0 3277 0 7 77
c3 42 6 655 6 1364 l0 1287 -49 36 -49 36 -1633 2 -1634 3 -2 4190 c-1 2305
-2 4196 -2 4203 -1 9 -330 12 -1612 12 l-1612 0 7 -932z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="canvas-part">
            <canvas ref="canvas"></canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
