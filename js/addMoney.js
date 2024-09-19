document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    // getInputFieldValueById();
    // console.log('added the btn');

    const addMoney = getInputFieldValueById('add-money-from');
    const pinValue = getInputFieldValueById('add-pin-from');
    // console.log('input add money parameater', addMoney, pinValue);

    if(isNaN(addMoney)){
        alert('faild to add money');
        return 
    }

    if(pinValue === 1234){
        const balance = getTextFiledValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('add-money-from').value = '';


        // add to transition history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;

        //should be a common function
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('Faild to add money');
    }
})