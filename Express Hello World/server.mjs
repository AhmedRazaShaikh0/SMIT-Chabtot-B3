import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

const Quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "The only person you should try to be better than is the person you were yesterday. - Anonymous",
];

app.use(cors());

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * Quotes.length);
  const randomQuote = Quotes[randomIndex];
  res.send({ message: randomQuote });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
