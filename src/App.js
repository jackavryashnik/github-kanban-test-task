import React from 'react';
import { ApiRequest } from './components/ApiRequest/ApiRequest';

function App() {
  return (
    <>
      <ApiRequest repoOwner="facebook" repoName="react"/>
    </>
  );
}

export default App;
