import Link from "next/link";

export default function Sobre(){
    return (
        <div>
            <header className="w-full h-[50px] flex justify-center items-center bg-zinc-950 text-white">
                <h1 className="text-[32px]">Sobre</h1>
            </header>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-[24px]">
                <nav className="w-full flex justify-center items-center">
                    <Link href={'../'} className="hover:text-white hover:bg-black hover:opacity-80 transition duration-300 rounded px-[30px] py-[5px] my-[8px]">Voltar</Link>
                </nav>
                <div>
                    <section>
                        <h1 className="text-[32px] my-[8px]">Quem sou eu?</h1>
                        <p className="text-[16px]">Me chamo Cauã Gabriel, tenho atualmente(16/04/2025) 18 anos, e estou no terceiro período no curso Sistemas para Internet na <a target="_blank" href="https://portal.unicap.br/">Universidade Católica de Pernambuco(UNICAP)</a>.</p>
  
                        <h2 className="text-[24px] my-[16px]">Minha Jornada</h2>
                        <p className="text-[16px]">Iniciei meus estudos na programação em 2023, inicialmente como hobby. Porém, ao me aprofundar nos estudos, descobri que o desenvolvimento é a minha verdadeira paixão. Desde então, tenho me dedicado ao aprendizado de front-end e back-end, além de aprimorar minhas habilidades em design para criar soluções cada vez mais completas e interativas.</p>

                        <h2 className="text-[24px] my-[16px]">Stacks</h2>
                            <ul className="list-disc ml-[16px]">
                                <li>HTML5 e CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                    </section>
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full h-[50px] bg-zinc-950 text-white">
                <h1>Programação Front-End 2025.1</h1>
            </footer>
        </div>
    )
}