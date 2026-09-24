// alert("Hello, World!");
// confirm("Are you sure you want to continue?");
// prompt("Please enter your name:");
// let _name = prompt("Please enter your name:");
// console.log("Hello, " + _name + "! Welcome to the JavaScript world.");
// let age = true;
// console.log(typeof age);
// let _name = prompt("Please enter your name:");
// let _age = prompt("Please enter your age:");
// console.log("Hello," + _name + "! Welcome to the JavaScript world.");
// console.log(`Hello, ${_name}! Welcome to the JavaScript world. You are ${_age} years old.`);

// let content = " <ul><li>Home</li><li>Home</li><li>Home</li><li>Home</li><li>Home</li</ul>"
// let content = " <ul>"
// content += "<li>Home</li>"
// content += "<li>Home</li>"
// content += "<li>Home</li>"
// content += "<li>Home</li>"
// content += "<li>Home</li>"
// content += "<li>Home</li>"
// content += "</ul > "

// let content = ` <ul>
//         <li>Home</li>
//         <li>Home</li>
//         <li>Home</li>
//         <li>Home</li>
//         <li>Home</li>
//     </ul>`

// let age = prompt("Please enter your age:");
// if(age < 18 ){
//     console.log('طفففــــــــــل');
// }else if (age >18 || age <60){
// console.log('شبـــــــــــااااااب');
// }else{
//     console.log("ختيــــــــااااار");
// }
// final else dead code 

// let age = prompt("Please enter your age:");
// if (age > 0 && age <= 100) {
//     if (age < 18) {
//         console.log('طفففــــــــــل');
//     } else if (age >= 18 && age <= 60) {
//         console.log('شبـــــــــــااااااب');
//     } else {
//         console.log("ختيــــــــااااار");
//     }
// } else {
//     console.log("العمر تخيلي يا فيلسوف ");
// }

// let choice = prompt("Please enter your choice (1-5):");

// switch (Number(choice)) {
//     case 1:
//         console.log("You selected option 1.");
//         break;
//     case 2:
//         console.log("You selected option 2.");
//         break;
//     case 3:
//         console.log("You selected option 3.");
//         break;
//     case 4:
//         console.log("You selected option 4.");
//         break;
//     case 5:
//         console.log("You selected option 5.");
//         break;
//     default:
//         console.log("Invalid choice. Please select a number between 1 and 5.");
// }

// let url = window.location.href;
// // console.log(url);
// console.log(url.includes("lec22"));

// document.oncopy = () => {
//     alert("اخويا تنسخش ");
//     return false;
// }

// document.onselectstart = () => {
//     return false;
// }
// عشان اضيف رابط الموقع مع اي نص بينتسخ 

// document.oncopy = () => {
//     let url = window.location.href;
//     let text = window.getSelection().toString();
//     // console.log(url, text);
//     let fulltext = `${text}\n\n For more info visit: ${url}`;
//     // console.log(fulltext);
//     navigator.clipboard.writeText(fulltext);
//     return false;
// }

