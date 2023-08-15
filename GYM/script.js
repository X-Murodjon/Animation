class Car{
    constructor(options) {
        this.name = options.name
        this.isAirBag = options.isAirBag
        this.extraBalon = options.extraBalon
    }

    speed(){
        console.log('100 km/h')
    }
}

const BMW = new Car({
    name: 'BMW',
    isAirBag: true,
    extraBalon: 2
})


class Bus extends Car {

}

const MAN = new Bus({
    name:'MAN',
    isAirBag:false,
    extraBalon:1
})