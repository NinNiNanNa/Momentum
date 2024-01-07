const quotes = [
  {
    quote: "To laugh at yourself is to love yourself.",
    translation: "나를 웃게 하는 것이 나 자신을 사랑하는 것이다.",
  },
  {
    quote: "You still have enough time. to make your dream come true.",
    translation: "너는 아직 꿈을 이룰 충분한 시간이 있어.",
  },
  {
    quote: "All it takes is faith and trust.",
    translation: "믿음과 신뢰만 있으면 돼.",
  },
  {
    quote: "Love is a song that never ends.",
    translation: "사랑은 끝나지 않는 노래야.",
  },
  {
    quote: "Who sats that my dreams have to stay just my dreams?",
    translation: "누가 내 꿈이 그저 꿈으로만 머물거라고 말하니?",
  },
  {
    quote: "The only thing predictable about life is it's unpredictabilit.",
    translation: "인생에서 예측할 수 있는 유일한 것은 예측할 수 없는 것이랍니다.",
  },
  {
    quote: "You cannot be happy everyday, but there are happy things everyday.",
    translation: "너가 매일 행복할 수는 없지만, 행복한 일들은 매일 있어.",
  },
  {
    quote: "A true friend looks at the tears hidden in forced smile.",
    translation: "진정한 친구는 애써 지은 미소 속에 가려진 눈물을 봐.",
  },
  {
    quote: "Rememver you're the one who can fill the world with sunshine.",
    translation: "세상을 햇살로 가득 채울 수 있는 사람은 오직 너라는 걸 기억해.",
  },
  {
    quote: "A conscience is that still small voice that people won't listen to.",
    translation: "양심은 사람들에게 들리지 않는 작은 목소리야.",
  }
];

const quote = document.querySelector("#quote span:first-child");
const translation = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
translation.innerText = todaysQuote.translation;