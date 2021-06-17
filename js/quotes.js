const quotes = [
    {
        quote:"Just keep swimming!",
        movie:"Finding Nemo"
    },
    {
        quote:"You don’t lose hope, love. If you do, you lose everything",
        movie:"Beauty and the Beast"
    },
    {
        quote:"Do the next right thing",
        movie:"Frozen2"
    },
    {
        quote:"Some people are worth melting for... just maybe not right this second.",
        movie:"Frozen"
    },
    {
        quote:"Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
        movie:"The Lion King"
    },
    {
        quote:"I never look back, darling! It distracts from the now.",
        movie:"The Incredibles"
    },
    {
        quote:"You have to do whatever it takes to seize your moment.",
        movie:"Coco"
    },
    {
        quote:"Crying helps me slow down and obsess over the weight of life’s problems",
        movie:"Inside Out"
    },
    {
        quote:"The flower that blooms in adversity is the most rare and beautiful of all",
        movie:"Mulan"
    },
    {
        quote:"To infinity … and beyond!",
        movie:"Toy Story"
    },
    {
        quote:"First rule of leadership:Everything is your fault",
        movie:"A Bug's Life"
    },
    {
        quote:"If you focus on what you left behind, you will never see what lies ahead",
        movie:"Ratatouille"
    },
    {
        quote:"HAKUNA MATATA",
        movie:"The Lion King"
    },
    {
        quote:"I don't want to survive. I want to live",
        movie:"WALL-E"
    },
    {
        quote:"LIFE’S A LITTLE BIT MESSY. WE ALL MAKE MISTAKES. NO MATTER WHAT TYPE OF ANIMAL YOU ARE, CHANGE STARTS WITH YOU",
        movie:"Zootopia"
    }    
];
const quoteNum = Math.floor(Math.random()* quotes.length);
const randomQuote = quotes[quoteNum].quote;
const randomMovie = quotes[quoteNum].movie;
// console.log(randomQuote);

const quoteSpan = document.querySelector(".quote");
const movieSpan = document.querySelector(".movie");

// load quotes from array and append to html
function loadQuotes(){
    quoteSpan.innerText = `" ${randomQuote} "`;
    movieSpan.innerText = `- ${randomMovie}`;
}
loadQuotes();

