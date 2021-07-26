import React from 'react';

const Extra: React.FC = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData(data.message));
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? 'loading....' : data}</p>
      </header>
    </div>
  );
};

export default Extra;
