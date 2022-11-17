import readlineSync from 'readline-sync'
import chalk from 'chalk'
//import expressValidator from 'expressValidator'
//var readlineSync = require('readline-sync')

var askName = "Hey there! Thanks for stopping by. May I know your name? "
var userName = readlineSync.question(chalk.green(askName))
var greeting = "Nice to meet you " + userName
console.log("")
console.log(chalk.magenta(greeting))
console.log("")

var askDOB = "Please input your date of birth in the following format(dd/mm/yyyy): "
var userDOB = readlineSync.question(chalk.blue(askDOB))
var invalidDate = chalk.redBright("Please enter a valid date and not POTATO!!!")
var leapYear = " is a leap year"
var notALeapYear = " is not a leap year"
var start = "The year you have entered"
var correctDateFlag = false
var leapYearCheckFlag = false


function checkValidDate(parameterOne) {
  if (parameterOne.toLowerCase() == "potato")
  { 
  console.log(invalidDate)
  }
    else if ((0 == (parameterOne.substring(6,10) % 4)) && (0 != (parameterOne.substring(6,10) % 100)) || (0 == (parameterOne.substring(6,10) % 400))) {
      console.log(chalk.yellow(start + leapYear))
    }
      
    else {
        console.log(chalk.cyan(start + notALeapYear))
      }


}


checkValidDate(userDOB)
//checkValidDate(userDOB.substring(6,10))

