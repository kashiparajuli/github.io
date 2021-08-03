describe("Account:getNumber", function () {
    it("takes no arguments and returns number of an account",
        function () {
            assert.equal(12345, new Account(12345).getNumber());
        });
});

describe("Account:getBalance", function () {
    it("takes no arguments and returns balance of an account",
        function () {
            assert.equal(5000.0, new Account(12345).getBalance());
        });
});

describe("Account:deposit", function () {
    it("take deposit amount argument and retuns balance",
        function () {
            let accObj = new Account(12345);
            accObj.deposit(2000);
            assert.equal(7000, accObj.getBalance());
        });
});
describe("Account:withdraw", function () {
    it("takes argument and returns balance of an account",
        function () {
            let accObj = new Account(12345);
            accObj.withdraw(2000);
            assert.equal(3000, accObj.getBalance());
        });
});

describe("Account:toString", function () {
    it("retuns all attributes",
        function () {
            let accObj1=new Account(12345);
            assert.equal("Account 12345: balance 5000", accObj1.toString());
        });
});

describe("SavingAccount:getInterest", function () {
    it("takes no arguments and returns interest of an account",
        function () {
            let savingObj=new SavingAccount(12345,10);
            assert.equal(10, savingObj.getInterest());
        });
});



describe("SavingAccount:setInterest", function () {
    it("takes no arguments and returns interest of an account",
        function () {
            let savingObj=new SavingAccount(12345,10);
            savingObj.setInterest(12);
            assert.equal(12, savingObj.getInterest());
        });
});

describe("SavingAccount:addInterest", function () {
    it("takes no arguments and returns balance of an account after interest addition",
        function () {
            let savingObj=new SavingAccount(12345,10);
            savingObj.addInterest(10);
            assert.equal(5500, savingObj.getBalance());
        });
});



describe("SavingAccount:toString", function () {
    it("Returns toString method of Saving Account",
        function () {
            let accObjSaving=new SavingAccount(12345,10);
            assert.equal("SavingAccount: 12345: balance 5000: interest 10", accObjSaving.toString());
        });
});


describe("CheckingAccount:getOverdraftLimit", function () {
    it("takes no arguments and returns OverdraftLimit of an account",
        function () {
            let checkingObj=new ChecckingAccount(12345,10000);
            assert.equal(10000, checkingObj.getOverdraftLimit());
        });
});


describe("CheckingAccount:setOverdraftLimit", function () {
    it("takes no arguments and returns verdraftLimit of an account of an account",
        function () {
            let checkingObj=new ChecckingAccount(12345,10000);
            checkingObj.setOverdraftLimit(10000);
            assert.equal(10000, checkingObj.getOverdraftLimit());
        });
});

describe("CheckingAccount:toString", function () {
    it("takes no arguments and returns all attributes of checking account",
        function () {
            let checkingOb=new ChecckingAccount(12345,10000);
            assert.equal("CheckingAccount: 12345: balance 5000 overdraftLimit 10000", checkingOb.toString());
        });
});

// return "CheckingAccount: " + this.getNumber() + ": balance " + this.getBalance() +
// "overdraftLimit " + this._overdraftLimit;


