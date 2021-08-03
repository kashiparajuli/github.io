class ChecckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }
    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraftLimit + this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    endOfMonth() {

        return 'Warning, low balance CheckingAccount CheckingAccountNumber:${this.getNumber} Balance:${this.getBalance()}OverdraftLimt:this._overdraftLimit'
    }
    toString() {
            return "CheckingAccount: " + this.getNumber() + ": balance " + this.getBalance()+
                " overdraftLimit " + this._overdraftLimit;
      
    }

}