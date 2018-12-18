$(document).ready(()=>{
    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm);

    $('.stock-form').submit((event)=>{
        //Make sure the browser doesn't send the form to another page
        event.preventDefault();
        console.log(event);

        const symbol = $('#symbol').val();
        $('#symbol').val('');

        const symbols = symbol.split(',')
        symbols.forEach((s)=>{
            s = s.trim();
            //Endpoint: A web accessible URL that responds with data
            const url = `https://api.iextrading.com/1.0/stock/${s}/quote`;

            //getJSON() takes two args: 1) Where to get JSON 2) Function to Return
            $.getJSON(url,(jsonData)=>{
                console.log(jsonData);
                let changeClass = "";
                if(jsonData.change > 0){
                    changeClass = 'increase';
                }
                else{
                    changeClass = 'decrease';
                }
                $('#stock-body').append(`
                    <tr id="${jsonData.symbol}">
                        <td><button id="remove" class="btn btn-danger">X</button></td>
                        <td>${jsonData.symbol}</td>
                        <td>${jsonData.companyName}</td>
                        <td>${jsonData.high}</td>
                        <td>${jsonData.low}</td>
                        <td id="change" class="${changeClass}">${jsonData.change}</td>
                    </tr>
                `);
            });
        });  
        $('#stock-table').DataTable();
    });

    $(document).on('click','#remove',function(e){
        const rowDel = e.target.parentNode.parentNode.id;
        $("#"+rowDel).empty();
    });
})