import React, { useState } from "react";
import babyNamesData from "./babyNamesData.json";
import "./BabyNamesApp.css";
import { IdentifierTypePredicate } from "typescript";



// Write a React app which lists baby names from the given file.

// It should display boys' and girls' names differently - it's your choice as to how*

// The names should be displayed in ascending alphabetical order.

// Your project should be on GitHub and Netlify with correct names.

interface NameDetails {
  id: number;
   name: string;
  sex: string;
}
// need to create an object for the actual details of the baby and the ID needs to be a number 

let sortLettersAlphabetically = babyNamesData.sort((a,b) => a.name.localeCompare(b.name))

// this should sort the letters alphabetically 

function App() {
  console.log('our data is', this.props.data)
  return (
    <div className="App">
        <ul>
         <li>Name 1</li>
         <li>Name 1</li>
         <li>Name 1</li>
        </ul>
    </div>
  );
}

export default App;
