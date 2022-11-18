
import readlineSync from 'readline-sync'
import chalk from 'chalk'

var greetUser = "Hi there. Sorry to bother you again! Could you please provide me your Date of birth in DD/MM: "
var userDOB = readlineSync.question(chalk.green(greetUser))
var userNOtification = "Your date and month of birth are: " + userDOB
console.log(chalk.blue(userNOtification))
var neitherPrimeNorCOmposite = "The date you have entered is neither prime nor composite "
var isPrime = true
var invalid = "PLEASE ENTER A VALID NUMBER AND NOT A POTATO!!"
var primeNUmber = "Your birthday is a prime number!"
var notAPrimeNUmber = "Your birthday is not a prime number!"
var notaValidDate = "This date is not valid"
var invalidDates = ["31/02", "30/02", "31/04", "31/06", "31/09", "31/11"]
var isValid = false
var isComposite = false
var pass = true
// console.log(parseInt(userDOB.substring(0,2)))
// console.log(parseInt(userDOB.substring(3,5)))

            
function checkValidDates(userDOB)
  {
    if (userDOB.toLowerCase() == "potato")
    {
      pass = false
      console.log(chalk.blue(invalid))
    }
    else
    {
      if(parseInt(userDOB.substring(0,2)) > 31 || parseInt(userDOB.substring(3,5)) > 12 || parseInt(userDOB.substring(0,2)) < 0 || parseInt(userDOB.substring(3,5)) < 0)
      {
        console.log(chalk.red(notaValidDate))
        pass = false
        
      }
      
      for (var i = 0; i < invalidDates.length; i++)
        {
          if (userDOB == invalidDates[i])
          {
            console.log(chalk.red(notaValidDate))
             pass = false
            break;
          }
        }
    }
    return pass
  }


            
function checkForPrimeDOB (userDOB)
{
  if(parseInt(userDOB.substring(0,2)) == 1) {
    
    console.log(chalk.red(neitherPrimeNorCOmposite))
  }
    
  for(var i=2; i < parseInt(userDOB.substring(0,2)); i++)
    {
      if(parseInt(userDOB.substring(0,2)) % i == 0)
      {
        isPrime = false
        break;
      }
    }
  
   if(isPrime == true && parseInt(userDOB.substring(0,2)) != 1) 
   {
     console.log(chalk.green(primeNUmber))
   }
  if(isPrime == false) 
    {
      console.log(chalk.red(notAPrimeNUmber))
    }
    
  
  
}
checkValidDates(userDOB)

if(pass == true)
{
  checkForPrimeDOB(userDOB)
}
else
{
  console.log(chalk.red("Good Bye!"))
}

// function checkForPrimeDOB (userDOB)
// {
//     if(parseInt(userDOB.substring(0,2)) < 2 && parseInt(userDOB.substring(0,2)) >= 0){
//         console.log(chalk.yellow(neitherPrimeNorCOmposite))
//     }
//     else if(parseInt(userDOB.substring(0,2)) >= 2 && parseInt(userDOB.substring(0,2)) <= 31)
//     {
//         for (var i=2; i < parseInt(userDOB.substring(0,2)); i++)
//         {
//                 if(parseInt(userDOB.substring(0,2)) % i == 0)
//                 {
//                     isPrime = false;
//                     break;

//                 }
//         }
    
//         if(isPrime){
//             console.log(chalk.green(primeNUmber))
//         }
//         if(isPrime) {
//             console.log(chalk.red(notAPrimeNUmber))
//         }
//     }
//     else{
//       console.log(chalk.red(notAPrimeNUmber))  
//     }


// }
    

//checkForPrimeDOB(userDOB)


//C:\Windows\system32\cmd.exe[12244]
