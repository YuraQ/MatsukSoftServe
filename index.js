//Завдання 1
//Реалізуйте функцію getModifiedArray(array) , яка приймає довільний масив і 
//повертає масив зі значенням першого елемента масиву, що дорівнює «Start», 
//останнього елемента масиву, що дорівнює «End», а решта елементів має бути таким самим, як у початковому масиві. Початковий масив повинен залишитися без змін.
// Приклад функції:
// getModifiedArray([12, 6, 22, 0, -8])); // ['Початок', 6, 22, 0, 'Кінець']
function getModifiedArray(array) {
    const modifiedArray = array.slice();
   
   modifiedArray[0] = 'Start';
   modifiedArray[modifiedArray.length - 1] = 'End';
   
   return modifiedArray;
 }




//Завдання 2

//Функція filterByN  отримує масив цілих чисел, число та параметр ( більше, менше ). 
//Вивести новий масив, у якому всі елементи будуть більше/менше цього числа
//За замовчуванням число дорівнює 0 , параметр більше .

const filterNums = (array, number = 0, condition = 'greater') => {
    let arr;

    if(condition == 'greater') {
       arr = array.filter((item) => item > number);
    }
    else if (condition == 'less') {
       arr = array.filter((item) => item < number);
    }
    
    return arr;
};

console.log(filterNums([2, 4, 6, 7, 8, 9], 8, "less")); // [2, 4, 6, 7]






//Завдання 3

//Знайдіть максимальний інтервал між двома послідовними аргументами.
function maxInterv(...args) {
    if (args.length < 2) return 0; // Якщо аргументів менше 2, повертаємо 0
    
    let maxInterval = 0; // Змінна для відстеження максимального інтервалу
    
    for (let i = 0; i < args.length - 1; i++) {
      const interval = Math.abs(args[i + 1] - args[i]); // Обчислюємо абсолютну різницю між двома сусідніми елементами
      if (interval > maxInterval) {
        maxInterval = interval; // Оновлюємо максимальний інтервал, якщо поточний інтервал більший
      }
    }
    
    return maxInterval; // Повертаємо максимальний інтервал
  }





//Завдання 4

  const sumOfLen = (...args) => {
    let sum = 0;

    for (let i =0; i<args.length; i++) {
        let num = args[i].length
        sum= sum+num;
    }
    
    
    return sum;
}
console.log(sumOfLen('hellohhh', 'hi'));



//Завдання 5
//Напишіть функцію combineArray(arr1, arr2) , яка приймає 2 масиви та повертає новий масив, що складається лише з числових елементів масивів arr1 і arr2 .
//Приклад функції:combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));   // [12, 22, -8, 6, 15]


function combineArray(arr1, arr2) {
    let mass = [...arr1, ...arr2];
    let newmas = mass.filter((item) => typeof item== "number");
    return newmas
}

console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));



// Завдання 6
// Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login. If the logins of the same length are the longest in the array, the login element with the largest index is returned. Tip: You can use the reduce() method to solve the task.

// Function examples:

// longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko

// longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4

// function longestLogin(loginList) {
//     let max = 0;
//     let maxName;
//     loginList.forEach(element => {
//         if(element.length >= max){
//             max = element.length
//             maxName  = element
//         }
//     });
//     return maxName;
// }
// console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]))

function longestLogin(loginList) {
    return loginList.reduce((longest, current) => {
        if (current.length >= longest.length) {
            return current; 
        } else {
            return longest; 
        }
    });
}
//Завдання 7
//Реалізуйте функцію processArray(arr, factorial) , яка приймає перший параметр масиву arr , а другий параметр — функцію factorial , і обробляє кожен елемент масиву arr за допомогою функції factorial , повертаючи новий масив (вихідний масив arr  робить не змінити)
// Функція factorial(n) обчислює та повертає факториал числа n . Наприклад, factorial(4) повертає 24.
// приклад
// // визначає факторіал числа n
// функція factorial(n) { // ваш код}; 
// processArray([1, 2, 3, 4, 5], факториал); // [1, 2, 6, 24, 120]

// function factorial(n) {
//     return (n > 1) ? n * factorial(n - 1) : 1;
// }

// function processArray(arr, factorial) {
//     let mas = [];
//     for(let i=0; i<arr.length; i++){
//         mas.push(factorial(arr[i]));

//     }
    
//     return mas;
// }
// console.log(processArray([5, 5], factorial))

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}


function processArray(arr, factorial) {
    
    let mas = arr.map(elem => {
        return factorial(elem);
    });
    return mas;
}

console.log(processArray([5, 5], factorial)); // Результат: [120, 120]


//Завдання 8
//Використовуючи техніку параметрів за замовчуванням, перевантажте функцію overloadedFunc() , 
//яка приймає 3 аргументи. Для 1-го аргументу функції встановіть значення за замовчуванням [1, 2, 3], 
//для 2-го - значення 2, для 3-го - функцію, яка повертає добуток перших двох аргументів, і функція може множити обидва масиви. і числа.
// Функція overloadedFunc() повертає результат функції за замовчуванням.


// function overloadedFunc(arr = [1, 2, 3], num = 2, operation = (a, b) => a * b) {
//     // Перевірка, чи аргумент arr є масивом
//     if (Array.isArray(arr)) {
//         // Перемноження кожного елементу масиву на num за допомогою map
//         return arr.map(elem => operation(elem, num));
//     } else {
//         // Якщо arr не є масивом, то ми припускаємо, що це число, і множимо його на num
//         return operation(arr, num);
//     }
// }

function multiply(arg1, arg2){
    if (Array.isArray(arg1)){
        let newArg1= arg1.map(elem=>elem*arg2);
    return newArg1;
    }
    else {
        let newArg1= arg1*arg2
        return newArg1;
    }
    
}

function overloadedFunc(arg1=[1, 2, 3], arg2 = 2, arg3 =multiply){

 let g= arg3(arg1,arg2);
 return g;

}

console.log(overloadedFunc());
console.log(overloadedFunc([2,4,6,8]));
console.log(overloadedFunc([2,4,6], 3));
console.log(overloadedFunc(10));







/// task1 Будь ласка, реалізуйте функцію getLanguages.

// Функція приймає масив студентів як перший параметр
// і стан на учня (функція)
// getLanguages ​​має повернути масив мов від студентів, які задовольняють умову.

// Наприклад:
// getLanguages(students, student => student.age < 26) має повернути
// ['Англійська', 'Українська', 'Італійська', 'Російська']

// getLanguages(students, student => student.name === 'Alice') має повернути
// ['італійська', 'російська']

// getLanguages(students) має повернутися
// ['Англійська', 'Українська', 'Польська', 'Іспанська', 'Італійська', 'Російська']

let students = [{
    name: 'Anna',
    languages: ['English', 'Ukrainian'],
    age: 21
  }, {
    name: 'Bob',
    languages: ['Polish', 'Spanish'], 
    age: 26 
  }, { 
    name: 'Alice', 
    languages: ['Italian', 'Russian'], 
    age: 18 
  }]

function getLanguages (students, condition = () => true)  {
   return students.reduce((languages, student)=>{
        if(condition(student)){
            languages.push(...student.languages);
        }
        return languages;
    },[])
  }
 
 console.log(getLanguages(students, student => student.name === 'Alice')) ;
 console.log(getLanguages(students, student => student.age < 26));
 console.log(getLanguages(students));



 //task3
 const upperCase = text => text.toUpperCase();
const tripleExclaim = text => text + '!!!';
const split = separator => text => text.split(separator);
const join = separator => array => array.join(separator); 
const copy = text => text + ' ' + text;

const createComposition = (...funcs) => argument =>funcs.reduce((acc, func) => func(acc), argument);

const result = createComposition(
  upperCase,
  tripleExclaim,
  split('_'),
  join(' '), 
  copy
);

console.log(result('text'));

//task1 
const negate = function(x){ return -x; };

const halve = function(x){ return x / 2; };

const square = function(x){ return x * x; };

const double = function(x){ return 2 * x; };

const combineFunctions =(...funcs)=> argument =>funcs.reduce((acc, func) => func(acc), argument);

console.log(combineFunctions(x => x + 5)(3));
console.log(combineFunctions()(3));
console.log(combineFunctions(x => x + x, x => x - 1, x => x !== 0)(5));
console.log(combineFunctions(x => x + x, x => x - 1, x => x = -x, x => 'Hello, ' + x)(5));




 
 
 



    