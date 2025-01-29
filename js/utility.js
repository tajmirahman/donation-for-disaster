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