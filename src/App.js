import React, { Component } from 'react';
import './App.css';
import  Table from './Components/Table';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

// class App extends Component {
//   render() { 
  const data = [
    {
        company: "Alfreds Futterkiste",
        contact: "Maria Anders",
        country: "Germany"
    },
    {
        company: "Berglunds snabbköp",
        contact: "Christina Berglund",
        country: "Sweden"
    },
    {
        company: "Centro comercial Moctezuma",
        contact: "Francisco Chang",
        country: "Mexico"
    },
    {
        company: "Ernst Handel",
        contact: "Roland Mendel",
        country: "Austria"
    },
    {
        company: "Island Trading",
        contact: "Helen Bennett",
        country: "UK"
    },
    {
        company: "Königlich Essen",
        contact: "Philip Cramer",
        country: "Germany"
    },
    {
        company: "Laughing Bacchus Winecellars",
        contact: "Yoshi Tannamuri",
        country: "Canada"
    },
    {
        company: "Magazzini Alimentari Riuniti",
        contact: "Giovanni Rovelli",
        country: "Italy"
    },
    {
        company: "North/South",
        contact: "Simon Crowther",
        country: "UK"
    },
    {
        company: "Paris spécialités",
        contact: "Marie Bertrand",
        country: "France"
    },
    ];


  return(
    <div className="wrapper">
      <Table characterData={data} />
    </div>
  );
}
//}
export default App;
