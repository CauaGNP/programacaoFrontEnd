"use client";

import Link from "next/link";
import { useState } from "react";

export default function ConvertMoney(){
    const [numTemp, setNumTemp] = useState([0, 0]);
    
    function convertCelsiusForFahrenheit(e){
        const copyTemp = [...numTemp];
        const convertionForFahrenheit = (parseFloat(e.target.value) * 1.8) + 32;
        if(e.target.value === ""){
            copyTemp[0] = 0;
            setNumTemp(copyTemp)
            return;
        }
        copyTemp[0]= convertionForFahrenheit.toFixed(2);
        setNumTemp(copyTemp);
    }

    function convertFahrenheitForCelsius(e){
        const copyTemp = [...numTemp];
        const convertionForCelsius = (parseFloat(e.target.value) - 32) / 1.8;
        if(e.target.value === ""){
            copyTemp[1] = 0;
            setNumTemp(copyTemp);
            return;
        }
        copyTemp[1] = convertionForCelsius.toFixed(2);
        setNumTemp(copyTemp);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full h-[50px] flex justify-center items-center bg-zinc-950 text-white">
                <h1 className="text-[32px]">Converter Graus</h1>
            </header>
            <main className="flex-1">
                <nav className="w-full flex justify-center items-center">
                    <Link href={'../'} className="hover:text-white hover:bg-black hover:opacity-80 transition duration-300 rounded px-[30px] py-[5px] my-[8px]">Voltar</Link>
                </nav>
                {numTemp.map((_, i) => (
                <div key={`convert_${i}`} className="flex flex-col justify-center items-center">
                    {i === 0 ? 
                    <label>Convertor Celsius para Fahrenheit </label> : 
                    <label>Convertor Fahrenheit para Celsius</label>}
                    <input 
                        type="number"
                        onChange={i === 0 ? convertCelsiusForFahrenheit : convertFahrenheitForCelsius}
                        className="w-[200px] border border-black"
                    />
                    <input 
                        disabled={true}
                        value={numTemp[i]}
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