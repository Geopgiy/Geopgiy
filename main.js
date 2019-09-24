console.clear();
//*****Лекция 2*****
// const n='Гера'
// const i='22'
// function name(a,b) {
//   console.log(a,'-',b,'лет')
// }
// name(n,i) // вызывает функцию результат которой выдача сообщения в консоль
// console.log('РАБОТА ЦИКЛА') // Выдает текст "работа цикла"
// for(let i=0; i<2; i++){
//   console.log(i)
// } // Выдает цифры от 0 до 1
// function getName(){
//   return 'Gera'
// } // Присвает  ФУНКЦИИ СТРОКУ Гера
// for(let i=0; i<2; i++){
//   const name1=getName()
//   console.log(name1)
// }

// //сonst arr=[1,2,3,4,5,{name:'Gera',age: 42},'Опа']
// //console.log(arr[0])
// const arr = [1,2,3,4,5];
// console.log(arr[0])
// arr.push(123) // добавляет в конец массива новый элемент
// console.log(arr[5])
// arr.splice(1,1) // удаляет элемент массива с 1 в колличестве 1
// console.log(arr)

// const getage = () =>{
//   console.log(12345)
// }
// getage()
// const massive =[1,2,3,4,5]
// massive.forEach(   // Создает счетчик в функции и обращается по элементно к массиву выполняя функцию
//   (i)=>{
//     console.log(i)
//   }
// )
// const massive2 = massive.map((i)=>{  // Тоже самое что и forEach но возвращает новое значение каждому элементу в массив 2
//   return i*2
// })
// console.log(massive)
// console.log(massive2)
// console.log(massive.length) // Длина массива
// const massive3 = massive.filter((i)=>{ //Ищет какую-то часть например все двойки в массиве
//   return i===2
// })
// console.log(massive3)
//*************************Конец лекции



console.log('Задача 1')
console.log(' Написать функцию, которая принимает два числа a, b, и выводи в консоль строку формата «а больше/меньше/равно b на n”')
  const Sravnenie=(a,b)=>{
    if (a>b) {
      result = (a-b);
      console.log(a,'больше',b,'на',result)}
      else if (a<b){
        result = -(a-b);
        console.log(a,'меньше',b,'на',result);
      }
      else if (a=b){
        console.log(a,'равно',b)}
}
Sravnenie(2,3)
Sravnenie(3,3)
Sravnenie(4,3)

console.log('    ')
console.log('Задача 2')
console.log(` Написать функцию, которая сортирует массив [‘Саша’, ‘Андрей’, ‘Олег’,’Юлия’, ‘Ксения’, ‘Артём’] в алфавитном порядке
и выводит новый массив в консоль.`);
let Names=['Саша','Андрей','Олег','Юлия','Ксения','Артём'];
const Alphabet = (x)=>{
const n=x.length;
let y = new Array (n);
y=x.sort() // reverse() делает обратную сортирорвку
console.log(y)
}
Alphabet(Names)

console.log('    ')
console.log('Задача 3')
console.log(` Написать функцию, которая отфильтрует массив [1,2,3,4,5,6,7,8,9,10,11,12,13,14] и оставит из него только те числа, 
квадраты которых больше 20, но меньше 100`)
let Chisla=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const Sortkvadrat=(x)=>{
  let y = [];
  let i=0 
  while (x[i]*x[i]<100){
    if (x[i]*x[i]>20){
      y.push(x[i])
    }
    i++;
  }
  console.log(y)
}
Sortkvadrat(Chisla)

console.log('    ')
console.log('Задача 4')
console.log(` Написать функцию, которая для каждого элемента массива [4,6,7,8,12] вернёт слово из соответствующего количества букв`)
let p =[4,6,7,8,12];
const COROKA = 'Сорока'
const KASHA = 'Каша'
const EJEVIKA = 'ЕЖЕВИКА'
const LUCHKOVII = 'Лучковый'
const MNOGORECHIVII= 'Многоречивый'
const chislanaslova=(x)=>{
  for( let i=0; i<=x.length; i++){
    if (x[i]==COROKA.length){
      x[i]=COROKA;
    }
    else if (x[i]==KASHA.length){
      x[i]=KASHA
    }
    else if (x[i]==EJEVIKA.length){
      x[i]=EJEVIKA
    }
    else if (x[i]==LUCHKOVII.length){
      x[i]=LUCHKOVII
    }
    else if (x[i]==MNOGORECHIVII.length){
      x[i]=MNOGORECHIVII
    }
  }
  console.log(x)
}
chislanaslova(p)

console.log('    ')
console.log('Задача 5')
console.log(` Написать функцию, которая 25 раз выведет в консоль: «Я номер 1», «я номер 2», «Я номер 3» и так далее до 25`)
function Yanomer(){
 for(let i=1;i<26;i++){
  console.log('"я номер',i,'"')
 }
}
Yanomer()

console.log('    ')
console.log('Задача 6')
console.log(` Написать функцию, которая вернёт из исходного массива [10,20,30,40,50,60,70] следующий массив [70,60,50,40,30,20,10]`)
let z = [10,20,30,40,50,60,70];
const obrashenie = (x)=>{
  let y = new Array(x.lenght);
for(let i=0; i<x.length;i++){
  y[i]=x[x.length-(i+1)]   // Почему-то растянул массив на 3 строки в консоли
}
console.log(y)
}
obrashenie(z)

console.log('    ')
console.log('Задача 7')
console.log(` Написать функцию, которая будет принимать на вход имя, а возвращать массив из букв его имени, то есть: вход - «Саша», 
выход - [‘с’, ‘а’, ‘ш’, ‘а’]`)
const strokanaburvi=(x)=>{
  let y= new Array(x.length)
  for(let i=0; i<x.length; i++){   // Обращаться к строке по символьно можно также как и к массиву, либо через x.CharAt
    y[i]=x[i]
  }
  console.log(y)
}
strokanaburvi('КУКУРУЗОРОЖДЕННЫЙ')

console.log('    ')
console.log('Задача 8')
console.log(` Написать функцию, которая принимает на вход массив из 4 чисел, и возвращает сумму этих числе. То есть, вход: [1,2,3,4], выход: 10`)
const massive4=[5,2,2,1]
const summastrok =(x)=>{
  let y=0
  x.map((i)=>{
    y=y+i
  })
  console.log('Cумма элементов в строке матрицы равна',y)
}
summastrok(massive4)

console.log('    ')
console.log('Задача 9')
console.log(` Написать функцию, которая принимает на вход строку, и выводит в консоль её длину.`)
const stroka='ЭЛЕКТРОПРИВОД'
const DLINA=(x)=>{
 return x.length
}
console.log('Длина строки',stroka,'равна',DLINA(stroka))

console.log('    ')
console.log('Задача 10')
console.log(` Написать функцию, которая принимает на вход имя и число n, и выводит в консоль заданное имя n-раз.`)
const k='Вкусные французские булочки'
const E=4
function ViVODnRAZ(x,y) {
for(let i=1; i<=y; i++){
  console.log(x)
}
}
ViVODnRAZ(k,E)