document.getElementById('discount-btn').addEventListener('click', function(){
    
    // Get input field value starts
    const inputField = document.getElementById('input-field');
    const input = inputField.value;
    
    // End

    // Get display price starts
    const displayPriceElement = document.getElementById('orginal-price');
    const displayAmountString = displayPriceElement.innerText;
    const displayAmount = parseFloat (displayAmountString);
    // End
    // Discount calculation
    const discount = displayAmount * .30;
    const discountPrice = displayAmount - discount;
    // End

    // Get display discount price 
    const discountPriceElement = document.getElementById('discount-price');


    if(input === 'disc30'){
        discountPriceElement.innerText = `Discounted price: $${discountPrice}`;
    }
    else{
        discountPriceElement.innerText = `Price: $${displayAmount}`
    }

    inputField.value = '';
})