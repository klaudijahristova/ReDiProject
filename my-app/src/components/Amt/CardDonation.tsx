import { UsersArrayProps } from "../../data/data";

const CardDonation = ({
  image,
  type,
  name,
  address,
  phone,
  from,
  to,
  hours,
  decription,
  id,
  onClickAccepted,
  onClickDelete,
}: UsersArrayProps) => {
  return (
    <div
      key={id}
      className="col-11 col-md-5 col-lg-3 card h-100 p-0 postUsers me-md-4 mb-5 cardUsers"
    >
      <img src={image} alt="" className="img-fluid" />
      <div className="card-body">
        <h3 className="card-title text-center">{type}</h3>
        <p className="card-text">
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>From:</strong> {from} <strong>To:</strong> {to}
        </p>
        <p>
          <strong>Available: </strong>
          {hours} h
        </p>
        <p>
          <strong>Decription: </strong>
          {decription}
        </p>
        <button
          onClick={onClickAccepted ? () => onClickAccepted() : undefined}
          className="custom-bg-color-01 accept-btn border-0 rounded-2 p-1"
        >
          Accept
        </button>
        <button
          onClick={onClickDelete ? () => onClickDelete() : undefined}
          className="custom-bg-color-02 decline-btn border-0 rounded-2 p-1"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CardDonation;
