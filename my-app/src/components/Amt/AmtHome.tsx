import { users } from "../../data/data";
import { UsersArrayProps } from "../../data/data";
import { useEffect, useState } from "react";
import "./Amt.css";
import CardDonation from "./CardDonation";

const AmtHome = ({
  filteredArray,
  setFilteredArray,
}: {
  filteredArray: UsersArrayProps[];
  setFilteredArray: Function;
}) => {
  const [storedUsers, setStoredUsers] = useState<UsersArrayProps[]>([]);

  useEffect(() => {
    const retrievedUsersLS = JSON.parse(
      localStorage.getItem("usersLS") || "null"
    ) as UsersArrayProps[] | null;

    if (!retrievedUsersLS) {
      const defaultUsers: UsersArrayProps[] = [...users];
      localStorage.setItem("usersLS", JSON.stringify(defaultUsers));
      setStoredUsers(defaultUsers);
    } else {
      setStoredUsers(retrievedUsersLS);
    }
    setFilteredArray(storedUsers);
  }, []);

  // .............Delete................................................. 

  const handleDelete = (id: string) => {
    const filteredUsers = storedUsers.filter(
      (user) => user.id.toString() !== id
    );
    updateStoredUsers(filteredUsers);
  };

//................ Accepted..................................................

  const handleAccepted = (id: string) => {
    const acceptedDonation = storedUsers.find(
      (user) => user.id.toString() === id
    );

    if (acceptedDonation) {
      const acceptedDonations = JSON.parse(
        localStorage.getItem("acceptedDonations") || "[]"
      ) as UsersArrayProps[];

      const index = acceptedDonations.length.toString();
      const updatedAcceptedDonation = { ...acceptedDonation, id: index };

      localStorage.setItem(
        "acceptedDonations",
        JSON.stringify([...acceptedDonations, updatedAcceptedDonation])
      );

      const filteredUsers = storedUsers.filter(
        (user) => user.id.toString() !== id
      );
      updateStoredUsers(filteredUsers);
    }
  };

  // ...............Update................................................

  const updateStoredUsers = (updatedUsers: UsersArrayProps[]) => {
    setStoredUsers(updatedUsers);

    const updatedUsersWithIDs = updatedUsers.map((user, index) => ({
      ...user,
      id: index.toString(),
    }));

    localStorage.setItem("usersLS", JSON.stringify(updatedUsersWithIDs));
    setFilteredArray(updatedUsers);
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center custom-color-01">Donations from our Users</h1>
      <div className="row py-5 justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center">
            {filteredArray && filteredArray.length !== 0
              ? filteredArray.map((user) => (
                <CardDonation
                key={user.id}
                image={user.image} 
                type={user.type}
                name={user.name}
                address={user.address}
                phone={user.phone}
                from={user.from}
                to={user.to}
                hours={user.hours}
                decription={user.decription}
                id={user.id}
                onClickAccepted={() => handleAccepted(user.id.toString())}
                onClickDelete={() => handleDelete(user.id.toString())}
              /> 
                ))
              : storedUsers.map((user) => (
                <CardDonation
                key={user.id}
                image={user.image} 
                type={user.type}
                name={user.name}
                address={user.address}
                phone={user.phone}
                from={user.from}
                to={user.to}
                hours={user.hours}
                decription={user.decription}
                id={user.id}
                onClickAccepted={() => handleAccepted(user.id.toString())}
                onClickDelete={() => handleDelete(user.id.toString())}
              />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmtHome;
