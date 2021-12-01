import * as PIXI from 'pixi.js';

class ShowRoom {
  constructor() {
      console.log('init ...')
      const app = new PIXI.Application();
      document.body.appendChild(app.view);
  }
}

new ShowRoom();