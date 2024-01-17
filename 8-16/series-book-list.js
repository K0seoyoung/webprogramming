const request = require('request'); 
const cheerio = require('cheerio');

console.log('<실습 8. 시리즈 도서 목록> 학번:202104473 이름:고서영');
console.log();

const url = 'https://www.hanbit.co.kr/store/books/series_list.html'; 
request(url, (error, response, body) => {
    const $ = cheerio.load(body); 
    $('.series_book_list').find('dl').each((index, element) => {
        const title = $(element).find('a').text().trim(); 
        const description = $(element).find('dd').text().trim();
        
        console.log(`차례: ${index + 1}`);
        console.log(`제목: ${title}`);
        console.log(`설명: ${description}`);
        console.log();
    });
});
