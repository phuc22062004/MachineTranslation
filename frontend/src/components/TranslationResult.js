import React from 'react';

function TranslationResult({ result }) {
  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <h3 className="text-center mb-3">Translation Result:</h3>

          <div className="card p-3 shadow-sm border-dark rounded">
            <p>{result}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TranslationResult;
