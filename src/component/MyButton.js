

function MyButton({tekst,changeTitle}) {
  
  return (
   <button onClick={changeTitle}>{tekst}</button>
  );
}

export default MyButton;