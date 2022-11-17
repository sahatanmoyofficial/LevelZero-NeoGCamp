import readlineSync from 'readline-sync'
import moment from 'moment'
//import expressValidator from 'expressValidator'
//var readlineSync = require('readline-sync')

var askName = "Hey there! Thanks for stopping by. May I know your name? "
var userName = readlineSync.question(askName)
var greeting = "Nice to meet you " + userName
console.log("")
console.log(greeting)
console.log("")

var askDOB = "Please input your date of birth in the following format(dd/mm/yyyy): "
var userDOB = readlineSync.question(askDOB)
var validDate = "Please enter a valid date."
var leapYear = "Congrats it's a leap year"
var notALeapYear = "It's not a leap year"
var start = "The year you have entered"
var correctDateFlag = false
var leapYearCheckFlag = false


function checkValidDate(parameterOne) {

    if ((0 == parameterOne % 4) && (0 != parameterOne % 100) || (0 == parameterOne % 400)) {
        console.log(start + ' is a leap year');
    } else {
        console.log(start + ' is not a leap year');
    }
}

    
checkValidDate(userDOB.substring(6,10))

