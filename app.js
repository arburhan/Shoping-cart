// cart use function
function updateValue(isIncressing,productID,mcprice){
    const productNumber = document.getElementById(productID + '-number');
    let productText = productNumber.value;
    if(isIncressing == true){
        productText = parseInt(productText) + 1;
    }
    else if(isIncressing == false && productText>0){
        productText = parseInt(productText) - 1;
    }
    productNumber.value = productText;
    // total section
    /* totalBalance(productID); */
    totalCalculate();

    // adding total balance 
    const mobilePriceId = document.getElementById(productID + '-price');
    mobilePriceId.innerText = productText * mcprice;

}
 // clear function
function clearAll(productId){
     let mouseStyleId = document.getElementById(productId+'-clear');
     let mouseStyle = mouseStyleId.style.cursor = "pointer";
} 
clearAll('mobile');
clearAll('case');
// sub total calculate
function inputValues(productID){
    const inputValues = document.getElementById(productID+'-number');
    const inputValueNumber = parseInt(inputValues.value);
    return inputValueNumber;
}

function totalCalculate(){
    const mobileNumberId =  inputValues('mobile') * 1219;
    const caseNumberId = inputValues('case') * 59; 
    const subTotal = mobileNumberId + caseNumberId;
    const tax = subTotal / 10;
    const totalBalance = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalBalance;
}


// mobile section

// add button
document.getElementById('button-plus').addEventListener('click', function(){
    updateValue(true,'mobile',1219);
    


})
// minus button 
document.getElementById('button-minus').addEventListener('click', function(){
    updateValue(false,'mobile',1219);
})

// case section

 // case add button
document.getElementById('case-plus').addEventListener('click', function(){
    updateValue(true,'case',59);
})
// case minus button
document.getElementById('case-minus').addEventListener('click', function(){
    updateValue(false,'case',59);
}) 

