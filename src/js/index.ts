import * as PIXI from 'pixi.js';
import { Viewport } from "pixi-viewport"
import { Matrix } from 'pixi.js';

class ShowRoom {
  constructor() {
    console.log('init ...')
    const app = new PIXI.Application({transparent:true});
    document.body.appendChild(app.view);

    const viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: 300,
      worldHeight: 3000,

      interaction: app.renderer.plugins.interaction
      // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    })

    const sprite = PIXI.Sprite.from('ic_rotate.png');
    app.stage.addChild(viewport)
    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()




    const beatifulRect = new PIXI.Graphics();

    const m = new Matrix();
    m.scale(5.2, 5.2);
    
    beatifulRect.beginTextureFill({texture:sprite.texture,matrix:m, alpha: 1.5});
    beatifulRect.drawRect(80, 350, 250, 250);
    beatifulRect.endFill();

;

const graphics = new PIXI.Graphics()
graphics.beginFill(0xDE3249, 1);
graphics.drawCircle(80, 350, 250);
graphics.endFill();
viewport.addChild(graphics);


    viewport.addChild(beatifulRect);







  }
}

new ShowRoom();