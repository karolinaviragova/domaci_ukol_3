
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

//1 Vypište do stránky všechna čísla.
numbers.forEach((num)=> {document.body.innerHTML += `<p>${num}</p>`})

//2 Vypište do stránky druhé mocniny všech čísel.
numbers.forEach((el) => {
  const druhaMocninaCisla = Math.pow(el, 2)
  document.body.innerHTML += `<p>${druhaMocninaCisla}</p>`
})


//3 Vypište do stránky pouze záporná čísla.

numbers.forEach((neg) => {
  if (neg < 0) {
    document.body.innerHTML += `<p>${neg}</p>`
  }
})

//4 Vypište do stránky absolutní hodnotu všech čísel.

numbers.forEach((numb) => {
  const absHodnota = Math.abs(numb);
  document.body.innerHTML += `<p>${absHodnota}</p>`
})

//5 Vypište do stránky pouze sudá čísla.

numbers.forEach((nums) => {
  if(nums % 2 == 0 || -0){
    document.body.innerHTML += `<p>${nums}</p>`;
  }
})


//6 Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
numbers.forEach((num)=> {
  if(Math.abs(num) % 3 === 0){
    document.body.innerHTML += `<p>${num}</p>`;
  }
})


//7 Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
let reverse = numbers.reverse();
numbers.forEach((prvek, index)=>{
  document.body.innerHTML += `<div> vzdalenost cisla ${prvek} od cisla 5 je ${index} </div>`
})


//8 Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
let druhaMocnina;
const reversed = numbers.reverse();
numbers.forEach((el, index) => {
  druhaMocnina = Math.pow(el, 2);
  document.body.innerHTML += `<div> Druha mocnina cisla ${el} je ${druhaMocnina} a jejich vzdalenost od cisla 5 je ${index}</div>`
})


//9 Spočítejte, kolik je v seznamu záporných čísel.
let zaporneCisla = 0;
numbers.forEach((num)=> {
  if(num < 0){
   zaporneCisla++;
  }
})
document.body.innerHTML += `<p>${zaporneCisla}</p>`


//10 Spočítejte součet všech čísel v poli.
let sums = 0;
numbers.forEach(numb => {
sums += numb;
})
document.body.innerHTML += `<p>${sums}</p>`


//11 Spočítejte průměr všech čísel v poli.
let sum = 0;
let prumer;
numbers.forEach(numb => {
prumer = (sum += numb) / (numbers.length);
})
document.body.innerHTML += `<p>${prumer}</p>`


//12 Spočítejte součet všech kladných čísel v poli.

let sumKladny = 0;

numbers.forEach((numb) => {
  if(numb > 0){
    sumKladny += numb;
  }
})
document.body.innerHTML += `<p>${sumKladny}</p>`

