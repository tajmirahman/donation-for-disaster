document.getElementById('donation-btn').addEventListener('click', function () {
    
    document.getElementById('donation-div').classList.remove('hidden');
    showColorById('donation-btn');

});

document.getElementById('history-btn').addEventListener('click', function () {
    
    showColorById('history-btn');
    document.getElementById('donation-div').classList.add('hidden');
    
    
});