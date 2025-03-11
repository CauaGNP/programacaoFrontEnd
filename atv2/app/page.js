"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Dado } from "@/components/Dado";

export default function Home() {

  function randowNumber(){
    setCount(Math.floor(Math.random() * 6) + 1);
  }

  const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={ randowNumber } className={styles.button}>
          Clique aqui!! 
        </button>

        <Dado valor={ count } className={styles.dado}/>
    </div>
  );
}
