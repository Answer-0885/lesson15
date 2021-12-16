'use strict'

//Перемещение объекта с помощью стрелок клавиатуры
document.addEventListener("DOMContentLoaded", function () {

   const DomElement = function (selector, height, width, bg, fontSize, position) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.position = position;
      this.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};position: ${this.position};`;
      this.createFunction = function () {

         let newBlock;

         if (this.selector[0] == '.') {
            newBlock = document.createElement('div');
         }

         newBlock.style.cssText = this.cssText;
         newBlock.style.cssText += `left: ${Math.round(window.innerWidth / 2 - parseInt(this.width) / 2)}px;`;
         newBlock.style.cssText += `top: ${Math.round(window.innerHeight / 2 - parseInt(this.height) / 2)}px;`;

         return newBlock;
      };
   };

   let square = new DomElement('.block', '100px', '100px', '#800080', '36px', 'absolute');
   document.body.append(square.createFunction());

   document.addEventListener('keydown', (event) => {
      const line = 10;
      const div = document.querySelector('div');
      if (event.key === 'ArrowUp') {
         div.style.top = parseInt(div.style.top) - line + 'px';
      }
      if (event.key === 'ArrowRight') {
         div.style.left = parseInt(div.style.left) + line + 'px';
      }
      if (event.key === 'ArrowLeft') {
         div.style.left = parseInt(div.style.left) - line + 'px';
      }
      if (event.key === 'ArrowDown') {
         div.style.top = parseInt(div.style.top) + line + 'px';
      }
   });

});