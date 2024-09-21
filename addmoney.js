// Add Money
document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault()
    const password = document.getElementById('password').value;
    const amount = document.getElementById('inpu-amount').value;
    const balance = Number(document.getElementById('balance').innerText)
    if (password == '1234' && amount !== '') {

        const newBalance = balance + Number(amount);
        document.getElementById('balance').innerText = newBalance;
        console.log(amount, balance, newBalance);

        document.getElementById('password').value = '';
        document.getElementById('inpu-amount').value = '';

    } else {
        alert('Amount is not added')
    }

})

// CashOut
document.getElementById('cash-out').addEventListener('click', function (e) {
    e.preventDefault()
    const password = document.getElementById('cashout-password').value;
    const amount = document.getElementById('cashout-inpu-amount').value;
    const balance = Number(document.getElementById('balance').innerText)

    console.log(password, amount, balance)
    if (password == '1234' && amount !== '' && amount<=balance && balance>0) {

        const newBalance = balance - Number(amount);
        
        if(newBalance>=0){

            document.getElementById('balance').innerText = newBalance;
        }else{
            alert('You do not have enough balance alert from1')
            document.getElementById('cashout-password').value = '';
            document.getElementById('cashout-inpu-amount').value = '';
        }

        document.getElementById('cashout-password').value = '';
        document.getElementById('cashout-inpu-amount').value = '';

    } else {
        if (balance <= 0 || amount > balance) {
            alert('You have not enough money alert from2')
            document.getElementById('cashout-password').value = '';
            document.getElementById('cashout-inpu-amount').value = '';
        } else {
            alert('something is wrong')
            document.getElementById('cashout-password').value = '';
            document.getElementById('cashout-inpu-amount').value = '';
        }
    }
})

// swich to cashout btn from add to btn or add to btn to cashout btn
document.getElementById('swich-cashout-btn').addEventListener('click', function(){
    document.getElementById('addContainer').classList.add('hidden');
    document.getElementById('cashout-container').classList.remove('hidden');

    // btn active style
    document.getElementById('swich-cashout-btn').classList.add('btn-primary');
    document.getElementById('swich-cash-add-btn').classList.remove('btn-primary');
})
document.getElementById('swich-cash-add-btn').addEventListener('click', function(){
    document.getElementById('addContainer').classList.remove('hidden');
    document.getElementById('cashout-container').classList.add('hidden');

    // btn active style
    document.getElementById('swich-cash-add-btn').classList.add('btn-primary');
    document.getElementById('swich-cashout-btn').classList.remove('btn-primary');
})