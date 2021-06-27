function Myname(props) {
  return (
    <h1 className="imie">

      <div>{props.name}</div>
      <div>{props.surname}</div>
    </h1>
  );
}
export default Myname;