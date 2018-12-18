$(document).ready(()=>{
    //Do the damn thing!
    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm);

    const url = `https://api.iextrading.com/1.0/stock/goog/chart`;

    //getJSON() takes two args: 1) Where to get JSON 2) Function to Return
    $.getJSON(url,(jsonData)=>{
        console.log(jsonData);
    });
})