document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "blog.html";
});

document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.getElementById('input-value').value;
    const inputValueNumber = parseFloat(inputValue);

    if (isNaN(inputValueNumber)) {
        alert('This is not A Number !');
        return
    }



    const noakhali = document.getElementById('noakhali-amount').innerText;
    const noakhaliAmount = parseFloat(noakhali);
    const newBlance = noakhaliAmount + inputValueNumber;

    document.getElementById('noakhali-amount').innerText = newBlance;


    const mainBlance = document.getElementById('main-amount').innerText;
    const currentBlance = parseFloat(mainBlance);
    const mainNewBlance = currentBlance - inputValueNumber;

    if (inputValue > mainBlance) {
        alert('You do not have enough blance !');
        return;
    }


    document.getElementById('main-amount').innerText = mainNewBlance;

    // Transaction History

    const p = document.createElement('p');
    p.innerText = `${inputValue} Taka Donation from Noakhali,Bangladesh.`;
    p.classList.add('border-red-100');
    p.classList.add('border-2');
    p.classList.add('p-2');
    p.classList.add('mt-2');

    document.getElementById('transaction-history').appendChild(p);



});

document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const feniInputValue=feniDonationFunction('feni-input-value');
    console.log(feniInputValue);
});