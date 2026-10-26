class BankAccount{
    private balance:number=1000;
    deposit(amount:number){
        this.balance=this.balance+amount;
    }
    withdraw(amount:number){
        this.balance=this.balance-amount;
    }
    showBalance(){
        console.log(this.balance);
    }
}
let account = new BankAccount();
account.deposit(500);
account.withdraw(200);
account.showBalance();