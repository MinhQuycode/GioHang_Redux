import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'
//Import thư viện cần kết nối react component - reduct store :tại đâu cần lấy giá trị thì connect
import {connect} from 'react-redux'

 class BaiTapGioHangRedux extends Component {
    renderSoLuong = () =>{
        return this.props.gioHang.reduce((tongSoLuong,spGH,index)=>{
            return tongSoLuong +=spGH.soLuong;
        },0).toLocaleString();
    }
    render() {
        return (
            <div className="container">
                <h3 className="my-5" style={{textAlign:'center'}}>DANH SÁCH CÁC SẢN PHẨM</h3>
                <div className="text-right">
                    <span style={{width:17,cursor:'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5"><i className="fa fa-cart-arrow-down"></i>({this.renderSoLuong()}) Giỏ hàng</i>
                    </span>
                </div>
                <ProductListRedux/>
                <GioHangRedux/>
            </div>
        )
    }
}
//Viết hàm lấy giá trị state từ redux store  về biến thanh props component
const mapStateToProps =(state)=>{
    return{
        gioHang:state.stateGioHang.gioHang,
    }
}
export default connect(mapStateToProps)(BaiTapGioHangRedux) 
