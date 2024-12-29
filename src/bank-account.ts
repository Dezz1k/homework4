class BankAccount {
    balance: number

    constructor(balance: string) {
        this.balance = balance;
    }

    deposit(amount: number): number {
        this.balance = this.balance + amount;
        return myAccount
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
