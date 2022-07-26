const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector('.sound'),
CopyBtn = document.querySelector('.copy'),
twitter = document.querySelector('.twitter');
// Random quote
function randomQuote (){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "loading Quote..."
    fetch('https://api.quotable.io/random').then(res => res.json())
    .then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading');
    })
}

soundBtn.addEventListener("click", () => {
    // SpeechSynthesisUtterance is a web speech api that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}` );
    speechSynthesis.speak(utterance, 'by' )
});

CopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText)
});

twitter.addEventListener('click',() => {
   let tweetUrl = "https://twitter.com";
   window.open(tweetUrl, "_blank")
})
quoteBtn.addEventListener('click', randomQuote);

