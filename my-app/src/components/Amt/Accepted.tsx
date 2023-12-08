import { useState } from "react";
import { UsersArrayProps } from "../../data/data";
import "./Amt.css"
import CardAccepted from "./CardAccepted";

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
                {acceptedDonations.map((donation) => (
                  <CardAccepted id={donation.id} image={donation.image} type={donation.type} name={donation.name} address={donation.address} phone={donation.phone} from={donation.from} to={donation.to} hours={donation.hours} decription={donation.decription} onClickDelete={()=>handleDelete(donation.id.toString())}/>
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
