import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useRef, useState } from "react";
import "./Donation.css";

function Donation() {

  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: "",
    type: "",
    address: "",
    phone: "",
    from: "",
    to: "",
    hours: "-",
    decription: "",
    image:""
  })

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {

    const existingData = JSON.parse(localStorage.getItem("usersLS") || "[]");
    const updatedData = [...existingData, formData];
    localStorage.setItem("usersLS", JSON.stringify(updatedData));

    setFormData({
      id: Date.now().toString(),
      name: "",
      type: "",
      address: "",
      phone: "",
      from: "",
      to: "",
      hours: "-",
      decription: "",
      image:"",
    })
    window.history.back();
  };

  const handleCancel = () => {
    window.history.back();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({...formData, image:imageUrl});
    }
  };

  
  return (
    <div className="container">
      <h2 className="text-center my-3 custom-color-01">Make a Donation</h2>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-11 col-md-5 p-0 me-md-2 custom-color-01">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-100 inputDonation rounded-1"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="col-11 col-md-5 p-0 custom-color-01">
              <label htmlFor="adress">Adress</label>
              <input
                type="text"
                id="adress"
                className="w-100 inputDonation rounded-1"
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div className="col-11 col-md-5 p-0 me-md-2 custom-color-01">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                className="w-100 inputDonation rounded-1"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="col-11 col-md-5 p-0">
              <select
                className="w-100 mt-4 custom-color-01 rounded-1"
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="">Choose</option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Devices">Devices</option>
              </select>
            </div>
            <div className="col-11 col-md-5 p-0 me-md-2 mb-1 custom-color-01">
              <label htmlFor="fromDate">From:</label>
              <input
                type="date"
                id="fromDate"
                className="w-100 inputDonation rounded-1"
                onChange={(e) => setFormData({...formData, from: e.target.value})}
              />
            </div>
            <div className="col-11 col-md-5 p-0 mb-1 custom-color-01">
              <label htmlFor="toDate">To:</label>
              <input
                type="date"
                id="toDate"
                className="w-100 inputDonation rounded-1"
                onChange={(e) => setFormData({...formData, to: e.target.value})}
              />
            </div>
            <div className="col-11 col-md-5 p-0 me-md-2 mb-1 custom-color-01">
              <label htmlFor="timeFrom">From</label>
              <input
                type="time"
                id="timeFrom"
                className="w-100 inputDonation rounded-1"
                onChange={(e) =>setFormData({...formData, hours: e.target.value+'-'+formData.hours.split("-")[1]})}
              />
            </div>
            <div className="col-11 col-md-5 p-0 mb-1 custom-color-01">
              <label htmlFor="timeTo">To</label>
              <input
                type="time"
                id="timeTo"
                className="w-100 inputDonation rounded-1"
                onChange={(e) => setFormData({...formData, hours: formData.hours.split("-")[0]+'-'+e.target.value})}
              />
            </div>
            <div className="col-10 p-0 mb-1 custom-color-01">
              <label htmlFor="decription">Decription</label>
              <textarea
                className="w-100 h-50 inputDonation rounded-1"
                id="decription"
                onChange={(e) => setFormData({...formData, decription: e.target.value})}
              ></textarea>
            </div>
            <div className="col-10 inputFile mb-1 inputDonation rounded-1 d-flex justify-content-center align-items-center position-relative">
              <input
                type="file"
                className="position-absolute opacity-0"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                id="fileUpload"
              />

              <label
                htmlFor="fileUpload"
                className="uploadIconLabel d-flex justify-content-center align-items-center"
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 50 }}
                  className="position-absolute top-50 start-50 translate-middle"
                />
              </label>

              {formData.image && (
                <img
                  src={formData.image}
                  alt=""
                  width={250}
                  height={120}
                  className="position-absolute top-50 start-50 translate-middle"
                />
              )}
            </div>
            <div className="col-11 col-md-5 d-grid p-0 mt-3 mb-md-3">
              <button
                onClick={handleSend}
                className="rounded-1 send-btn sendDP custom-bg-color-01 border-0 p-1 me-md-2"
              >
                Send
              </button>
            </div>
            <div className="col-11 col-md-5 d-grid p-0 mt-3 mb-3">
              <button
                onClick={handleCancel}
                className="rounded-1 cansel-btn canselDP custom-bg-color-02 border-0 p-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
