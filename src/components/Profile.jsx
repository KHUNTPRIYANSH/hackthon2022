import React from "react";
import "./Profile.css";
const Form = () => {
  return (
    <div className="form-container">
      <header className="event-sec">
        <center>
          <div className="e-title">Artist Profile</div>
        </center>
      </header>
      <form className="event-form-f">
        <div className="col-f">
          <div className="regi-field">
            <label htmlFor="name">Name : </label>
            <div className="val">Priyansh Khunt</div>
          </div>
          <div className="regi-field">
            <label htmlFor="gname">Group Name : </label>
            <div className="val">Rinkiya Ke Papa</div>
          </div>
          <div className="regi-field">
            <label htmlFor="phone">Contact Number : </label>
            <div className="val">+91 98653 21470</div>
          </div>
          <div className="regi-field">
            <label htmlFor="email">Email : </label>
            <div className="val">rinkiyaKePapa@gmail.com</div>
          </div>
          <div className="regi-field">
            <label htmlFor="total-artist">Total number of artist : </label>
            <div className="val">69</div>
          </div>
          <div className="regi-field">
            <label htmlFor="theme">Theme of Performance : </label>
            <div className="val">Beti Bachav Beti Patav</div>
          </div>
          <div className="regi-field">
            <label htmlFor="dance-form">Form of Indian Classical Dance: </label>
            <div className="val">Bharatnatyaam</div>
          </div>
          <div className="regi-field">
            <label htmlFor="awards">Details of Awards / Honors : </label>
            <div className="val">Oxford Dictionary Approved</div>
          </div>
          <div className="regi-field">
            <label htmlFor="past-work">
              Have you performed at District, State, National or International
              Level? If Yes, Provide Details
            </label>
            <div className="val">Ha ekvaar try kari ti</div>
          </div>
        </div>
        <div className="col-f">
          <div className="regi-field">
            <label htmlFor="photo">Upload your passport size photo</label>
            <div className="val">
              <img
                src="https://avatars.githubusercontent.com/u/58349765?v=4"
                alt=""
                className="dp"
              />
            </div>
          </div>
          <div className="regi-field">
            <label htmlFor="aadhar">Upload your Aadhar card's photo</label>
            <div className="val">
              <img
                src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/adhar-h.jpg"
                alt=""
                className="aadhar"
              />
            </div>
          </div>
          <div className="regi-field">
            <label htmlFor="sign">Upload the photo of your signature</label>
            <div className="val">
              <img
                src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/sign.png"
                alt=""
                className="sign"
              />
            </div>
          </div>
          <div className="nav-btn bbox">
            <input className=" btns btn-s" type="submit" value="Approve" />
            <input className="btns btn-r" type="submit" value="Reject" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
