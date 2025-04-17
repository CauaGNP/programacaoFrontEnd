"use client";

import Link from "next/link";
import { useState } from "react";

export default function ConvertMoney(){
    const [numConvert, setNumConvert] = useState([0, 0]);
 
    function convertDolarForReal(e){
        const copyConvert = [...numConvert];
        const dolarValue = 5.87;
        if(e.target.value === ""){
            copyConvert[0] = 0;
            setNumConvert(copyConvert)
            return;
        }
        copyConvert[0] = parseFloat((e.target.value / dolarValue)).toFixed(2);
        setNumConvert(copyConvert);
    }

    function convertRealForDolar(e){
        const copyConvert = [...numConvert];
        const dolarValue = 5.87;
        if(e.target.value === ""){
            copyConvert[1] = 0;
            setNumDolar(copyConvert)
            return;
        }
        copyConvert[1] = parseFloat((e.target.value * dolarValue)).toFixed(2);
        setNumConvert(copyConvert);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full h-[50px] flex justify-center items-center bg-zinc-950 text-white">
                <h1 className="text-[32px]">Converter Dinheiro</h1>
            </header>
            <main className="flex-1">
            <nav className="w-full flex justify-center items-center">
                    <Link href={'../'} className="hover:text-white hover:bg-black hover:opacity-80 transition duration-300 rounded px-[30px] py-[5px] my-[8px]">Voltar</Link>
                </nav>
                {numConvert.map((_,i) => (
                    <div key={`displayInputConvert-${i}`} className="flex flex-col justify-center items-center">
                        {i === 0 ? 
                        <label >Converter Dolar para Real:</label> :
                        <label>Converter Real para Dolar:</label>
                        }
                        <input 
                            type="number"
                            min={0}
                            onChange={i === 0 ? convertDolarForReal : convertRealForDolar}
                            className="w-[200px] border border-black"
                        />
                        <input 
                            disabled={true}
                            value={numConvert[i]}
                            className="text-center"
                        />
                    </div>
                ))}
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full h-[50px] bg-zinc-950 text-white">
                <h1>Programação Front-End 2025.1</h1>
            </footer>
        </div>
    )
}