import React from 'react';
import DragonForm from '../../components/DragonForm';

import Dragons from '../../data/dragon';

function DragonAdd({ history }) {
  const text = {
    title: 'Adicionar dragão',
    description: 'Preencha os campos abaixo para adicionar um dragão',
    button: 'Adicionar',
  };
  const handleSubmit = async (data) => {
    const dragon = new Dragons();
    const response = await dragon.post(data);
    console.log('response', response);
    history.push('/');
  };
  return <DragonForm saveDragon={handleSubmit} text={text} />;
}

export default DragonAdd;
