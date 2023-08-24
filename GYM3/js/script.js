"use strict";

// const place = confirm("Are you here?")
// console.log(place);

// console.log(6 +  +"9");

// incr, decr

// let increment  = 10;
// let decrement = 10;

const numbersOfSeries = +prompt("Nechita serial ko'rdingiz","");

const seriesDB = {
    count: numbersOfSeries,
    series:{},
    actors:{},
    genres:[],
    private: false,
};

const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt("Nechi baxo berasiz?"),
    c = prompt("Oxirgi ko'rgan serialingiz?"),
    d = prompt("Nechi baxo berasiz?");

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);