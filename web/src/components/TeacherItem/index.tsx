import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/29207041?s=60&v=4" alt="Patrick Moreira"/>
        <div>
          <strong>Patrick Moreira</strong>
          <span>Computação</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de desenvolvimento Mobile e Web.
        <br /><br />
        Especialista em metodologias de otimização e automatização de processos.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>

  );
}

export default TeacherItem;