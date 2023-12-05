import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LanfingPage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface UsersProps {
  id: number;
  name: string;
}

const LandingPage = () => {
  const [allUsers, setAllUsers] = useState<UsersProps[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedUserName, setSelectedUserName] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: UsersProps[]) => {
        setAllUsers(data);
      });
  }, []);
  useEffect(() => {
    if (selectedUserName) {
      localStorage.setItem("selectedUserName", selectedUserName);
    }
  }, [selectedUserName]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userName = e.target.value;
    setSelectedUserName(userName);
    const selectedUser = allUsers.find((user) => user.name === userName);
    if (selectedUser) {
      setSelectedUserId(selectedUser.id);
      window.location.href = `/${selectedUser.id}`;
    }
  };

  return (
    <>
      <h1 className="text-center my-5 custom-color-01 titleLP mx-5">
        Let's make a Smile
      </h1>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-5 p-0 me-lg-4 mb-2 mb-lg-0 position-relative custom-color-02">
                <h4 className="position-absolute organisation text-uppercase">Organisation</h4>
                <Link to={"/amt"}>
                  <img src="./images/5.jpg" className="w-100 h-100 img5" alt="" />
                </Link>
              </div>
              <div className="col-10 col-lg-5 p-0  mt-2 mt-lg-0 position-relative custom-color-02">
                <h4 className="position-absolute users text-uppercase">User</h4>
                <img src="./images/4.jpg" alt="" className="w-100 h-100 img4" />
                <select
                  name="users"
                  id="users"
                  className="position-absolute custom-color-01 choose"
                  value={selectedUserName}
                  onChange={handleSelectChange}
                >
                  <option value="">Choose</option>
                  {allUsers.map((user) => (
                    <option key={user.id} value={user.name}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center custom-color-01 text-uppercase mx-5 mb-5">you can make a difference!</h2>
    </>
  );
};

export default LandingPage;
