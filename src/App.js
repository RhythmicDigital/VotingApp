import React, { useEffect, useState } from "react";
// Importing the Context Provider & Home Component
import MyContextProvider from './contexts/MyContext';
import VotingContextProvider from './contexts/Voting-Context';
import JoeContext from './components/CandData';
import VoterContext from './components/VoterData';

import Home from './components/Home'
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <MyContextProvider>
      <VotingContextProvider>
        <JoeContext>
          <VoterContext>
            <Home/>
          </VoterContext>
        </JoeContext>
      </VotingContextProvider>
    </MyContextProvider>
  );
}
export default App;

