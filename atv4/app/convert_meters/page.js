"use client";
import Link from "next/link";
import { useState } from "react";

export default function convertMeters(){
    const [numConvert, setNumConvert] = useState([0, 0]);

    function convertMetersForInches(e){
        const copyConvert = [...numConvert];
        if(e.target.value === ""){
            copyConvert[0] = 0;
            setNumConvert(copyConvert);
            return;
        }
        copyConvert[0] = parseFloat(e.target.value * 39,3701).toFixed(2);
        setNumConvert(copyConvert);
    }

    function convertInchesForMeters(e){
        const copyConvert = [...numConvert];
        if(e.target.value === ""){
            copyConvert[1] = 0;
            setNumConvert(copyConvert);
            return;
        }
        copyConvert[1] = parseFloat(e.target.value * 0.0254).toFixed(2);
        setNumConvert(copyConvert);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full h-[50px] flex justify-center items-center bg-zinc-950 text-white">
                <h1 className="text-[32px]">Converter Medidas</h1>
            </header>
            <main className="flex-1">
                <nav className="w-full flex justify-center items-center">
                    <Link href={'../'} className="hover:text-white hover:bg-black hover:opacity-80 transition duration-300 rounded px-[30px] py-[5px] my-[8px]">Voltar</Link>
                </nav>
                {numConvert.map((_,i) => (
                <div key={`displayInputConvert-${i}`} className="flex flex-col justify-center items-center">
                    {i === 0 ?
                    <label>Converter Metros para Polegadas</label> :
                    <label>Converter Polegadas para Metros</label>
                    }
                    <input 
                        type="number"
                        min={0}
                        onChange={i === 0 
                            ? convertMetersForInches
                            : convertInchesForMeters}
                        className="w-[200px] border border-black"
                    />
                    <input 
                        type="number"
                        value={numConvert[i]}
                        disabled={true}
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