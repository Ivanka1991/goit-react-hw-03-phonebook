import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


const ContactList = ({contacts, onRemoveContact}) =>(
<ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
    <li 
    className={css.list__item} 
    key={id}>
<span className={css.name}>{name}</span>
<span className={css.number}>{number}</span>
        {
    <button 
    className={css.deleteBtn}
    type='button'
    onClick={() => onRemoveContact(id)}>
        Delete
    </button>
    }
    </li> 
    ))}
</ul>
)

ContactList.propTypes = {
    onRemoveContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
  }

export default ContactList;
