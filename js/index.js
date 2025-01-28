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

    inputField.value = '';

});