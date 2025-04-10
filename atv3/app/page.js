"use client";
import styles from "./page.module.css";

import { useState } from "react";
import { Dado } from "@/components/Dado/Dado.jsx";

let indice = 0

export default function Home() {

  const [rounds, setRounds] = useState(1);
  const [counters, setCounters] = useState([[], []]);
  const [current, setCurrent] = useState(0);
  
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);
    
  function verify(value1, value2){
    if(value1[indice] > value2[indice]){
      setDice1(dice1 + 1);
    }else if(value1[indice] < value2[indice]){
      setDice2(dice2 + 1);
    }else{
      setDice1(dice1 + 1);
      setDice2(dice2 + 1);
    }

    console.log(value1[indice]);
    console.log(value2[indice]);

    indice += 1;
  }

  function randomNumber(index) {
    if (rounds === 5) return;

    const random = Math.floor(Math.random() * 6) || 1;

    const copy = [...counters];
    copy[index].push(random);

    setCounters(copy);
    setCurrent(current === counters.length - 1 ? 0 : current + 1);

    if (copy.every((counter) => counter.length === counters[0].length)) {
      setRounds(rounds + 1);
      verify(copy[0], copy[1]);
    }
  }

  return (
    <div className={styles.divPai}>
      <h1 className={styles.titulo}>Rounds: {rounds <= 5 ? rounds : null}</h1>

      <div className={styles.divDado}>
        {counters.map((counter, i) => (
          <div key={`counter-${i}`} className={styles.divKey}>
            <h2>Jogador {i + 1}</h2>
            <Dado valor={counter.slice(-1)[0]} />

            <button
              variant="outline"
              disabled={i !== current || rounds === 5}
              onClick={() => randomNumber(i)}
            >
              Clique aqui
            </button>
          </div>
        ))}
      </div>

      <div>Jogador 1 {dice1} x {dice2} Jogador 2</div>

      {rounds === 6 && (
        <div>
          <h1>Jogo terminado!</h1>
          <h1>  {dice1 > dice2 ? "Jogador 1 ganhou" : "Jogador 2 ganhou"}</h1>

          <button
            onClick={() => {
              setRounds(1);
              setCounters([[], []]);
            }}
          >
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
} 