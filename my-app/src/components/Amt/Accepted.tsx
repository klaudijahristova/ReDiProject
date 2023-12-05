import { useState } from "react";
import { UsersArrayProps } from "../../data/data";
import "./Amt.css"

const Accepted = () => {
  const storedData = localStorage.getItem('acceptedDonations');
  const initialDonations = storedData ? (JSON.parse(storedData) as UsersArrayProps[]) : null;
  const [acceptedDonations, setAcceptedDonations] = useState<UsersArrayProps[] | null>(
    initialDonations
  );
  const handleDelete = (id: string) => {
    if (acceptedDonations) {
      const updatedDonations = acceptedDonations.filter(
        donation => donation.id.toString() !== id
      );
  
      const updatedDonationsWithNewIds = updatedDonations.map((donation, index) => ({
        ...donation,
        id: index,
      })) as UsersArrayProps[];
  
      setAcceptedDonations(updatedDonationsWithNewIds);
      localStorage.setItem('acceptedDonations', JSON.stringify(updatedDonationsWithNewIds));
    }
  };
  
  return (
    <div>
      {acceptedDonations && acceptedDonations.length!==0 ? (
        <div className="container">
          <h1 className="text-center custom-color-01 mt-5">Accepted Donations from our Users</h1>
          <div className="row py-5 justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                {acceptedDonations.map((donation, index) => (
                  <div
                    key={index.toString()}
                    className="col-11 col-md-5 col-lg-3 card h-100 p-0 postUsers me-md-4 mb-4 cardUsers "
                  >
                    <img
                      src={"." + donation.image}
                      alt=""
                      className="img-fluid h-100 w-100"
                    />

                    <div className="card-body">
                      <h3 className="card-title text-center">
                        {donation.type}
                      </h3>
                      <p className="card-text">
                        <strong>Name: </strong>
                        {donation.name}
                      </p>
                      <p>
                        <strong>Address:</strong> {donation.address}
                      </p>
                      <p>
                        <strong>Phone:</strong> {donation.phone}
                      </p>
                      <p>
                        <strong>from:</strong> {donation.from}{" "}
                        <strong>to:</strong> {donation.to}
                      </p>
                      <p>
                        <strong>Available: </strong>
                        {donation.hours} h
                      </p>
                      <p>
                        <strong>Decription: </strong>
                        {donation.decription}
                      </p>
                      <div className="d-grid">
                      <button onClick={() => handleDelete(donation.id.toString())} className="delete-btn border-0 rounded-1 p-1 custom-bg-color-02 ">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center m-5 custom-color-01">There is no accepted Donations</h1>
      )}
    </div>
  );
};

export default Accepted;
