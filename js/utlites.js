function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}

function getTextFiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}



function showSectionById(id){
    // hide all the sections
    document.getElementById('add-money-btn-from').classList.add('hidden');
    document.getElementById('cash-out-btn-from').classList.add('hidden');
    document.getElementById('transation-from').classList.add('hidden');

    //show the section with the provided id as a parameter
    document.getElementById(id).classList.remove('hidden');
}