import React, { useEffect, useState } from 'react';
import Dragons from '../../data/dragon';
import Header from '../../components/Header';

import { FaDragon } from 'react-icons/fa';

function DragonDetail({ match }) {
  const { id } = match.params;
  const [dragon, setDragon] = useState({});
  const [loading, setLoading] = useState(true);
  const parseDate = (rawDate) => {
    const date = new Date(rawDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month < 10 ? '0' + month : month}/${year}`;
  };
  useEffect(() => {
    const fetchResult = async () => {
      const result = await new Dragons().get(id);
      setDragon(result);
      setLoading(false);
    };
    fetchResult();
  }, [id]);
  return (
    <>
      <Header />

      <div className="page dragon-detail">
        <div className="container">
          <div className="top-icon">
            <FaDragon />
          </div>
          {loading ? (
            <h1>Carregando...</h1>
          ) : (
            <>
              <h1 className="h1">{dragon.name}</h1>
              <div>Tipo: {dragon.type}</div>
              <div>Criado em: {parseDate(dragon.createdAt)}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DragonDetail;
