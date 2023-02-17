// calculate function
function getExpensesElementById(expensesElementId) {
    const expensesFieldElement = document.getElementById(expensesElementId);
    const expensesFieldElementString = expensesFieldElement.value;
    const expensesFieldElementValue = parseFloat(expensesFieldElementString);
    expensesFieldElement.value = '';
    return expensesFieldElementValue;
}

function getTextElementById(textElementId) {
    const getTextElementValue = document.getElementById(textElementId);
    const getTextElementValueString = getTextElementValue.innerText;
    const getValue = parseFloat(getTextElementValueString);
    return getValue;

}

function setTextElementById(textElementId, newValue) {
    const setTextElement = document.getElementById(textElementId);
    setTextElement.innerText = newValue;
}

document.getElementById('btn-calculator').addEventListener('click', function () {
    const incomeFieldElement = getExpensesElementById('income-field');
    const rentFieldElement = getExpensesElementById('rent-field');
    const clothesFieldElement = getExpensesElementById('clothes-field');
    const foodFieldElement = getExpensesElementById('food-field');

    if (isNaN(incomeFieldElement) || incomeFieldElement < 0) {
        return alert('Please put valid positive number please');
    }
    if (isNaN(foodFieldElement) || foodFieldElement < 0) {
        return alert('Please put valid positive number please');
    }
    if (isNaN(rentFieldElement) || rentFieldElement < 0) {
        return alert('Please put valid positive number please');
    }
    if (isNaN(clothesFieldElement) || clothesFieldElement < 0) {
        return alert('Please put valid positive number please');
    }


    // const expensesTotalAmount = getTextElementById('total-expenses');
    // const newBalanceAmount = getTextElementById('balance');
    const expensesTotal = foodFieldElement + rentFieldElement + clothesFieldElement;
    setTextElementById('total-expenses', expensesTotal);

    if (incomeFieldElement < expensesTotal) {
        return alert('Too much expenses cost');
    }
    else if (incomeFieldElement >= expensesTotal) {
        const finalBalance = incomeFieldElement - expensesTotal;
        setTextElementById('balance', finalBalance);
    }

})

// saving function
document.getElementById('btn-save').addEventListener('click', function () {
    const saveFieldElement = getExpensesElementById('save-field');

    const balanceTextElement = getTextElementById('balance');
    // const savingAmount = getTextElementById('saving-amount');

    
    if (isNaN(saveFieldElement) || saveFieldElement < 0) {
        return alert('Please write valid positive value in the save field');
    }
    else if(balanceTextElement < saveFieldElement){
        return alert('Too much saving amount')
        
    }
    else if (saveFieldElement < balanceTextElement) {
        const savingAmount = ((balanceTextElement / 100) + saveFieldElement).toFixed(2);
        setTextElementById('saving-amount', savingAmount);        
        const getRemainingBalance = (balanceTextElement - savingAmount);
        setTextElementById('remaining-balance', getRemainingBalance);
    }
        
})
