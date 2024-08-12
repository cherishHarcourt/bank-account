var username,
	correct_pass = (/^[0-9]{4}$/), // practicing regular expressions
	passTry = 3,
    savingsBalance = 50000,
	currentBalance = 35000;
	
// Input a username
function atmMachineUsername() {
	username = prompt("Enter your name");
	if (username !== "" && username !== null) {
		atmMachinePassword();
	} else {
		atmMachineUsername();
	}
}
// Input a valid password
function atmMachinePassword() {
	var pswEntry = parseInt(prompt("Dear " + username + ", enter your 4 digit PIN"));
	checkPassword(pswEntry);
}
// Verify Password meets requirements
function checkPassword(userInput) {
    if (correct_pass.test(userInput)){
        selectAccountType();
    } else {
        while (!(correct_pass.test(userInput))) {
            if (passTry === 1) {
				alert("Incorrect PIN.");
            	alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support."); 
                exit();
                break;
            } else {
				passTry -= 1;
				alert("Incorrect PIN. Please try again.");
				alert("You have " + passTry + " chance/s to try");
            	atmMachinePassword();
			}
        }
    }
}
// Select Which account type to use
function selectAccountType() {
    var accountType = parseInt(prompt("Which type of account do you wish to use? \n 1. Savings \n 2. Current"));
	if (accountType == "1" || accountType =="2" ) {
        switch (accountType){
            case 1:
                selectFunctionSavings();
                break;
            case 2:
                selectFunction();
                break;
            default:
                alert("Please make a valid selection");
                selectAccountType();
            }
        } else {
            alert("Please make a valid selection");
            selectAccountType();
        }
    }
    
	// 	selectFunction(); // need a code to limit selection to "1" or "2"
	// } else {
	// 	alert("Please make a valid selection");
	// 	selectAccountType();
	 // need to make a new code for current specifically
// Select what the owner wants to do
function selectFunction() {
	var atmFunctions = parseInt(prompt("Hello " + username + 
    ", what can we do for you today?\n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Transfer \n 5. Exit"));
	if (atmFunctions == "1" || atmFunctions == "2" || atmFunctions == "3" || 
    atmFunctions == "4" || atmFunctions == "5") {
		switch (atmFunctions) {
			case 1:
				inquiry();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				deposit();
				break;
            case 4:
                transfer();
                break;
			case 5:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				selectFunction();
		}
	} else {
		alert("Please make a valid selection");
		selectFunction();
	}
}
// Inquiry
function inquiry() {
	alert("Your current balance is $" + currentBalance);
	toContinue();
}
// Deposit
function deposit() {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		currentBalance += depositAmount;
		alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + currentBalance);
		toContinue();
	} else {
		alert("Error: please enter a number!");
		deposit();
	}
}
//transfer
function transfer(){var recieverAccount = parseInt(prompt("input recievers account number"));
    if (recieverAccount !== "" && recieverAccount !== null && !isNaN(recieverAccount)) {
        alert (" found the account " + recieverAccount); 
        transfer2();}
         else {alert("invalid account number")};
        transfer()};
function transfer2(){var transferAmount = parseInt(prompt("How much do you want to transfer ? \n" 
+ "The minimum amount you can transfer is $100"));
// find a waay to call the recieveraccount local variable.
	if (transferAmount !== "" && transferAmount !== null && !isNaN(transferAmount)) {
		if (transferAmount >= 100) {
			if (transferAmount <= currentBalance) {
				currentBalance -= transferAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + currentBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				transfer2();
			}
		} else {
			alert("You must transfer at least $100");
			transfer2();
		}
	} else {
		alert("Error: please enter a number!");
		transfer2();
	}}
// Withdrawal
function withdrawal() {
	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= currentBalance) {
				currentBalance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + currentBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				withdrawal();
			}
		} else {
			alert("You must withdraw at least $1000");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}	
// Does the user wish to continue using the ATM
// function toContinue(){
//     var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
// 	if (yesOrNo == "1" || yesOrNo == "2") { //slight bug needs to be fixed here. fixed.
//     	if (yesOrNo === 2){
// 			exit();
//     	}
// 		else {
// 			selectAccountType(); 
//     	}
// 	} else {
// 		alert("Please make a valid selection");
// 		toContinue();
// 	}
// }
function selectFunctionSavings() {
	var atmFunctions = parseInt(prompt("Hello " + username + 
    ", what can we do for you today?\n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Transfer \n 5. Exit"));
	if (atmFunctions == "1" || atmFunctions == "2" || atmFunctions == "3" || 
    atmFunctions == "4" || atmFunctions == "5") {
		switch (atmFunctions) {
			case 1:
				inquirySavings();
				break;
			case 2:
				withdrawalSavings();
				break;
			case 3:
				depositSavings();
				break;
            case 4:
                transferSavings();
                break;
			case 5:
				exitSavings();
				break;
			default:
				alert("Please make a valid selection");
				selectFunctionSavings();
		}
	} else {
		alert("Please make a valid selection");
		selectFunctionSavings();
	}
}
// Inquiry
function inquirySavings() {
	alert("Your current balance is $" + savingsBalance);
	toContinue();
}
// Deposit
function depositSavings() {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		savingsBalance += depositAmount;
		alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + savingsBalance);
		toContinue();
	} else {
		alert("Error: please enter a number!");
		depositSavings();
	}
}
//transfer
function transferSavings(){var recieverAccount = parseInt(prompt("input recievers account number"));
    if (recieverAccount !== "" && recieverAccount !== null && !isNaN(recieverAccount)) {
        alert (" found the account " + recieverAccount); 
        transfer2S();}
         else {alert("invalid account number")};
        transferSavings()};
function transfer2S(){var transferAmount = parseInt(prompt("How much do you want to transfer ? \n" 
+ "The minimum amount you can transfer is $100"));
// find a waay to call the recieveraccount local variable.
	if (transferAmount !== "" && transferAmount !== null && !isNaN(transferAmount)) {
		if (transferAmount >= 100) {
			if (transferAmount <= savingsBalance) {
				savingsBalance -= transferAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + savingsBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				transfer2S();
			}
		} else {
			alert("You must transfer at least $100");
			transfer2S();
		}
	} else {
		alert("Error: please enter a number!");
		transfer2S();
	}}
// Withdrawal
function withdrawalSavings() {
	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= savingsBalance) {
				savingsBalance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + savingsBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				withdrawalSavings();
			}
		} else {
			alert("You must withdraw at least $1000");
			withdrawalSavings();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawalSavings();
	}
}	
// Does the user wish to continue using the ATM
function toContinue(){
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo == "1" || yesOrNo == "2") { //slight bug needs to be fixed here. fixed.
    	if (yesOrNo === 2){
			exit();
    	}
		else {
			selectAccountType(); 
    	}
	} else {
		alert("Please make a valid selection");
		toContinue();
	}
}
// Exit the ATM
function exit() {
	alert("Thank you for patronising our ATM machine");
		// To simulate a real ATM, get ready for next user
		atmMachineUsername();
} //add in field for doing transfers