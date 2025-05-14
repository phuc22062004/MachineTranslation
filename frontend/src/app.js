import React, { useState } from 'react';
import TranslatorForm from './components/TranslatorForm';
import TranslationResult from './components/TranslationResult';

function App() {
  const [result, setResult] = useState('');

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Machine Translation</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card p-4 shadow-sm border-light rounded">
            <h3 className="text-center mb-4"></h3>
            <TranslatorForm setResult={setResult} />
          </div>
          <TranslationResult result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
