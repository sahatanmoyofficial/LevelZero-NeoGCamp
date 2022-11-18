//https://replit.com/@sahatanmoy663/markTwo?embed=1&output=1


var readLinesync = require('readline-sync')

var greetingParaOne = "Hey there! I am your host Tanmoy. Welcome to markTwo. Are you interested in Cricket? "

var greetingParaTwo = "Woah! High five! Let's test your knowledge. You'll have 5 questions. Each correct answer will reward you with 1 point and each wrong answer will deduct 1 point."

var greetingParaThree = "Let's begin."

var userNotInterested = "Uuh. Too bad. See ya later... Bye bye"


if (readLinesync.keyInYN(greetingParaOne)) {
  console.log("")
  console.log(greetingParaTwo)
  console.log("")
  console.log(greetingParaThree)
  
  var askName = "So, What should I call you? "
  var userName = readLinesync.question(askName)
  var greetUser = "Hey " + userName + "! I hope you are ready. Let's go!"
  console.log(greetUser)
  console.log("")

  var questions = [{
  question: "The longest innings ever played in test match cricket was 335.2 overs long.",
  options: "Your options are:",
  optionA: "A: True",
  optionB: "B: False",
  answer: "A"
  } , {
  question: "TNo cricketers played for England past the age of 50.",
  options: "Your options are:",
  optionA: "A: True",
  optionB: "B: False",
  answer: "B"
  }, {
  question: "The innings ends with ‘s’ in both singular and plural form?",
  options: "Your options are:",
  optionA: "A: True",
  optionB: "B: False",
  answer: "A"
  }, {
  question: "Sachin Tendulkar never served as the captain of the Indian national team?",
  options: "Your options are:",
  optionA: "A: True",
  optionB: "B: False",
  answer: "B"
  }, {
  question: "Melbourne Cricket Ground is the largest cricket stadium in the world",
  options: "Your options are:",
  optionA: "A: True",
  optionB: "B: False",
  answer: "B"
  }]

  var score = 0
  var correctAnswerNotification = "Damn! Your answer is correct!"
  var incorrectAnswerNotification = "Tough Luck! Your answer is incorrect!"

  function gameQuestions() {
    for (i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    console.log(questions[i].optionA)
    console.log(questions[i].optionB)
    console.log("")

    var userOption = readLinesync.question("Please input your option: ")
    if (questions[i].answer == userOption.toUpperCase()) {
      score = score + 1
      console.log("")
      console.log(correctAnswerNotification)
      console.log("")
    }
      else
      {
      score = score - 1
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
  

}

else {

  console.log(userNotInterested);

}


  


