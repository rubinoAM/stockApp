$(document).ready(()=>{
    //Do the damn thing!
    const stockForm = document.querySelector('.stock-form');

    //Endpoint: A web accessible URL that responds with data
    const url = `https://api.iextrading.com/1.0/stock/goog/quote`;

    //getJSON() takes two args: 1) Where to get JSON 2) Function to Return
    $.getJSON(url,(jsonData)=>{
        console.log(jsonData);
        $('#stock-body').html(`
            <tr>
                <td>${jsonData.symbol}</td>
                <td>${jsonData.companyName}</td>
                <td>${jsonData.iexAskPrice}</td>
                <td>${jsonData.iexBidPrice}</td>
                <td>${jsonData.change}</td>
            </tr>
        `);
    });
})