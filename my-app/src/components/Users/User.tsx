import { useEffect, useState } from "react";
import { urgents } from "../../data/Urgent";
import { UrgentsProps } from "../../data/Urgent";
import '../Amt/Amt.css'
import { Link, useParams } from "react-router-dom";
import "./Users.css";


const User=()=>{
    const [urgentPosts, setUrgentPosts] = useState<UrgentsProps[]>([]);
    const userIdObj=useParams()
    const id=userIdObj.userId
    localStorage.setItem("id", JSON.stringify(id));

    useEffect(() => {
      const urgentsPostsLS = JSON.parse(localStorage.getItem("urgentsPostsLS") || "[]");
  
      if (urgentsPostsLS.length === 0) {
        localStorage.setItem("urgentsPostsLS", JSON.stringify(urgents));
        setUrgentPosts(urgents);
      } else {
        setUrgentPosts(urgentsPostsLS);
      }
    }, []);
  
  
    return (
      <div className="container">
        <h1 className="text-center custom-color-01 my-5">Urgent Needs!</h1>
        <div className="row pb-5 justify-content-center">
          <div className="col-12">
            <div className="row justify-content-center">
              {urgentPosts.map((post) => (
                <div
                  key={post.id} 
                  className="col-11 col-md-5 col-lg-3 card h-100 p-0 card border-dark me-md-4 mb-5 p-0 card border-dark urgents border-0"
                >
                  <div className="card-header">{post.header}</div>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <div className="d-grid">
                      <Link to={"/donation"} className="d-grid text-decoration-none"> <button className="delete-btn border-0 rounded-1 custom-bg-color-02 p-1">Donate</button></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
export default User