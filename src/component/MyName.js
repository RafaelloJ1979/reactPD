
// function Myname({name,surname}) {
  
//   return (
//     <h1 className="imie">
//       {name}
//       {surname}
      
//       {/* <div>{surname}</div> */}

//     </h1>
//   );
// }

// export default Myname;

function Myname(probs) {
  
  return (
    <h1 className="imie">
      
     <div>{probs.name}</div>
     <div>{probs.surname}</div>

      {/* <div>{surname}</div> */}

    </h1>
  );
}

export default Myname;