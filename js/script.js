 
// let str = 'Hello world';
// let sss = 'Hello';
// const isIncl = str.includes(sss);
// console.log(isIncl);
// console.log(str[4]);
// console.log(str.indexOf('w'));
// console.log(str.replace('l', '___'));

// let weight = '88,3';
// let height = '1.75';
// const weightNorm = Number(weight.replace(',', '.'));
// const heightNorm = Number(height.replace(',', '.'));
// const bmi = (weightNorm / heightNorm ** 2);
// console.log(bmi);
// const dog = null
// const final = dog && 0;
// console.log(final);
// console.log(!(false || false || 44));
// console.log(typeof (true || 'vip'));
// // function stroka(name) {
//     const message = `name ${name} is `;
// }
// const target = 20;
// let sum = 0;
// for (let i = 0; i <= target; i += 5){
//     sum += i;
//     console.log(i);
// }
// console.log(sum);

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];
// console.log(lastElement);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//  message.length <= maxLength ? result= message :result= `${message.slice(0,maxLength)} +'...'`;
//   /// Change code above this line
//   return result;
// }
// formatMessage("Vestibulum facilisis purus nec", 30);

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//     result = message.lenght > maxLength ? `${message.slice(0, maxLength)}...` : message;
//     /// Change code above this line
//     return result;
//     console.log(result);
// }
// // formatMessage("Curabitur ligula sapien", 16)
// let message;
// let maxLength;
 
// message = 'ndkndslmdlmdmnl';
// maxLength = 8
// ;

// message.slice(0,5);
// console.log(`${message.slice(0, maxLength)}...`);

// message.length > maxLength
// console.log(true || false && false);


 
 
// const invalue = undefined;
// const defvelue = 10;
// const value = invalue ?? defvelue;
// console.log(value);

// const totalMinutes = 843;

// const hours = Math.floor(totalMinutes / 60);

// const mins = totalMinutes % 60;

// const hoursFull = String(hours).padStart(2, 0);

// const minsFull = String(mins).padStart(2, 0);

// // console.log(`${hoursFull}:${minsFull}`);

// const stars = 5;
// let price;


// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//             case 2:
//             price = 30;
//             break;
//                     case 3:
//                 price = 50;
//                 break;

//                             case 4:
//                     price = 70;
//                     break;
                    
//                                     case 5:
//                         price = 120;
//                         break;
//                     }
// const a = undefined;
// console.log('hhhh');
// console.log('start ')
// console.log(typeof (null));
// console.log(typeof (Number('yui')));
// console.log( Number(false));
// console.log('5' - true);
// console.log('ё'.charCodeAt(0));
// for (let i = 0; i < 10;i+=1){
//     console.log(i);
// }


// for (let i = 0; i < 5;i+=1){t
//     console.log(i);
// }

    
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`${i}...${salary}`);

//     totalSalary += salary;
    
// }

// console.log(totalSalary);

// let i = 2, p = 4;
// console.log(i, p);

// const min = 1;
// const max = 10;

// let total = 0;
// for (let i = min; i <= max; i += 1){

//     if (i % 2 !== 0) {
//         console.log('ne uu',i);
//         continue;
//     }
//     console.log('uu',i);
//     total += i;
// }
// console.log(total);



// const totalSpent = 700;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('skidka 2 %');
//     discount = 0.02;
    
// }else

// if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('skidka 5 %');
//     discount = 0.05;

// }

// else{


//     console.log('skidka 10 %');
//     discount = 0.02;

// }

//  const btnAdd = document.querySelector('button')

// console.log(btnAdd.textContent);

// btnAdd.textContent = 'Прибавить';



// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers.at(-1)); // [1, 2, 3, 4, 5]

// const num = [2, 4, 7, 9, 5, 1];
// let total = 0;
// // for (let i = 0; i < num.length; i += 1){
// //     total += num[i];
// // }

// for (const n of num) {
//     total += n;
    
// }
// console.log(total);


// const nnum = [...num];
// console.log(nnum);
// // console.log(nnum===num);
// const a = 'soros';


// let alta = '';

// for (let i = a.length - 1; i >= 0; i -= 1){

//     alta += a[i];

//     console.log(a[i]);
// }

// console.log(alta);

// console.log(a === alta);
// const m = [1, 2, 4, 5, 67, 8, 5,];

// const index = Math.floor(Math.random() * m.length);

// console.log(index);


// const a = 5;
// const b = 2;

// const addTwoNumbers = (num1, num2)=> num1 + num2;
    


// // const result = addTwoNumbers(a, b);
// let result = addTwoNumbers(10,15);
// console.log(result);

// console.log('-------------------');
// let message;

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//       message = "Your order is empty!";
//       return;
//   }  if (ordered > available) {
//       message = "Your order is too large, not enough goods in stock!";
//       return;
//   }
//     message = "The order is accepted, our manager will contact you";
  

// //   return message;
//   // Change code above this line
// }
// checkStorage(10,0);

// console.log(message);

// const lot = [22, 33, 44, 55, 66, 77];
// logItems(lot);
// console.log('--------------')


// function logItems(array) {

//     for (let i = 0; i <array.length; i += 1) {
//         const position = i + 1;
//         const item = array[i];
//         console.log(`${position}-${item}`);
//     }
// }
// const items = ['mango', 'poly', 'ajax'];
// logItems(items);
// console.log('----------------');
// const m = [1, 23, 84, 5, 67, 8, 15,];
// logItems(m);



// console.log('----------------');


// const a = 2;
// const b = 5;

// function sumNumbers(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// const result = sumNumbers(a, b);
// console.log(result);
// console.log(sumNumbers(7, 8));


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let words;
//     words = message.split(' ');
//     console.log(words);
//     return words.length * pricePerWord;


//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// const arrow =(a,b) => a * b;

// console.log(arrow(9, 4));

// function slugify(title) {
//   // Change code below this line
//    let titleLow= title.toLowerCase();
//   let tittleArray=  titleLow.split(' ')
//     console.log(tittleArray);
//     return tittleArray.join('-');

//   // Change code above this line
// }
// console.log(slugify("English For developer"));

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray =  firstArray.concat(secondArray);
// if(newArray.length >= maxLength){
//  newArray = newArray.slice(0, maxLength);
//   return newArray;
// }


//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"],4));



// function calculateTotal(order) {
//  // Change code below this line
//  let sum =0;
//   for (let i = 0; i <= order; i += 1){
    
//       sum += i;
//     }
//     return sum;


//   // Change code above this line
// }

// console.log(calculateTotal(5));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1){
//     total += order[i];
//   }
    
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


// function findLongestWord(string) {
//   // Change code below this line
//   const strSplit = string.split(' ');
//   console.log(strSplit);
//   let longest ='';
//   for (let i = 0; i < strSplit.length; i += 1){
//     console.log(strSplit[i].length);
//     if (strSplit[i].length > longest.length) {
//       longest = strSplit[i];
//     }
//   }
//   return longest;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));


// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5,2,3);
// console.log(numbers); // [1, 2, 3, 4, 5]



// function filterArray(numbers, value) {
//    // Change code below this line
//   let array = [];
//   for (let i = 0; i < numbers.length; i += 1){
  
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   return array;


//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));



// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
  
//   return fruits.includes(fruit);
// }

// console.log(checkFruit("pear"));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

  
//     return newArray;
//     // Change code above this line
//   }

// console.log(getCommonElements([17, 3, 5, 2], [2, 1, 5, 17, 19]));


// console.log(getCommonElements([1, 2, 3], [2, 4]));



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const elem of order) {
//     total += elem;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));





// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
  

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log()
// console.log()


// function includes(array, value) {
//   // Change code below this line
// for (const item of array){
//   if (item === value) {
//     console.log(item);
//     return true;
//   }
  
// }
// return false;
//   // Change code above this line
// }



// console.log(includes([1, 2, 3, 4, 5], 8));

// function countDown(start) {
//   console.log(start);
//   if (start > 0) {
//       countDown(start - 1);
//     }
// }

// let con=countDown(5);
// console.log(con);

 
 

// function foo() {
//     console.log(arguments)
// }

// foo(5, 'mango', true);
