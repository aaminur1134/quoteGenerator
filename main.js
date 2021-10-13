const quotes = [
{
    name : '— Dalai Lama',
    quote : ' “The purpose of our lives is to be happy.” '
},
{
    name : '— Babe Ruth',
    quote : '  “Never let the fear of striking out keep you from playing the game.”'
},
{
    name : '— Albert Einstein',
    quote : ' “If you want to live a happy life, tie it to a goal, not to people or things.”'
},
{
    name : '— Thomas A. Edison',
    quote : ' “Many of life’s failures are people who did not realize how close they were to success when they gave up.” '
},
{
    name : '— Stephen King ',
    quote : ' “Get busy living or get busy dying.” '
},
{
    name : '— Mae West ',
    quote : ' “You only live once, but if you do it right, once is enough.”'
},
{
    name : '— John Lennon',
    quote : ' “Life is what happens when you’re busy making other plans.” '
},
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteAuthor = document.getElementById('quoteAuthor');

const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', function(){
   const quoteNum = Math.floor(Math.random()*quotes.length);
   quoteAuthor.innerHTML = quotes[quoteNum].name;
   quote.innerHTML = quotes[quoteNum].quote;

});