// const calcAge = (user) => {
//     if (user.age) {
//         return user.age * 365;
//     }
//     return null;
// }

// let user = {
//     name: "Abdallah",
//     age: prompt("Enter your age:"),
// }


// console.log(calcAge(user) ?? "Age is not defined");


// let exp = prompt("Enter num1 , num2 , operator");
// console.log(exp.split(","));
// let num1 = exp.split(",")[0];
// let num2 = exp.split(",")[1];
// let op = exp.split(",")[2];
// console.log(num1, num2, op);
// let [num1, num2, op] = exp.split(",");
// console.log(num1, num2, op);




// Destructing
// let obj = {
//     name: "Abdallah",
//     age: 20,
// }

// let { name, age } = obj;
// console.log(name, age);

// function User(name, age = 0) {
//     this.name = name;
//     this.age = age;
// }

// let u1 = new User('ra3d', 22);
// let u2 = new User('salma', 25);

// console.log(u1, u2);



// setTimeout(() => {
//     console.log("Hello");
// }, 5000);


// setInterval(() => {
//     console.log("Hello");
// }, 3000);


// لطباعة الوقت الحالي كل ثانية

// setInterval(() => {
//     let date = new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}: ${date.getSeconds()}`);
// }, 1000);



const calcAge = (dob) => {
    if (!dob) return;
    let [day, month, year] = dob.split("-").map(Number);
    let date = new Date();
    let ageYears = date.getFullYear() - year;
    let ageMonths = date.getMonth() - (month - 1);
    let ageDays = date.getDate() - day;

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        ageMonths--;
        ageDays += 30;
    }
    document.getElementById("years").textContent = ageYears;
    document.getElementById("months").textContent = ageMonths;
    document.getElementById("days").textContent = ageDays;

}


calcAge(prompt("Enter your date of birth in the format dd-mm-yyyy:"));