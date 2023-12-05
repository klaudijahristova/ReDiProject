import { users } from "../../data/data";
import { UsersArrayProps } from "../../data/data";
import { useEffect, useState } from "react";
import "./Amt.css";

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
  const handleDelete = (id: string) => {
    const filteredUsers = storedUsers.filter(
      (user) => user.id.toString() !== id
    );
    updateStoredUsers(filteredUsers);
  };

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
              ? filteredArray.map((user, index) => (
                  <div
                    key={index.toString()}
                    className="col-11 col-md-5 col-lg-3 card h-100 p-0 postUsers me-md-4 mb-5 cardUsers"
                  >
                    <img src={user.image} alt="" className="img-fluid" />
                    <div className="card-body">
                      <h3 className="card-title text-center">{user.type}</h3>
                      <p className="card-text">
                        <strong>Name: </strong>
                        {user.name}
                      </p>
                      <p>
                        <strong>Address:</strong> {user.address}
                      </p>
                      <p>
                        <strong>Phone:</strong> {user.phone}
                      </p>
                      <p>
                        <strong>From:</strong> {user.from} <strong>To:</strong>{" "}
                        {user.to}
                      </p>
                      <p>
                        <strong>Available: </strong>
                        {user.hours} h
                      </p>
                      <p>
                        <strong>Decription: </strong>
                        {user.decription}
                      </p>
                      <div className="d-flex w-100">
                        <button
                          onClick={() => handleAccepted(user.id.toString())}
                          className="custom-bg-color-01 accept-btn border-0 rounded-2  p-1"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDelete(user.id.toString())}
                          className="custom-bg-color-02 decline-btn border-0 rounded-2 p-1"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : storedUsers.map((user, index) => (
                  <div
                    key={index.toString()}
                    className="col-11 col-md-5 col-lg-3 card h-100 p-0 postUsers me-md-4 mb-5 cardUsers"
                  >
                    <img src={user.image} alt="" className="img-fluid" />
                    <div className="card-body">
                      <h3 className="card-title text-center">{user.type}</h3>
                      <p className="card-text">
                        <strong>Name: </strong>
                        {user.name}
                      </p>
                      <p>
                        <strong>Address:</strong> {user.address}
                      </p>
                      <p>
                        <strong>Phone:</strong> {user.phone}
                      </p>
                      <p>
                        <strong>From:</strong> {user.from} <strong>To:</strong>{" "}
                        {user.to}
                      </p>
                      <p>
                        <strong>Available: </strong>
                        {user.hours} h
                      </p>
                      <p>
                        <strong>Decription: </strong>
                        {user.decription}
                      </p>
                      <button
                        onClick={() => handleAccepted(user.id.toString())}
                        className="custom-bg-color-01 accept-btn border-0 rounded-2 p-1"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDelete(user.id.toString())}
                        className="custom-bg-color-02 decline-btn border-0 rounded-2 p-1"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmtHome;
