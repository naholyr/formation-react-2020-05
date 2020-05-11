import React from 'react';

const Sample = () => {
  const items = [
    { id: 1, name: 'Un' },
    { id: 2, name: 'Deux' },
    { id: 3, name: 'Trois' },
    { id: 4, name: 'Quatre' },
  ];

  return (
    <>
      <hr />
      <h1>Exemples JSX</h1>
      <h2>Boucle</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            #{item.id} <strong>{item.name}</strong>
          </li>
        ))}
      </ul>
      <h2>Conditions</h2>
      {false || <p>Non affiché</p>}
      {true || <p>Affiché</p>}
      {items ? <p>Affiché</p> : <p>Non affiché</p>}
      {0 && <p>Non affiché</p>} (attention, 0 sera rendu)
      <hr />
    </>
  );
};

export default Sample;
