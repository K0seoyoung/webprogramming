const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}));

const title = '<실습 9. Express 실습> 학번:202104473 이름:고서영'

app.get('/:op/:n1/:n2', (request, response) => {
    const { n1, op, n2 } = request.params;
    let result;
    let operation;

    switch (op) {
        case 'add':
            result = parseInt(n1) + parseInt(n2);
            operation = '+';
            break;
        case 'sub':
            result = parseInt(n1) - parseInt(n2);
            operation = '-';
            break;
        case 'mul':
            result = parseInt(n1) * parseInt(n2);
            operation = '*';
            break;
        case 'div':
            result = parseInt(n1) / parseInt(n2);
            operation = '/';
            break;
        default:
            result = 'Invalid operation';
            break;
    }
    
    const output = `${title}<br><h2><strong>(1) 사칙연산 계산<br></strong></h2>${n1} ${operation} ${n2} = ${result}`;
    response.send(output);
});

app.get('/sort',(request,response) => {
    const {a, b, c} = request.query;
    const sortedNumbers = [parseInt(a), parseInt(b), parseInt(c)].sort((x,y) => x - y);
    const output = `${title}<br><h2><strong>(2) 숫자 정렬하기<br></strong></h2>a = ${a}, b = ${b}, c = ${c}<br><br>sorted : ${sortedNumbers.join(', ')}`;
    response.send(output);
});

app.post('/rect', (request,response) => {
    const { width, height } = request.body;
    const area = parseInt(width) * parseInt(height);
    let rectangle = '';
    for(let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangle += 'H';
        }
        rectangle += '<br>';
    }
    const output = `${title}<br><h2><strong>(3)사각형 그리기 (가로: ${width}, 세로: ${height})</strong></h2>${rectangle}`;
    response.send(output);
})

app.listen(54321, () => {
    console.log('Server running at http://localhost:54321');
});


