'use strict';

function Balloon(width, height) {}

Balloon.prototype.init(width, height)
{
  this._width = width;
  this._height = height;
}

Balloon.prototype.show = function (target, message) {
  var elem = document.querySelector('data-ballo1on="' + target + '"')
  elem.innerText = message;
  elem.style = 'width: "' + this._width + 'px"; height: ' + this._height + 'px"';
  elem.display = 'block';
}

Balloon.prototype.hide = function (target) {
  var elem = document.querySelector('data-balloon="' + target + '"');
  elem.innerText = '';
  elem.display = 'none';
}
