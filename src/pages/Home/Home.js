import React, { useEffect, useState } from 'react';
import { FaDragon, FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';

import Header from '../../components/Header';

import Dragons from '../../data/dragon';

const dragons = new Dragons();

function Home({ history }) {
  const [dragonList, setDragonList] = useState([]);
  const [preventDouble, setPreventDouble] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dragons.getAll();
      setDragonList(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setPreventDouble(true);
    const { data } = await dragons.delete(id);
    setPreventDouble(false);
    if (data.id) {
      setDragonList(dragonList.filter((dragon) => dragon.id !== data.id));
    }
  };

  return (
    <>
      <Header />
      <div className="page home">
        <div className="container">
          <div className="top-icon">
            <FaDragon />
          </div>
          <h1>Dragões</h1>
          <div className="dragon-list">
            {dragonList.length
              ? dragonList.map((dragon) => (
                  <div className="dragon-item" key={dragon.id}>
                    <a className="dragon-name" href={`/dragon/${dragon.id}`}>
                      {dragon.name}
                    </a>
                    <div className="dragon-actions">
                      <button
                        title="Editar Dragão"
                        className="action-button"
                        disabled={preventDouble ? 'disabled' : ''}
                        onClick={() => history.push(`dragon/edit/${dragon.id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                      title="Remover Dragão"
                        className="action-button"
                        disabled={preventDouble ? 'disabled' : ''}
                        onClick={() => handleDelete(dragon.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))
              : ''}
          </div>
          <button className="action-button big" onClick={() => history.push('dragon/add')}>
            Adicionar dragão
            <FaPlusCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
