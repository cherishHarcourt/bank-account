
class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = Number("646573822");
      this.accountHolderName = "Cherish Harcourt";
      this.balance = Number("3497");
    }
    deposit(amount) {
      this.balance += amount;
      alert(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        alert(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
      } else {
        alert(`Insufficient balance in account ${this.accountNumber}.`);
      }
    }
  //
    transfer(amount, recipientAccount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.deposit(balance);
        alert(` dear ${names} you are transferring $${amount} from account ${this.accountNumber} 
        to account ${recipientAccount}. `);
      } else {
        alert(`Insufficient balance in account ${this.accountNumber} for transfer.`);
      }
    }
  
    displayBalance() {
      console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
    }
  }
  

  // Create multiple instances of the BankAccount class
     const account1 = new BankAccount('11117777', 'Precious', 2676);
     const account2 = new BankAccount('22227777', 'sandra', 3330);


  let names= [];
  let namEs= prompt("enter name");
  names.push(namEs);

  let amount= [];
  let tranS= prompt("transfer  the amount");
  amount.push(tranS);

  let recipientAccount= [];
  let recipp= prompt("input account number");
  recipientAccount.push(recipp);

  account1.transfer(amount, recipientAccount);
  // Transactions on the bank accounts
//   account1.displayBalance(); // Account 11117777 balance: $26777000
//   account2.displayBalance(); // Account 22227777 balance: $3333000
  
//   account1.deposit(500); // Amount $500 deposited into account 1111777.
//   account1.displayBalance(); // Account 1111777 balance: $26777500
  
//   account1.withdraw(200); // Amount $200 withdrawn from account 1111777.
//   account1.displayBalance(); // Account 1111777 balance: $26777500
  
//   account1.transfer(700, account2); // Amount $700 transferred from account SB-01 to account 22227777.
//   account1.displayBalance(); // Account 1111777 balance: $
//   account2.displayBalance(); // Account 22227777 balance: $
  