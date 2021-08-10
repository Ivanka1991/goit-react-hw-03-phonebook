import {Component} from 'react';
import css from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
      name: "",
      number: "",
    };

handleChange = e =>{
   const {name, value} = e.target;
   this.setState({
    [name]: value
  });  
};

handleSubmit = e =>{
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
    this.reset();
}

reset = () =>{
    this.setState({ name: "", number: "" });
}

render(){
    return(
  
<form
className={css.form} 
onSubmit={this.handleSubmit}>
   
     <label 
     className={css.label}>
      Name       
      <input 
       className={css.input}
       value={this.state.name}
       onChange={this.handleChange}
       type="text"
       name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
       />
     </label>
     <label 
     className={css.label}> 
      Number
       <input 
       className={css.input}
       value={this.state.number}
       onChange={this.handleChange}
       type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
       />
     </label>
     <button 
     className={css.btn} 
     type='submit'>
       Add contact
       </button>
</form>
 )
}
}
