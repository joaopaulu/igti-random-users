import hero from 'core/assets/images/main.svg';
import ButtonIcon from 'core/components/Buttonicon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  return (
    <div className="row home-content">
      <div className="col-6 home-text">
        <h1 className="text-title">
          API <br /> Random User React
        </h1>
        <p className="text-subtitle">
          Consulta aleatória de usuários de código aberto gratuita.
          <a href="https://randomuser.me">https://randomuser.me/</a>
        </p>
        <Link to="/clients">
          <ButtonIcon text="inicie agora a sua busca" />
        </Link>
      </div>
      <div className="col-6 main-image">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
