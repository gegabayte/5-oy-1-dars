{
        // try {
//     console.log(test);
// } catch (error) {
//     console.log(error);
// }


//let i = 1 ;
// let a = setInterval(() => {
//     console.log(i);
//     if (i == 100) {
//         clearInterval(a)
//     }
//     i++;
// }, 500)


// function divide (a, b) {
//     if (b == 0) {
//         throw new Error(`No'lga bolish mumkn emas`)
//     }
//     return a / b;
// }
//  try {
//     console.log(divide(10, 0));
//  } catch (error) {
//     console.log(error);  
//  }


// import { sum } from "./index.js";

// console.log(sum(2,6));
}

export function getYear (age) {
    if (!Number(age) || typeof age == 'boolean') {
        throw new Error(`yosh sonda bolishi kerak`)
    }
    return 2024 - age;

}

try {
    console.log(getYear(+prompt(`Yoshingizni kiritng`)));
} catch (error) {
    console.log(`Xatolik`);
}