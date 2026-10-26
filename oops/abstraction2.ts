abstract class ATM{
    abstract withdraw(amount:number):void;
}
class BankATM extends ATM{
    withdraw(amount:number){
        console.log('withdrawn amount:$'+amount);
    }
}
let atm=new BankATM();
atm.withdraw(500);