// const number = 8;

// localStorage.removeItem('number');

// console.log(localStorage.getItem('number')); 
// localStorage.setItem('number', number.toString())

// console.log(localStorage.getItem('number'));

// localStorage.clear();

const persone = {
    name:'Samar',
    age: 20
}
localStorage.setItem('persone', JSON.stringify(persone)); // json format put localstorage

const localData = localStorage.getItem('persone');// json string format to obj format
const personeInfo = JSON.parse(localData);
// console.log(JSON.parse(localData));

personeInfo.name = 'Yusuf';
console.log(personeInfo);

localStorage.setItem('updatedPerson', JSON.stringify(personeInfo));
// const json = JSON.stringify(persone);

// console.log('obj to json',json);
// const obj = JSON.parse(json);
// console.log('json to obj', obj);





// localStorage.setItem('persone',persone.name)
// localStorage.setItem('persone',persone.age)