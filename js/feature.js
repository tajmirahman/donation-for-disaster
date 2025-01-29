

document.getElementById('donation-btn').addEventListener('click', function (event) {
    
    showDivById('donation-div');
    showColorById('donation-btn');

});

document.getElementById('history-btn').addEventListener('click', function () {
    showDivById('transaction-history');
    showColorById('history-btn');
    
    
});


document.getElementById('blog-btn').addEventListener('click', function () {
    showDivById('blog-container');
});