function Text1(){
  return <h1>This is a Title</h1>  
}

function Text2(){
  return <p>This is a paragraph</p>
}

export default function Home() {
  const classroom = 1;

  return (
    <div>
      <Text1 />
      <Text2 />

      <p>This is {classroom}(first) class</p>
    </div>
  );
}
