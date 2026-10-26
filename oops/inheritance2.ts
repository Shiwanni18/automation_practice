class BankAccount{
    showDetails(){
        console.log('this is a bank account');
    }
}
class SavingsAccount extends BankAccount{
    savingsInterest(){
        console.log('savings account provides interest');
    }
}
let account=new SavingsAccount();
account.showDetails();
account.savingsInterest();