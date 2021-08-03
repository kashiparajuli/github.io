class CheckingAccount extends Account {
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
        if (this.getBalance() < 0) {
          return "Warning, low balance CheckingAccount " + this.getNumber() + ": balance: " + this.getBalance() + " overdraft limit:" + this.getOdLimit();
        } else {
          return "";
        }
      }
    toString() {
            return "CheckingAccount: " + this.getNumber() + ": balance " + this.getBalance()+
                " overdraftLimit " + this._overdraftLimit;
      
    }

}
