import React from "react";


const Home = () => {

return(
    <React.Fragment>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJNHwYISRtAAsWEd-hEqJUXi2w3_zNbMBXA&usqp=CAU" alt="" className="home-img" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKo4eJyw_ZDW98mU5uMTQ1QLGWw36JtCkRQ&usqp=CAU" alt="" className="home-img" />
      </div>
      <div className="home-msg">
        <p> Sweet Creations by Belen has specialized in making treats for holidays and special events. Order with a theme or simply tell us the occasion,
          we will make sure they exceed your expectations in presentation and in flavor!
        </p>
      </div>
    <div className="email-div">
      <h1>Sign Up to receive Promotions!</h1>
      </div>
    <div className="email-form">
    <form/>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="email" className="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="password" className="form-control" id="email1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="email-agreement" htmlFor="exampleCheck1">* I Agree to be emailed</label>
  </div>
  <button type="submit" className="btn btn-primary submit">Submit</button>
    </div>
    
    </React.Fragment>
);
};
export default Home;