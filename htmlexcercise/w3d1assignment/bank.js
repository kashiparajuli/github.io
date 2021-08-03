
class Bank {
    static nextNumber;
    constructor() {
        this._accounts = [];
    }

    addAccount() {
        this._accounts.push(new Account(number));
        return this._accounts.length;

    }
    addSavingsAccount(interest, number) {
        this._accounts.push(new SavingAccount(interest, number));
        return this._accounts.length;

    }
    addCheckingAccount(overdraftLimit, number) {
        this._acccounts.push(new ChecckingAccount(overdraftLimit, number));
        return this._accounts.length;
    }
    closeAccount(number) {

    }
    accountReport() {

    }

    endOfMonth() {

    }



}

