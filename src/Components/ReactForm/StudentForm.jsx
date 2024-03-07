import React, { Component } from "react";

export default class StudentForm extends Component {
  state = {
    value: {
      id: "",
      nameSv: "",
      tel: "",
      email: "",
    },
    errValue: {
      id: "",
      nameSv: "",
      tel: "",
      email: "",
    },
    isSubmit: false,
  };
  handleChangeInput = (e) => {
    // e.target đại diện cho thẻ input

    let tag = e.target;
    let dataType = e.target.getAttribute("data-type");
    let nameInput = tag.name;
    // clone value hiện tại
    let newValue = { ...this.state.value };
    // sửa tại value của key đó
    newValue[nameInput] = tag.value;

    // xử lý err
    let newErrValue = { ...this.state.errValue };
    let message = "";

    if (newValue[nameInput] === "") {
      message = `${nameInput} This cannot be blank !`;
    } else {
      if (dataType) {
        switch (dataType) {
          case "number":
            {
              let regex = /^(?:[1-9]\d{0,2}|1000)$/;
              if (!regex.test(newValue[nameInput])) {
                message = "Only Numbers are allowed";
              }
            }
            break;
          case "string":
            {
              let regex = /^[A-Za-z]+$/;
              if (!regex.test(newValue[nameInput])) {
                message = "Only Letters are allowed";
              }
            }
            break;
          default: {
          }
        }
      }
    }
    newErrValue[nameInput] = message;

    // Xử lý nút submit

    let valid = true;
    for (let key in newErrValue) {
      if (newErrValue[key] !== "") {
        valid = false;
        break;
      }
    }

    for (let key in newValue) {
      if (newValue[key] === "") {
        valid = false;
        break;
      }
    }

    this.setState({
      value: newValue,
      errValue: newErrValue,
      isSubmit: valid,
    });
  };
  handleSubmit = (e) => {
    // Sự kiện chặn load trang
    e.preventDefault();
    let { handleAddProduct } = this.props;
    handleAddProduct(this.state.value);
  };
  render() {
    let { id, nameSv, tel, email } = this.state.value;
    return (
      <div className="container mt-5">
        <h2> Thông Tin Sinh Viên </h2>
        <form onSubmit={this.handleSubmit} className="border rounded-2 p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="svId" className="form-label">
                  Mã SV
                </label>
                <input
                  datatype="number"
                  type="number"
                  className="form-control"
                  name="id"
                  id="sv"
                  placeholder="nhập ID sinh viên "
                  value={id}
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.id}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="studentname" className="form-label">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  datatype="string"
                  className="form-control"
                  name="tenSv"
                  value={nameSv}
                  placeholder="Please insert your full name"
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.nameSv}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="svdt" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="tel"
                  value={tel}
                  placeholder="Insert telephone number here "
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.tel}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Please insert your email"
                  onInput={this.handleChangeInput}
                />
                <p style={{ height: "30px" }} className="text-danger">
                  {this.state.errValue.email}
                </p>
              </div>
            </div>
          </div>
          <button
            disabled={!this.state.isSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add more information
          </button>
          <button
            disabled={!this.state.isSubmit}
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.handleUpdateSv(this.state.value);
            }}
          >
            Update Students' Info
          </button>
        </form>
      </div>
    );
  }
}
