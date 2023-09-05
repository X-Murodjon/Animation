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

    // for(let i = 0;i < 2; i++)
    // {
    //     const a = prompt("Oxirgi ko'rgan serialingiz?"),
    //           b = prompt("Nechi baxo berasiz?");

    //         if(a != null && b!=null && a!=""&& b!="")
    //         {
    //             seriesDB.series[a] = b;
    //             console.log("Done");
    //         }
    //         else{
    //             console.log("Error");
    //             i--;
    //         }
    // }

// let i = 0;
//     while(i < 2)
//     {
//         const a = prompt("Oxirgi ko'rgan serialingiz?"),
//               b = prompt("Nechi baxo berasiz?");

//             if(a != null && b!=null && a!=""&& b!="")
//             {
//                 seriesDB.series[a] = b;
//                 console.log("Done");
//             }
//             else{
//                 console.log("Error");
//                 i--;
//             }
//             i++;
//     }
let i = 0;
    do{
        const a = prompt("Oxirgi ko'rgan serialingiz?"),
              b = prompt("Nechi baxo berasiz?");

            if(a != null && b!=null && a!=""&& b!="")
            {
                seriesDB.series[a] = b;
                console.log("Done");
            }
            else{
                console.log("Error");
                i--;
            }
            i++;
    }while(i < 2);


    if(seriesDB.count < 5){
        console.log("Kam serial ko'ribsiz");
    }
    else if(seriesDB.count>=5 && seriesDB.count < 10){
        console.log("Siz klasik tomoshabin ekansiz");
    }
    else if(seriesDB.count>=10){
        console.log("Zvezdasiz");
    }
console.log(seriesDB);

// const age = +prompt("How old are you?","");
// if(age > 18){
//     console.log("Welcome");
// }
// else{
//     console.log("No entry");
// }
