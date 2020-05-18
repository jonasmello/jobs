import React, { useState } from 'react';

import { FaDragon } from 'react-icons/fa';
import Header from '../Header';

function DragonForm({ saveDragon, dragonData = {}, text = {} }) {
  const [name, setName] = useState(dragonData.name || '');
  const [type, setType] = useState(dragonData.type || '');
  const { id } = dragonData;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, type, id };
    saveDragon(data);
  };

  return (
    <>
      <Header />
      <div className="page dragon-form">
        <div className="container">
          <div className="top-icon">
            <FaDragon />
          </div>
          <h1 className="h1">{text.title}</h1>
          <p className="body-text">{text.description}:</p>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div>
              <input placeholder="Nome" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input placeholder="Tipo" type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div>
              <button className="form-button" type="submit">
                {text.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DragonForm;
