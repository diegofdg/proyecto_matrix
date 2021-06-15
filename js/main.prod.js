"use strict";

var element = document.querySelector('#canvas');
var ctx = element.getContext('2d');
var w = document.body.clientWidth;
var h = document.body.clientHeight;
element.width = w;
element.height = h;

var position = Array(300).join(0).split('');

var initMatrix = function initMatrix() {
  ctx.fillStyle = 'rgba(0, 10, 2, 0.20)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(0, 150, 0, 0.9)';
  ctx.font = '11px';
  position.map(function (y, index) {
    var text = String.fromCharCode(1e3 + Math.random() * 30);
    var x = index * 15 + 15;
    canvas.getContext('2d').fillText(text, x, y);

    if (y > 100 + Math.random() * 1e5) {
      position[index] = 0;
    } else {
      position[index] = y + 15;
    }
  });
};

setInterval(initMatrix, 70);