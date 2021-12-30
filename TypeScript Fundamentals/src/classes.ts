/* eslint-disable max-classes-per-file */
class Engine {
  horsePower: number;

  engineType: string;

  constructor(horsePower: number, engineType: string) {
    this.horsePower = horsePower;
    this.engineType = engineType;
  }
}

class Car {
  private _engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if (value === undefined) throw 'Please supply an engine';
    this._engine = value;
  }

  start(): void {
    console.log(`Car engine started ${this._engine.engineType}`);
  }
}

class Auto {
  engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }
}

class Truck extends Auto {
  fourByfour: boolean;

  constructor(engine: Engine, fourByFour: boolean) {
    super(engine);
    this.fourByfour = fourByFour;
  }
}

window.onload = () => {
  const engine = new Engine(300, 'V8');
  const car = new Car(engine);
  console.log(car.engine.horsePower);
  console.log(car.engine.engineType);
  car.start();
};
