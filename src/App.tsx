import { withProviders } from "./providers";
import React from 'react';
import { Routing } from "pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);

