import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import { UsersArrayProps } from "../../data/data";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";

interface NavbarProps {
  setFilteredArrayProp: React.Dispatch<React.SetStateAction<UsersArrayProps[]>>;
}
interface ExtendedHistory extends History {
  goBack: () => void;
}

const Navbar = ({ setFilteredArrayProp }: NavbarProps) => {
  const initialCards = JSON.parse(localStorage.getItem("usersLS") || "null");
  const [cards, setCards] = useState(initialCards);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const storedUserName = localStorage.getItem("selectedUserName");
  const userName = storedUserName || "";
  const [inputValue, setInputValue] = useState("");
  const [filteredArray, setFilteredArrayState] =
    useState<UsersArrayProps[]>(cards);

  const acceptedDonationen = JSON.parse(
    localStorage.getItem("acceptedDonations") || "null"
  );
  const numberOfAcceptedDon = acceptedDonationen
    ? acceptedDonationen.length
    : 0;

  const matchId = location.pathname.match(/^\/(\d+)$/);
  const id = matchId ? matchId[1] : "";

  const handleGoBack = () => {
    window.history.back();
  };

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = cards.filter((card: string) => {
      if (typeof card === "object") {
        return Object.values(card).some((prop) => {
          if (typeof prop === "string") {
            return prop.toLowerCase().includes(value.toLowerCase());
          }
          return false;
        });
      }
      return false;
    });

    setFilteredArrayState(filtered);
    setFilteredArrayProp(filtered);
  };

  useEffect(() => {
    setFilteredArrayState(cards);
    setFilteredArrayProp(cards);
  }, [cards, setFilteredArrayProp]);

  const amtPath =
    location.pathname === "/amt" ||
    location.pathname === "/amt/post" ||
    location.pathname === "/amt/accepted" ||
    location.pathname === "/amt/ourposts";

  return (
    <nav className="navbar navbar-expand-lg navbar1 position-relative">
      <div className="d-flex align-items-center">
        <NavLink
          to={"/"}
          className="text-decoration-none navLink logoWrapper navbar-brand"
        >
          <div className=" logoWrapper">
            <img src="./images/3.png" alt="" className="img3" />
            <img src="./images/2.png" alt="" className="img2" />
            <img src="./images/1.png" alt="" className="img1" />
            <img src="./images/smile.png" alt="" className="smile" />
          </div>
        </NavLink>
        {location.pathname === "/amt" && (
          <input
            type="text"
            onChange={handleInputValue}
            className="search"
            placeholder="Search..."
          />
        )}
        {location.pathname.match(/^\/\d+$/) && (
          <span className="userName custom-color-01 fw-bold">
            Hello {userName}!
          </span>
        )}
      </div>
      {!isLandingPage && (
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      )}
      <div
        className={`collapse navbar-collapse ${
          isLandingPage
            ? ""
            : "justify-content-lg-end justify-content-sm-end navColapse"
        }`}
        id="navbarText"
      >
        <ul className="navbar-nav dropDownMenu mt-md-3">
          {amtPath && (
            <>
              {" "}
              <li className="nav-item">
                <NavLink to={"/amt"} className="nav-link navLink navLink ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/amt/accepted"} className="nav-link navLink">
                  <Badge
                    size="small"
                    count={numberOfAcceptedDon}
                    className="custom-color-01"
                  >
                    Accepted
                  </Badge>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/amt/post"} className="nav-link navLink">
                  Create a Post
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to={"/amt/ourposts"} className="nav-link navLink">
                  Our Posts
                </NavLink>
              </li>
            </>
          )}

          {location.pathname.match(/^\/\d+$/) && (
            <ul className="navbar-nav dropDownMenu mt-md-3">
              <li className="nav-item">
                <NavLink to={"/donation"} className="nav-link navLink">
                  Make a Donation
                </NavLink>
              </li>
              <li className="nav-item me-lg-3 ms-2 ms-lg-0 d-flex justify-content-center">
                <NavLink to={"/myprofil"} className="nav-link navLink">
                  <Box>
                    <Avatar
                      alt="User Avatar"
                      src={`../images/person${id}.jpg`}
                    />
                  </Box>
                </NavLink>
              </li>
            </ul>
          )}
          {location.pathname === "/myprofil" && (
            <>
              {" "}
              <li className="d-flex justify-content-center">
                <button
                  onClick={handleGoBack}
                  className="me-3 my-5 py-2 px-5 goBack border-0 rounded-2"
                >
                  BACK
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
