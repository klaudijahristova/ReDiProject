import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import "./Users.css";
import { Link } from "react-router-dom";
import { users } from "../../data/data";
import "../../data/data"
import { UsersArrayProps } from "../../data/data";

function MyProfil() {
  const id = JSON.parse(localStorage.getItem("id") || "null");
  const name = localStorage.getItem("selectedUserName") || "";
  const usersLS=JSON.parse(localStorage.getItem("usersLS") || "null");
 
  if (usersLS===null){
   const usersLS:UsersArrayProps[]=[...users];
   localStorage.setItem("usersLS", JSON.stringify(usersLS))
  }

  console.log(usersLS)
const filterUsersLS=usersLS.filter((el:UsersArrayProps )=>el.name.includes(name))
const numberOfDonation=filterUsersLS.length;

  return (
    <div className="container rowProfil">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center ">
            <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <img
                src={`../images/person${id}.jpg`}
                alt=""
                className="rounded-circle profilImg"
              />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
              <h1 className="mt-5 custom-color-01">{name}</h1>
              <div className="my-3 text-decoration-none">
                <Link to={"https://www.facebook.com"}>  <FacebookIcon
                  className="custom-color-01"
                  sx={{ fontSize: 50 }}
                /></Link>
              <Link to={"https://twitter.com/"}><TwitterIcon
                  className="custom-color-01"
                  sx={{ fontSize: 50 }}
                /></Link>
               <Link to={"https://www.linkedin.com/"}>
               <LinkedInIcon
                  className="custom-color-01"
                  sx={{ fontSize: 50 }}
                /></Link>
              <Link to={"https://www.instagram.com/"}> <InstagramIcon
                  className="custom-color-01"
                  sx={{ fontSize: 50 }}
                /></Link>
              </div>
              <div className="custom-color-01 fs-3">
                Rating: <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className="fs-3 custom-color-01 my-3">Donations: {numberOfDonation} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfil;
