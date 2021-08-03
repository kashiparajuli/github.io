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
            let checkingObj=new CheckingAccount(12345,10000);
            assert.equal(10000, checkingObj.getOverdraftLimit());
        });
});


describe("CheckingAccount:setOverdraftLimit", function () {
    it("takes no arguments and returns verdraftLimit of an account of an account",
        function () {
            let checkingObj=new CheckingAccount(12345,10000);
            checkingObj.setOverdraftLimit(10000);
            assert.equal(10000, checkingObj.getOverdraftLimit());
        });
});

describe("CheckingAccount:toString", function () {
    it("takes no arguments and returns all attributes of checking account",
        function () {
            let checkingOb=new CheckingAccount(12345,10000);
            assert.equal("CheckingAccount: 12345: balance 5000 overdraftLimit 10000", checkingOb.toString());
        });
});

describe("Bank: Class Method", function () {
    it("Add Account Number test", () => {
      let bank = new Bank();
      assert.equal(bank.addAccount(), 1);
    });
  });

  describe("Saving Account Added: Bank Class Method", function () {
    it("Add Saving Account test", () => {
      let bank = new Bank();
      bank.addSavingsAccount();
      assert.equal(bank.addSavingsAccount(), 2);
    });
  });

  describe("Checking Account Added: Bank Class Method", function () {
    it("Add Saving Account test", () => {
      let bank = new Bank();
      bank.addCheckingAccount(1700);
      bank.addCheckingAccount(1700);
      assert.equal(bank.addCheckingAccount(2000), 3);
    });
  });


  describe("Close Account: Bank Class Method", function () {
    it("Add Saving Account test", () => {
      let bank = new Bank();
      bank.addCheckingAccount(1500);
      bank.addCheckingAccount(1500);
      bank.addCheckingAccount(1500);
      assert.equal(bank.closeAccount(7), 2);
    });
  });

  describe("Validating Bank Class Method:bankReport", function () {
    it("Bank Report Test", () => {
      let bank = new Bank();
      bank.addCheckingAccount(1500);
      bank.addCheckingAccount(1500);
      bank.addCheckingAccount(1500);
    //   console.log(bank.accountReport());
      assert.equal(bank.accountReport(), "CheckingAccount: 10: balance 5000 overdraftLimit 1500\nCheckingAccount: 11: balance 5000 overdraftLimit 1500\nCheckingAccount: 12: balance 5000 overdraftLimit 1500");
    });
  });
  
  describe("Validating Bank Class Method:endOfMonth", function () {
    it("validating  test", () => {
      let bank = new Bank();
      bank.addSavingsAccount(15.5);
      bank._accounts[bank._accounts.length - 1].deposit(5000);
      bank.addCheckingAccount(1500);
      bank._accounts[bank._accounts.length - 1].withdraw(500);
    //   console.log(bank.endOfMonth());
      assert.equal(bank.endOfMonth(), "Interest added SavingAccount 13: balance:11550 interest: 15.5\n");
    });
  });