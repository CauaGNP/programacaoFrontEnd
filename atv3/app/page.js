"use client";
import styles from "./page.module.css";

import { useState } from "react";
import { Dado } from "@/components/Dado/Dado.jsx";

export default function Home() {

  const [rounds, setRounds] = useState(1);
  const [counters, setCounters] = useState([[], []]);
  const [current, setCurrent] = useState(0);

  const points = counters
    .map((counter) => counter.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .map((points, i) => ({
      points,
      player: i,
    }));

  function randomNumber(index) {
    if (rounds === 5) return;

    const random = Math.floor(Math.random() * 6) || 1;

    const copy = [...counters];
    copy[index].push(random);

    setCounters(copy);
    setCurrent(current === counters.length - 1 ? 0 : current + 1);

    if (copy.every((counter) => counter.length === counters[0].length)) {
      setRounds(rounds + 1);
    }
  }

  return (
    <div className={styles.divPai}>
      <p className={styles.paragrafo}>Rounds: {rounds}</p>

      <div className={styles.divDado}>
        {counters.map((counter, i) => (
          <div key={`counter-${i}`} className={styles.divKey}>
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

      {rounds === 5 && (
        <div>
          <p>Jogo terminado!</p>

          <p>
            Melhor pontuação: {points[0].points} por Jogador {points[0].player + 1}
          </p>

          <div>
            {points.map((point, i) => (
              <p key={`point-${i}`}>
                {point.points} por Jogador {point.player + 1}
              </p>
            ))}
          </div>

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