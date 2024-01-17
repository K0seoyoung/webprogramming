const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}));

class Car {
    constructor(carnumber, carmodel, caryear, kilometer, color, price) {
        this.carnumber = carnumber;
        this.carmodel = carmodel;
        this.caryear = caryear;
        this.kilometer = kilometer;
        this.color = color;
        this.price = price;
    }
}

let usedcarDB = [
    //      등록번호,  차종,   연식, 주행거리, 색상,   가격
    new Car ('S-1', '소나타', 2016, 133033, 'black',  890),
    new Car ('S-2', '소나타', 2016, 104832, 'white', 1050),
    new Car ('S-3', '소나타', 2022,   3900, 'green', 3090),
    new Car ('S-4', '소나타', 2012, 167468, 'grey',   450),
    new Car ('S-5', '소나타', 2018,  67640, 'black', 1820),
    new Car ('G-1', '그랜저', 2018,  29893, 'black', 2830),
    new Car ('G-2', '그랜저', 2011, 184298, 'black',  690),
    new Car ('G-3', '그랜저', 2015, 130535, 'grey',  1050),
    new Car ('G-4', '그랜저', 2013, 134647, 'grey',   740),
    new Car ('A-1', '아반떼', 2018,  94379, 'grey',   960),
    new Car ('A-2', '아반떼', 2018,  27955, 'blue',  1390),
    new Car ('A-3', '아반떼', 2011,  55268, 'grey',   490),
    new Car ('A-4', '아반떼', 2017,  60006, 'white', 1220),
    new Car ('A-5', '아반떼', 2013,  73461, 'grey',   670),
    new Car ('A-6', '아반떼', 2019,  56530, 'black', 1220),
    new Car ('A-7', '아반떼', 2020,  26347, 'red',   2630)
];

app.post('/search.usedcar', (request,response) => {
    let carmodel = request.body.carmodel; 
    let color = request.body.color;
    let price = request.body.price;

    let filteredCars = usedcarDB.filter(car => {
        let match = true;
        if (carmodel !== '전체' && car.carmodel !== carmodel) {
            match = false;
        }

        if (color !== '전체' && color !== '기타' && car.color !== color) {
            match = false;
        } else if (color === '기타' && ['black', 'white'].includes(car.color)) {
            match = false;
        }

        if (price === '2000만원~' && car.price < 2000) {
            match = false;
        } else if (price === '1000만원~1990만원' && !(car.price >= 1000 && car.price < 1990)) {
            match = false;
        } else if (price === '~990만원' && car.price >= 990) {
            match = false;
        }
        return match;
    });

    let output = '';
    output += `<실습 10. 중고차 검색> 학번:202104473 이름:고서영<br>`;
    output += `<h2>중고차 검색 결과: ${filteredCars.length}대</h2>`
    output += `<table border = "1" style="border-collapse: collapse; border: 2px solid blue;">`;

    output += `<tr style="border: 1px solid blue; background-color: yellow; text-align: center;">`;
    output += `<th style="border: 1px solid blue; text-align: center;">순서</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">등록번호</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">차종</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">연식</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">주행거리</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">색상</th>`;
    output += `<th style="border: 1px solid blue; text-align: center;">가격</th></tr>`;

    filteredCars.forEach((car, index) => {
        output += `<tr>`;
        output += `<td style="border: 1px solid black; text-align: center;">${index + 1}</td>`;
        output += `<td style="border: 1px solid black; text-align: center;">${car.carnumber}</td>`;
        output += `<td style="border: 1px solid black; text-align: center;">${car.carmodel}</td>`;
        output += `<td style="border: 1px solid black; text-align: center;">${car.caryear}년</td>`;
        output += `<td style="border: 1px solid black; text-align: right;">${car.kilometer}km</td>`;
        output += `<td style="border: 1px solid black; text-align: center;">${car.color}</td>`;
        output += `<td style="border: 1px solid black; text-align: right;">${car.price}만원</td>`;
        output += `</tr>`;
    });    

    output += `</table>`;
    response.send(output);
});

app.listen(54321, () => {
    console.log('Server running at http://localhost:54321');
});