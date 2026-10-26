class BankAccount {
    private balance = 1000;
    getBalance() {
        return this.balance;
    }
}
let account = new BankAccount();
console.log(account.getBalance());