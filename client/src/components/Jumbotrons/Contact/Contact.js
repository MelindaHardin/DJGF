import React from "react";

const Contact =props=>(

  <div className="jumbotron jumbotron-fluid" id="contact">
    <div className="container">
      <h3 className="display-4">Contact</h3>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input type="txt" className="form-control" id="exampleFormControlInput1"/>{props.name}
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"/>{props.email}
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6">{props.message}</textarea>
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
        </form>

    </div>
  </div>
)
export default Contact;