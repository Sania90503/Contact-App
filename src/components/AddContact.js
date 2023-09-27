import React from "react";
class AddContact extends React.Component {
  state = { name: "", email: "", phone: "" };

  validateEmail = (email)=>{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };
  add = (e) => {

    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.phone === "") {
      alert("All the fields are mandatory!");
      return;
    }
    if(!this.validateEmail(this.state.email)){
      alert("Please enter a valid email address");
      return;
    }
    if (!this.validatePhone(this.state.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", phone: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="number" name="Phone" placeholder="Phone Number" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;