/* eslint-disable max-classes-per-file */
class Engine {
  constructor(public horsePower: number, public engineType: string) {}

  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }

  stop(callback: (stopStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }
}

class Accessory {
  constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
  private _basePrice: number;

  private _engine: Engine;

  make: string;

  model: string;

  accessoryList: string;

  constructor(basePrice: number, engine: Engine, make: string, model: string) {
    this.engine = engine;
    this.basePrice = basePrice;
    this.make = make;
    this.model = model;
  }

  calculateTotal(): number {
    const taxRate = 0.08;
    return this.basePrice + taxRate * this.basePrice;
  }

  addAccessories(...accessories: Accessory[]) {
    this.accessoryList = '';
    for (let i = 0; i < accessories.length; i += 1) {
      const ac = accessories[i];
      this.accessoryList += `${ac.accessoryNumber} ${ac.title}
      `;
    }
  }

  getAccessoryList(): string {
    return this.accessoryList;
  }

  get basePrice(): number {
    return this._basePrice;
  }

  set basePrice(value: number) {
    if (value <= 0) throw 'Price must be >= 0';
    this._basePrice = value;
  }
}

window.onload = () => {
  const auto = new Auto(28500, new Engine(300, 'V8'), 'Chevrolet', 'Silverado');
}
