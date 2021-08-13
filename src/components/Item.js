const Item = ({ img, title, content }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Item;
