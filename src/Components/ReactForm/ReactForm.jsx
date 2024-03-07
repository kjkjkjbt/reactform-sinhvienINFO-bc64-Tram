
import React, { Component } from 'react'
import ProductForm from './ProductForm';

export default class ReactForm extends Component {
  state={
    arrSV: [
      {
        id: 1,
        name: 'hahaha',
        tel: '',
        email: '',
      },
      {
        id:2,
        name:'hihihihi',
        tel: '',
        email: '',
      },
    ],
    //  svEdit:{
    //   id: 1,
    //   name:'hahaha',
    //   tel: '',
    //   email: '',
    // },
  };
  handleAddSv =(clickSv)=>{
    let arrUpdate= [...this.state.arrSV];
    arrUpdate.push(clickSv);
    this.setState({
      arrSV : arrUpdate,
    });
  };
  handleRemoveSv=(idSv)=>{
    let newArrSv =this.state.arrSV.filter ((item)=>item.id !== idSv,);
    this.setState({
      arrSV:newArrSv,
    });
  };
  handleEditSv =(clickSv)=>{
    this.setState({
      svEdit: clickSv,
    });
  };
  handleUpdateSv =(svUpdate)=>{
    console.log('handleUpdateSv', svUpdate)
    let index = this.state.arrSV.findIndex((item)=>(item.id===svUpdate.id));
    this.state.arrSV[index]=svUpdate;
    this.setState({
      arrSV: this.state.arrSV
    })
  };

  render() {
    return (
      <div>
        <h3>Thông Tin Sinh Viên  </h3>
        <ProductForm>
          handleUpdateSv = {this.handleUpdateSv}
          addStudent={this.handleAddSv}
          removeStudent={this.handleRemoveSv}
          editStudent={this.handleEditSv}
        </ProductForm>
        <table>
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Tên sinh viên</th>
              <th>Số Điện Thoại </th>
              <th> Email </th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrSV.map((Sv)=>{
              return (
                <tr key={Sv.id}>
                  <td>{Sv.id}</td>
                  <td>{Sv.name}</td>
                  <td>{Sv.tel}</td>
                  <td>{Sv.email}</td>
                  <td>
                    <button onClick={()=>{this.handleEditSv(Sv)}}
                    className='btn btn-primary'> EDIT </button>
                    <button onClick={()=>{
                      this.handleRemoveSv(Sv.id);
                    }} className='btn btn-danger'> REMOVE     </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  };
};
