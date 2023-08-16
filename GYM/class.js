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
    constructor(options){
        super(options)
        this.weight = options.weight;
    }
    speed(){
        super.speed();
        console.log('50 km/h');
    }

    get ExtraBalonInfo(){
        return this.extraBalon * 3; 
    }
 
}

const MAN = new Bus({
    name:'MAN',
    isAirBag:false,
    extraBalon:1,
    weight: '40.000 kg'
})