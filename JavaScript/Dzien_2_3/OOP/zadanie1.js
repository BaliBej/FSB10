class Duck {
    constructor() {
        this.type = "zwykła"
    }

    quack() {
        console.log("kwa kwa");
    }

    swim() {
        console.log("płynę...");
    }

    print() {
        console.log(`Wygląda jak ${this.type} kaczka`);
    }

    fly() {
        console.log(`Kaczka ${this.type} leci`);
    }
}

const duck = new Duck();
duck.quack();
duck.swim();
duck.print();

class WildDuck extends Duck {
    constructor() {
        super();
        this.type = "dzika";
    }
}

const wildDuck = new WildDuck();
wildDuck.quack();
wildDuck.swim();
wildDuck.print();

duck.fly();
wildDuck.fly();
