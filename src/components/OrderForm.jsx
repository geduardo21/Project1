import React from "react";


const OrderForm = () => {

return(
    <React.Fragment>
      <div className="order-form">
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Date</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Time</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Special Request</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div>
  <button className="btn btn-primary submit-ord">Submit</button>
</div>
</div>
</React.Fragment>
)
}
export default OrderForm;