const api = 'https://api.api-ninjas.com/v1/quotes'
const key = 'ahVztQG/5rXS0RfwELn1mA==uJeEork2273r5RwK'

const quote = document.getElementById('quote')
const author = document.getElementById('author')
const newQuote = document.getElementsByTagName('button')[0]
const tweetBtn = document.getElementsByTagName('button')[1]

async function getQuote(url) {
    const res = await fetch(url + `?X-Api-Key=${key}`)
    let data = await res.json()

    console.log(data[0])

    quote.innerHTML = data[0].quote
    author.innerHTML = data[0].author

}

function tweet(){
    window.open('https://x.com/intent/post?text=' + quote.innerHTML + " ---- by " + author.innerHTML, 'Tweet window', 'width=600px, height=300')
}

getQuote(api)

tweetBtn.onclick = function(){
    tweet()
}

newQuote.onclick = function(){
    getQuote(api)
}