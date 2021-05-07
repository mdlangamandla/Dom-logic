//get a reference to the calculate button
const mycalculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
const billStringField = document.querySelector(".billString");

//get a reference for the bill total
const billTotalColor = document.querySelector(".total");

//an instance 
let calculatedBill = calculatedStrings();

function calculateBtnClicked() {


    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");


    billTotalElement.classList.add(calculatedBill.addColor(billStringField.value));    
    billTotalElement.innerHTML =  calculatedBill.totalPhoneBill(billStringField.value);

}
//     var billString = billStringField.value;
//     const roundedBillTotal = totalPhoneBill(billString);
    
//     billTotalElement.innerHTML = roundedBillTotal;
//     styleTotalColor(roundedBillTotal);
// }
mycalculateBtnElement.addEventListener("click", calculateBtnClicked);
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button




