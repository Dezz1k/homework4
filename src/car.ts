class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: string) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(): void {
        this.speed = 120
        return this.speed
    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate()) // After fixing: will print 120
