import React, {Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export default class App extends Component {
    state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };



    componentDidMount(){

   const contacts = localStorage.getItem('contacts');
   const parsedContacts = JSON.parse(contacts);
   
   if (parsedContacts){
    this.setState({contacts: parsedContacts});
   }
    }


    componentDidUpdate(prevState){
const {contacts} = this.state

if (contacts !== prevState.contacts)
localStorage.setItem('contacts', JSON.stringify(contacts));
    }



addContact = (data) => {
    const searchName = this.state.contacts
    .map((contact) => contact.name)
    .includes(data.name);

    if (searchName) {
        alert(`${data.name} is already in contacts`);
    }else {
        const contact ={
            ...data,
            id: uuidv4(),
        };
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contact],
          }));
    }
}

changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
      
    render(){
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

return (
<>

<div>
<h2>Phonebook</h2>
  <ContactForm  onAddContact={this.addContact}/>
       <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
       {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
</div>
</>
    )
  }
}

