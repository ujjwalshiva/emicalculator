console.log("Initializing App...");

//Formula: [P x R x (1+R) ^N]/ [(1+R) ^ (N-1)]

function calculate() {

    //Old Formula Below
    //const interest = (amount * (interestrate * 0.01)) / months;
    //let payment = ((amount / months) + interest).toFixed(0);


    let amount=document.querySelector('#amount').value;
    let interestrate=document.querySelector('#interestrate').value;
    let months=document.querySelector('#months').value;

    const interest = interestrate/1200;
    
    let top = Math.pow((1+interest),months);
    let bottom = top - 1;
    let ratio = top/bottom;
    let emi = (amount * interest * ratio).toFixed(0);

    document.querySelector('#final').innerHTML=`Your EMI is ${emi}`;      
    
    console.log(amount, interestrate, months);
}
