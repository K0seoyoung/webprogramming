
const request = require('request');
const cheerio = require('cheerio');

const url= 'https://www.hanbit.co.kr/store/books/series_list.html';

request(url, (error, response, body) => {
if(!error && response.statusCode === 200){
    const $ = cheerio.load(body);
 

    const seriesElements = $('.sub_book_list');

    seriesElements.each((index, element) => {
        const order = $(element).find('p.series_no').text().trim();
        const title = $(element).find('h4 > a').text().trim();
        const description = $(element).find('p.series_info').text().trim();
        
      console.log(`<실습 8. 시리즈 도서 목록> 학번:202104352 이름:석민지`);
      console.log(`차례 : ${order}`);
      console.log(`제목 : ${title}`);    
      console.log(`설명 : ${description}\n`);

    });
} else {
  console.error('Error:', error);
}
});