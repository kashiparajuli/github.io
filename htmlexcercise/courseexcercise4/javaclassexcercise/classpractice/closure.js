 /* closure that returns function to manage contacts */
 function keepContacts() {

    let contacts = [];
 
    return function (name) {
      let aContact = contacts.find(contact => (contact.name === name) ? true : false);
      if (aContact !== undefined) {
        return aContact.phone;
      } else {
        contacts.push({
          name: name,
          phone: prompt("Please enter phone number: ")
        });
      }
    }
 
  }
  // test it
  const myContacts =  keepContacts();
  myContacts("Bill");
  myContacts("Bob");
  console.log("should find number for bill: " + myContacts("Bill"));