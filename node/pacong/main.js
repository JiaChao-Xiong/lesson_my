let request = require('request-promise')
let cheerio = require('cheerio')
let fs = require('fs') // I/O处理
let util = require('util')

const movies = []
const basicUrl = 'https://movie.douban.com/top250'  // security

function getMovieInfo (node) {
    let $ = cheerio.load(node)
    let titles = $('.info .hd span')
    titles = ([]).map.call(titles, t => {
      return $(t).text()
    })
    let bd = $('.info .bd')
    let info = bd.find('p').text()
    let score = bd.find('.star .rating_num').text()
    return { titles, info, score }
  }

async function getPage(url, num) {
    let html = await request({
        url
    })
    let $ = cheerio.load(html)
    let movieNodes = $('#content .article .grid_view').find('.item')
    let movieList = ([]).map.call(movieNodes, node => {
        return getMovieInfo(node)
    })
    return movieList
}

async function main() {
    let count = 10;
    let list = [];
    for (let i = 0; i < count; i++) {
        let url = basicUrl + `?start=${25*i}`
        console.log(url);
        list.push(...await getPage(url, i))
    }
    // console.log(list);
    fs.writeFile('./1.json', JSON.stringify(list), 'utf-8', () => {
        console.log('所有页面json 文件成功');
    })
}

main()