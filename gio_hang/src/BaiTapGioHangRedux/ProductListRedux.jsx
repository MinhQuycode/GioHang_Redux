import React, { Component } from "react";
import productList from '../data/productList.json'
import ProducItemRedux from "./ProducItemRedux";

export default class ProductListRedux extends Component {
  renderProductItem = () => {
    return productList.map((sanpham,index) => {
        return <div className="col-4" key={index}>
        <ProducItemRedux product={sanpham}/>
        </div>
    })
  };

  render() {
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
