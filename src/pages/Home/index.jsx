import React, { useState } from 'react';
import { Card } from '../../componentes/Card';
import './styles.css';

export function Home() {
  const [name, setName] = useState(''); // Estado para armazenar o valor do nome digitado no input
  const [cardList, setCardList] = useState([]); // Estado para armazenar a lista de cartões

  const handleNameChange = (event) => {
    setName(event.target.value); // Atualiza o estado 'name' com o valor do nome digitado no input
  };

  const handleAddCard = () => {
    const newCard = {
      name,
      time: getCurrentTime(), // Adiciona o horário atual obtido através da função getCurrentTime()
    };

    setCardList([...cardList, newCard]); // Adiciona o novo cartão à lista de cartões
    setName(''); // Limpa o valor do nome no estado 'name'
  };

  const getCurrentTime = () => {
    const date = new Date(); // Cria um objeto Date com a data e horário atuais
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; // Formata o horário como "hh:mm:ss"
    return time; // Retorna o horário formatado
  };

  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      <input type="text" placeholder="Digite o nome..." value={name} onChange={handleNameChange} />
      <button onClick={ name ? handleAddCard:null }>Adicionar</button>

      {cardList.map((card, index) => (
        <Card key={index} name={card.name} time={card.time} />
      ))}
    </div>
  );
}
