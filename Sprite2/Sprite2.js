/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 9.930335000000014,
        y: 9.930335000000014,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 150);
    this.clearPen();
    this.penDown = true;
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Sprite1"].y - this.y,
          this.sprites["Sprite1"].x - this.x
        )
      );
      this.direction += 89.04;
      this.move(5);
      yield;
    }
  }
}
