function showDivById(id){
    document.getElementById('donation-div').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById('blog-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function showColorById(id){
    document.getElementById('donation-btn').classList.remove('bg-[#b4f461]');
    document.getElementById('history-btn').classList.remove('bg-[#b4f461]');

    document.getElementById(id).classList.add('bg-[#b4f461]');
}

function feniDonationFunction(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;

}