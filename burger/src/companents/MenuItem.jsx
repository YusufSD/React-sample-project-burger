function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div
        className="imageDiv"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "0px" }}>{content}</h6>
      <p>
        <i style={{ color: "red", fontWeight: "bold" }}>{price} TL</i>
      </p>
    </div>
  );
}

export default MenuItem;
