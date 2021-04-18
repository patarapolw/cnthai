import axios from 'axios'
import cheerio from 'cheerio'

async function main() {
  const { data: html } = await axios.get('https://th.wikibooks.org/wiki/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%88%E0%B8%B5%E0%B8%99/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%84%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A7%E0%B8%B1%E0%B8%99')

  const $ = cheerio.load(html)
  $('h2 > .mw-headline').each((i, el) => {
    const $el = $(el)
    console.log(i, $el.text())

    if (i === 0) {
      let $n = $el.next()
    }
  })
}

if (require.main === module) {
  main()
}
