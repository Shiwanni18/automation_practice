class SavingsAccount{
    calculateInterest(){
        console.log('the interest is 5%');
    }
}
class FixedDeposit{
    calculateInterest(){
        console.log('the interest is 7%');
    }
}
let savings=new SavingsAccount();
let fixed=new FixedDeposit();
savings.calculateInterest();
fixed.calculateInterest();