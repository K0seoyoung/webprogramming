const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}));

class worldMoney {
    constructor(KRW,USD,EUR,JPY){
        this.KRW = KRW;
        this.USD = USD;
        this.EUR = EUR;
        this.JPY = JPY;
    }
}

let currencyRatio={
    KRW:{
        KRW:1,USD:1/1300,EUR:1/1420,JPY:10/92
    },
    USD:{
        KRW:1300,USD:1,EUR:1300/1420,JPY:13000/92
    },
    EUR:{
        KRW:1420,USD:1420/1300,EUR:1,JPY:14200/92
    },
    JPY:{
        KRW:9.2,USD:92/13000,EUR:92/14200,JPY:1
    }
}

function convert(){
    let amount = document.getElementById("before").ariaValueMax;
    let convertedAmount = Intl.NumberFormat(amount * currencyRatio[fromCurrency][toCurrency]);
    console.log(convertedAmount);
}

app.post('/exchange',(request,response) => {
    let KRW = request.body.KRW;
    let USD = request.body.USD;
    let EUR = request.body.EUR;
    let JPY = request.body.JPY;



    let output = '';
    output += `학번:202104473 이름:고서영<br>`;
    output += `<h2>기말시험 2. 환율 계산기</h2>`
    output += `<table border = "1" style="border-collapse: collapse; border: 2px solid blue;">`;
    output += `<tr style="border: 1px solid blue; background-color: cyan; text-align: center;">`;
    output += `<th style="border: 1px solid blue; text-align: center;">금액</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">통화</th></tr>`;

    convert.forEach((convertedAmount,worldMoney) => {
        output += `<tr>`;
        output += `<td style="border: 1px solid black; text-align: right;">${convertedAmount}</td>`;
        output += `<td style="border: 1px solid black; text-align: center;">${worldMoney}</td>`;
    });

    output += `</table>`;
    response.send(output);
});

app.listen(55555, () => {
    console.log('Server running at http://localhost:55555')
});