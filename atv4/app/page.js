import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="w-full h-[50px] flex justify-center items-center bg-zinc-950 text-white">
        <nav className="w-full">
          <ul className="flex gap-[16px] justify-center items-center">
            <li className="hover:bg-white hover:text-black hover:opacity-80 transition duration-300 rounded"><Link href={'/about/'}>Sobre</Link></li>
            <li className="hover:bg-white hover:text-black hover:opacity-80 transition duration-300 rounded"><Link href={'/convert_money/'}>Conversor Dolar</Link></li>
            <li className="hover:bg-white hover:text-black hover:opacity-80 transition duration-300 rounded"><Link href={'/convert_temp/'}>Conversor Temperatura</Link></li>
            <li className="hover:bg-white hover:text-black hover:opacity-80 transition duration-300 rounded"><Link href={'/convert_meters/'}>Conversor Metros</Link></li>  
          </ul>      
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-[24px]">
        <div>
          <h1 className="text-[32px] my-[8px]">Qual a finalidade desse projeto?</h1>
          <p className="text-[16px]">Testar os nossos conhecimentos em NextJS. Para isso temos 4 links para 4 páginas diferentes.</p>

          <section>
            <h2 className="text-[24px] my-[16px]">1°Página-Sobre</h2>
            <p className="text-[16px]">Página introdutória, ela irá contar um pouco sobre mim e minha trajetória.</p>        
          </section>

          <section>
            <h2 className="text-[24px] my-[16px]">2°Página-Conversor Dolar</h2>
            <p className="text-[16px]">Essa página foi feita para fazer a conversão so dólar para o real e vice-versa, levando a consideração a cotação do dia 14/04/2025.</p>
          </section>

          <section>
            <h2 className="text-[24px] my-[16px]">3°Página-Conversor Temperatura</h2>
            <p className="text-[16px]">Essa página tem a finalidade de converter C°(graus celsius) para F°(graus fahrenheit) e vice-versa</p>
          </section>

          <section>
            <h2 className="text-[24px] my-[16px]">4°Página-Conversor Metros</h2>
            <p className="text-[16px]">E por fim a última página também tem a finalidade de converter metros para polegadas e vice-versa.</p>
          </section>
        </div>      

        <div>
          <h1 className="text-[32px]">Código de conversão</h1>
          
          <section>
            <h2 className="text-[24px] my-[16px]">1° State</h2>
            <Image src="/assets/state.png" alt="State Image" width={600} height={100} className="mb-[8px]"/>
            <p className="text-[16px]">Todos os códigos de conversão foram feito através de um State, contendo um array com 2 index.</p>
          </section>

          <section>
            <h2 className="text-[24px] my-[16px]">2° Conversão</h2>
            <Image src="/assets/convert.png" alt="Convert Image" width={600} height={100} className="mb-[8px]"/>
            <p className="text-[16px]">Os códigos de conversão foram feitos recebendo um parâmetro do onChange(), criando cópias do state original para fazer as atualizações, condicional para caso o valor seja inexistente e por fim a execução do cálculo para finalizar a conversão(Existem duas funções para cada tipo de converção).</p>
          </section>

          <section>
            <h2 className="text-[24px] my-[16px]">3° Exibição</h2>
            <Image src="/assets/display.png" alt="Convert Image" width={600} height={100} className="mb-[8px]"/>
            <p className="text-[16px]">Para exibir os inputs foi utilizado a função .map() do javaScrint e propiedade "key" do react, através dela é possível diferenciar os inputs e criar os inputs de acordo com a quantidade de index do array presente no useState(), também foi utilizado operadores ternários para exibição dos label e definir qual função será chamada no onChange()</p>
          </section>

        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full h-[50px] bg-zinc-950 text-white">
        <h1>Programação Front-End 2025.1</h1>
      </footer>
    </div>
  );
}
