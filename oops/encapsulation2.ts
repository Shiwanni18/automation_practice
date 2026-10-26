class BankAccount{
    private balance:number=1000;
    deposit(amount:number){
        this.balance=this.balance+amount;
    }
    showBalance(){
        console.log(this.balance);
    }
}
let account=new BankAccount();
account.deposit(500);
account.showBalance();
