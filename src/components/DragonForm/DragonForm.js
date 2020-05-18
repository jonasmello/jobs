import React, { useState } from 'react';

import { FaDragon } from 'react-icons/fa';
import Header from '../Header';
import FormField from '../FormField/FormField';

function DragonForm({ saveDragon, dragonData = {}, text = {} }) {
  const [name, setName] = useState(dragonData.name || '');
  const [type, setType] = useState(dragonData.type || '');
  const [formFeedback, setFormFeedback] = useState(text.description);
  const { id } = dragonData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || type === '') {
      setFormFeedback('Por favor, preencha todos os campos');
      return false;
    }
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
          <p className="body-text">{formFeedback}:</p>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div>
              <FormField placeholder="Nome" type="text" name="name" value={name} setState={setName} />
            </div>
            <div>
              <FormField placeholder="Tipo" type="text" name="type" value={type} setState={setType} />
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
