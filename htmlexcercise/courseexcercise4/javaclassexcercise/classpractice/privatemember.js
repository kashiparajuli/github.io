 /* class solution uses _ convention to indicate the _contacts property should be considered private
  */
 class MakeContacts {
    constructor() {
      this._contacts = [];
    }
 
    keepContacts(name) {
      let aContact = this._contacts.find(contact => (contact.name === name) ? true : false);
      if (aContact !== undefined) {
        return aContact.phone;
      } else {
        this._contacts.push({
          name: name,
          phone: prompt("Please enter phone number: ")
        });
      }
    }
 
  }
  // test it
  const myContacts = new MakeContacts();
  myContacts.keepContacts("Bill");
  myContacts.keepContacts("Bob");
  console.log("should find number for bill: " + myContacts.keepContacts("Bill"));
  console.log("can access the _contacts in class:  ");
  console.log(myContacts._contacts);