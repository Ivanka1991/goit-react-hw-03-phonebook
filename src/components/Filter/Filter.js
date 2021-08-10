import React from 'react';
import css from './Filter.module.css';
import PropTypes from "prop-types";


export default function Filter ({ value, onChangeFilter }) {
        return(
            <div className={css.filter}>
               <span className={css.title}> Find contacts by name</span>
            <input className={css.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
            />
            </div>
            )
}
  
  Filter.propTypes = {
    value: PropTypes.string.isRequired
  };