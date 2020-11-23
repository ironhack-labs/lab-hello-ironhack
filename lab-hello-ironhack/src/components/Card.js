export default function Card(props) {
  return (
    <div className="card" style={{ width: "10rem" }}>
      <img
        src={`/images/icon${props.indx}.png`}
        className="card-img-top px-2"
        style={{ width: "7rem" }}
        alt="icon-section"
      />
      <div className="card-body">
        <h5 className="card-title font-weight-bolder">{props.title}</h5>
        <p className="card-text">{props.content}</p>
      </div>
    </div>
  );
}
