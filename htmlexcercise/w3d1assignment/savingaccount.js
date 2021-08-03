class SavingAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest=interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(interest){
        this._interest=interest;
    }

    addInterest(interest){
        this._balance+=(this._balance*this.getInterest()/100);
    }

    // endOfMonth() {
       
    //     return ('interest Added saving account:${this.getNumber()} balance:${this.getBalannce} interest:${this._interest}')
    // }
    toString() {
        return "SavingAccount: " + this._number + ": balance " + this.getBalance() +
            ": interest " + this._interest;
    }
  
}


