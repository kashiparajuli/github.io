 /* revealing module pattern (module factory variant) */
 function makeContacts() {

    let contacts = [];
 
    function keepContacts(name) {
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
    return {
     keepContacts:  keepContacts
    }
  }
  // test it
  const myContacts = makeContacts();
  myContacts.keepContacts("Bill");
  myContacts.keepContacts("Bob");
  console.log("should find number for bill: " + myContacts.keepContacts("Bill"));
 