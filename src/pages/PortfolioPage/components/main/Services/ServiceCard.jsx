function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="service-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="service-card-text">
        <h3 className="service-card-title">{props.title}</h3>
        <div className="service-card-body">
          <p className="service-card-descrption">{props.description}</p>
          <p className="service-card-price">${props.price} +</p>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
