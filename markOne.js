//markOne = https://replit.com/@sahatanmoy663/LevelZeoClassOne?embed=1&output=1

var readLinesync = require('readline-sync')

var greetingParaOne = "Hey there! I am your host Tanmoy. I am so glad that you've decided to click on my link. Welcome to markOne."

var greetingParaTwo = "Let's play a game. I'll be asking you 5 questions. If you're able to answer all of them correctly, I'll send you a gift. "

var greetingParaThree = "If you're not able to answer all of them correctly, DIL CHOTA NA KARO BANDHU! Better luck next time! But before that, let me catch your name! "

console.log(greetingParaOne)
console.log("")
console.log(greetingParaTwo)
console.log("")
console.log(greetingParaThree)
console.log("")

var askName = "So, What should I call you? "
var userName = readLinesync.question(askName) //Tanmoy
var greetUser = "Hey " + userName + "! I hope you are ready. Let's go!"
console.log(greetUser)
console.log("")


var questions = [{
  question: "Through which of these does light enter the eyes before reaching the lens?",
  options: "Your options are:",
  optionA: "A: Iris",
  optionB: "B: Sclera",
  optionC: "C: Retina",
  optionD: "D: Pupil",
  answer: "D"
}, {
  question: "The world’s longest and deepest railway tunnel, the Gotthard Base Tunnel, is located under which mountain range?",
  options: "Your options are:",
  optionA: "A: The Urals",
  optionB: "B: The Alps",
  optionC: "C: The Rockies",
  optionD: "D: The Andes",
  answer: "B"
}, {
  question: "With reference to investment, Equity, Debt and Hybrid are terms linked with what?",
  options: "Your options are:",
  optionA: "A: National Saving Certificates",
  optionB: "B: Kisan Vikas Patra",
  optionC: "C: Fixed Deposits",
  optionD: "D: Mutual Funds",
  answer: "D"
}, {
  question: "Which folk festival is celebrated by people of all faiths in Punjab, on the night before Maghi or Makar Sankranti?",
  options: "Your options are:",
  optionA: "A: Lohri",
  optionB: "B: Basant Panchami",
  optionC: "C: Holika Dahan",
  optionD: "D: Teeyan",
  answer: "A"
}, {
  question: "Which office and residence is at 10, Downing Street, London?",
  options: "Your options are:",
  optionA: "A: The Pope",
  optionB: "B: Queen of the United Kingdom",
  optionC: "C: The US President",
  optionD: "D: The UK Prime Minister",
  answer: "D"
}]

var score = 0
var correctAnswerNotification = "Damn! Your answer is correct!"
var incorrectAnswerNotification = "Tough Luck! Your answer is incorrect!"

function gameQuestions() {
  for (i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    console.log(questions[i].optionA)
    console.log(questions[i].optionB)
    console.log(questions[i].optionC)
    console.log(questions[i].optionD)
    console.log("")

    var userOption = readLinesync.question("Please input your option: ")
    if (questions[i].answer == userOption.toUpperCase()) {
      score = score + 1
      console.log("")
      console.log(correctAnswerNotification)
      console.log("")
    }
    else {
      console.log("")
      console.log(incorrectAnswerNotification)
      console.log("")
    }
  }
}

gameQuestions()
var endNotification = "Hey you have reached the end of the game! I hope you have enjoyed this little game."
console.log("")
console.log(endNotification)
console.log("")
var finalScore = "Your final score is: " + score


var askAddress = "Congrats! You have answered all the Questions correctly! You are the winner. Please enter your address! "
var thankYou = "Thank you. See ya later!"
var betterLuckNextTime = "You were almost there! Probably next time you'll rock!"
var levelPro = "You're at level: Pro!"
var levelExpert = "You're at level: Expert"
var levelVeryGood = "You're at level: Good"
var levelNeedImprovement = "You're at level: Need Improvement"
var askScreenshot = "Please provide a screenshot of the score! I'll need it to update my record! "


if (score == 5) {
  var userAddress = readLinesync.question(askAddress)
  console.log("")
  console.log(thankYou)
  console.log("")
  console.log(finalScore)
  console.log("")
  console.log(levelPro)
}
if (score == 4) {
  console.log("")
  console.log(thankYou)
  console.log("")
  console.log(betterLuckNextTime)
  console.log("")
  console.log(finalScore)
  console.log("")
  console.log(levelExpert)
}
if (score == 3) {
  console.log("")
  console.log(betterLuckNextTime)
  console.log("")
  console.log(thankYou)
  console.log("")
  console.log(finalScore)
  console.log("")
  console.log(levelVeryGood)
}

if (score < 3) {
  console.log("")
  console.log(betterLuckNextTime)
  console.log("")
  console.log(thankYou)
  console.log("")
  console.log(finalScore)
  console.log("")
  console.log(levelNeedImprovement)
}

var highestScorer = {
  name: "Tanmoy",
  score: 5
}

var bestPlayer = "The highest scorer is " + highestScorer.name + " with a score of " + highestScorer.score

function checkHighestScorer(parameterOne) {
  if (parameterOne == highestScorer.score) {
    console.log("")
    console.log(askScreenshot)
  }
  else {
    console.log("")
    console.log(bestPlayer)

  }
}


checkHighestScorer(score)


// var question1 = {
// question: "Which office and residence is at 10, Downing Street, London?",
//   optionA: "A: The Pope",
//   optionB: "B: Queen of the United Kingdom",
//   optionC: "C: The US President",
//   optionD: "D: The UK Prime Minister",
//   answer: "D"
// }

