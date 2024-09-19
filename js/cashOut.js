document.getElementById('cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('cash-out-money-from');
    const pinNumber = getInputFieldValueById('cash-out-pin-from');

    if(isNaN(cashOut)){
        alert('failed to cash out');
        return;
    }



    if(pinNumber === 1234){
        const balance = getTextFiledValueById('account-balance');

        if(cashOut > balance){
            alert("You do not have enough money to cash out");
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerHTML = newBalance;


        // add to transition history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} withdrow. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
        document.getElementById('cash-out-money-from').value = '';
    }else{
        alert("No money for you ....... DGM");
    }
})