import React, { Component } from 'react';
import './Table.css';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
        </thead>
    );
};

const TableBody =  props => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{ row.company }</td>
                <td>{ row.contact }</td>
                <td>{ row.country }</td>
            </tr>
        );
    });
    return <tbody>{ rows }</tbody>
};

class Table extends Component {
    render() { 
        const { characterData } =  this.props
        return (
            <table id="customers">
                <TableHeader />
                <TableBody  characterData = { characterData } />
            </table>

        );
    }
}
 
export default Table;