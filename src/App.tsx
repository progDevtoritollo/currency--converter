import { withProviders } from "./providers";
import React from 'react';
import { Routing } from "pages";
import './App.css';

function App() {

  //  сделать get запрос и звенести его в редакс 

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);

