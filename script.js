'use strict'

let body = document.querySelector('body');

const DomElement = function (selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
   this.createFunction = function () {

      if (this.selector[0] == '.') {
         let div = document.createElement('div');
         div.classList.add(this.selector);
         div.textContent = 'Create by div';
         div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
         body.append(div);

      } else if (this.selector[0] == '#') {
         let p = document.createElement('p');
         p.id = this.selector;
         p.textContent = 'Create by paragraph';
         p.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
         body.append(p);
      }
   };
};

let newBlock = new DomElement('.block', '100px', '100%', 'blue', '36px');
let newParagraph = new DomElement('#best', '150px', '100%', 'yellow', '36px');

newBlock.createFunction();
newParagraph.createFunction();