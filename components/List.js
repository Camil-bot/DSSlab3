import CardComponent from "./CardComponent";

export default function List(props) {
  return (
    <>
      {props.list.map((item, key) => (
        <div key={key}>
          <CardComponent item={item} onDelete={props.onDelete} />
        </div>
      ))}
    </>
  );
}
