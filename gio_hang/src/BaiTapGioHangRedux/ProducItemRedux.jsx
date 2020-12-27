import React, { Component } from "react";
//Sử dụng thư viện kết nối với redux 
import {connect} from 'react-redux'

 class ProducItemRedux extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card text-black">
        <img style={{width:'340px',height:'350px'}} className="card-img-top" src={product.image}/>
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price.toLocaleString()}</p>
          <button className="btn btn-primary" onClick={()=>{this.props.themGioHang(product)}}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
// Hàm gửi dữ liệu lên store
const mapDispatchToProps = (dispatch)=>{
  return {
    themGioHang : (sanPham) =>{
      let spGioHang ={
        maSP:sanPham.id,
        tenSP:sanPham.name,
        hinhAnh:sanPham.image,
        soLuong :sanPham.soLuong,
        gia:sanPham.price,
      }
      console.log(spGioHang)
      //Tạo ra action
      let action={
        type :'THEM_GIO_HANG',
        spGioHang
      }
      //Dùng hàm dispatch từ redux => gửi dữ liệu lên reducer
      dispatch(action);
    }
  }
    
}
export default connect(null,mapDispatchToProps)(ProducItemRedux)