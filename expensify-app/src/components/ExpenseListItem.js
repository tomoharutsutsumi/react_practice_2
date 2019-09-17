import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <NavLink to={`/edit/${id}`}><h1>{description}</h1></NavLink>
        <p>{amount}-{createdAt}</p>
    </div>
)

export default ExpenseListItem;