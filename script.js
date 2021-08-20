console.log("Initializing App...");

function calculate() {
    let amount=document.querySelector('#amount').value;
    let interestrate=document.querySelector('#interestrate').value;
    let months=document.querySelector('#months').value;

    const interest = (amount * (interestrate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(0);

    document.querySelector('#final').innerHTML=`Your EMI is ${payment}`;      
    
    console.log(amount, interestrate, months);
}
