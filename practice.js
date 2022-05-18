/* let userName=prompt("Enter your name");
let email=prompt("Enter your email");
let password=prompt("Enter your password");
let age=prompt("Enter your age");
let country=prompt("Enter your country");
let salaryMonthy=prompt("Enter you monthy salary");
    let salaryYearly=salaryMonthy*12;

//   document.write(`
//    <div class="container">
//        <p><span>name: </span> ${userName}</p>
//        <p><span>Email: </span> ${email}</p>
//        <p><span>Password: </span> ${password}</p>
//        <p><span>Age: </span> ${age}</p>
//        <p><span>Country </span> ${country}</p>
//        <p><span>Salary yearly: </span> ${salaryYearly}</p>
//    </div>
//    `)
console.log({userName});
console.log({email});
console.log({password});
console.log({age});
console.log({country});
console.log({salaryYearly}); */
let productName=prompt("Please enter Product name");
let priceUnitary=prompt("Please enter Price of the product");
let quantity=prompt("Please enter Quantity");
    let subTotal=priceUnitary*quantity;
    let iva=subTotal*.08;
let total=subTotal+iva;

document.write(`<div class="container">
    <p><span>Product Name: </span>${productName}</p>
    <p><span>Price Unitary: </span>${priceUnitary}</p>
    <p><span>Quantity: </span>${quantity}</p>
    <p><span>Sub Total: </span>${subTotal}</p>
    <p><span>IVA (8%): </span>${iva}</p>
    <p><span>TOTAL: </span>${total}</p>

</div>`)