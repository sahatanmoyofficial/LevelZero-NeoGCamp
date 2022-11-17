
import readlineSync from 'readline-sync'
import chalk from 'chalk'

var greetUser = "Hi there. Sorry to bother you again! Could you please provide me your Date of birth in DD/MM: "
var userDOB = readlineSync.question(chalk.green(greetUser))
var userNOtification = "Your date and month of bith are: " + userDOB
var neitherPrimeNorCOmposite = "The number you have entered is neither prime nor composite "
var isPrime = true
var primeNUmber = "Your birthday is a prime number!"
var notAPrimeNUmber = "Your birthday is not a prime number!"

function checkFOrPrimeDOB (userDOB)
{
    if(parseInt(userDOB.substring(0,2)) < 2 && parseInt(userDOB.substring(0,2)) >= 0){
        console.log(chalk.yellow(neitherPrimeNorCOmposite))
    }
    else if(parseInt(userDOB.substring(0,2)) > 2 && parseInt(userDOB.substring(0,2)) <= 31)
    {
        for (var i=2; i < parseInt(userDOB.substring(0,2)); i++)
        {
                if(parseInt(userDOB.substring(0,2)) % i == 0)
                {
                    isPrime = false;
                    break;

                }
        }
    
        if(isPrime){
            console.log(chalk.green(primeNUmber))
        }
        else{
            console.log(chalk.red(notAPrimeNUmber))
        }
    }
    else{
      console.log(chalk.red(notAPrimeNUmber))  
    }


}
    
checkFOrPrimeDOB(userDOB)


//C:\Windows\system32\cmd.exe[12244]
