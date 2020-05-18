import React, { useState, useEffect } from 'react';
import DragonForm from '../../components/DragonForm';

import Dragons from '../../data/dragon';
import Header from '../../components/Header';

function DragonEdit({ history, match }) {
  const { id } = match.params;
  const [dragonData, setDragonData] = useState({});

  const text = {
    title: 'Editar dragão',
    description: 'Modifique os campos abaixo e depois clique no botão salvar',
    button: 'Salvar',
  };

  const handleSubmit = async (data) => {
    const dragon = new Dragons();
    const response = await dragon.put(data);
    console.log('response', response);
    history.push('/');
  };

  useEffect(() => {
    const fetchDragon = async () => {
      if (id) {
        const dragon = new Dragons();
        const response = await dragon.get(id);
        setDragonData(response);
      }
    };
    fetchDragon();
  }, [id]);

  return (
    <>
      <Header />
      {dragonData.id ? <DragonForm dragonData={dragonData} saveDragon={handleSubmit} text={text} /> : ''}
    </>
  );
}

export default DragonEdit;
