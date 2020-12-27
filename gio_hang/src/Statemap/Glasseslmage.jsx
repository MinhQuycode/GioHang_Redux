import React, { Component } from "react";

let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class Glasseslmage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassesDetail: {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/v1.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    };
  }
  //Thay doi giao dien
  changeGlasses = (idmap) => {
    // console.log(idmap);
    let newobj = {};
    switch (idmap) {
      case "1":
        {newobj = {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./img/v1.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        }};
        break;
      case "2":
       { newobj = {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./img/v2.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      }};
        break;
      case "3":
        {newobj =  {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./img/v3.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
        break;
      case "4":
       { newobj = {
            id: 4,
            price: 30,
            name: "DIOR D6005U",
            url: "./img/v4.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
        break;
      case "5":
       { newobj = {
            id: 5,
            price: 30,
            name: "PRADA P8750",
            url: "./img/v5.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
          break;
      case "6":
        {newobj = {
            id: 6,
            price: 30,
            name: "PRADA P9700",
            url: "./img/v6.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
          break;
      case "7":
        {newobj = {
            id: 7,
            price: 30,
            name: "FENDI F8750",
            url: "./img/v7.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
          break;
      case "8":
        {newobj = {
            id: 8,
            price: 30,
            name: "FENDI F8500",
            url: "./img/v8.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
          break;
      case "9":
        {newobj =  {
            id: 9,
            price: 30,
            name: "FENDI F4300",
            url: "./img/v9.png",
            desc:
              "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
          }};
        break;
      default:
        break;
    }
    this.setState({
      glassesDetail: newobj,
    });
  };
  render() {
    let { name, url, desc } = this.state.glassesDetail;
    return (
      <div
        style={{
          background: "url(./img/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "730px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "730px",
            opacity: "0.6",
            position: "relative",
          }}
        ></div>
        <div
          style={{ zIndex: "1", position: "absolute", top: 0, width: "100%" }}
        >
          <div className="bg-dark text-center text-white py-3">
            <h3 className="text-center">TRY GLASSES APP ONLINE</h3>
          </div>
          <div className="container">
            <div className="row justify-content-around my-5">
              <div className="col-6 text-center">
                <img
                  className="position-relative"
                  src="./img/model.jpg"
                  width="300px"
                />
                {/* //thay đổi giao diện mắt kính */}
                <div style={{ width: "300px", marginLeft: "6rem" }}>
                  <img
                    className="position-absolute"
                    src={url}
                    width="130px"
                    style={{ top: "25%", left: "39%" }}
                  />
                  <div
                    className="position-absolute fixed-bottom bg-danger"
                    style={{
                      opacity: "0.6",
                      width: "300px",
                      height: "120px",
                      left: "23.7%",
                    }}
                  >
                    <div className="position-absolute fixed-bottom">
                      <h5 style={{ color: "blue" }}>{name}</h5>
                      <p className="text-white">{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 text-center">
                <img src="./img/model.jpg" width="300px" />
              </div>
            </div>
            <div className="row p-4" style={{ backgroundColor: "white" }}>
              <div onClick={() => this.changeGlasses("1")} className="col-2">
                <img className="img-fluid" src="./img/v1.png" />
              </div>
              <div onClick={() => this.changeGlasses("2")} className="col-2">
                <img className="img-fluid" src="./img/v2.png" />
              </div>
              <div onClick={() => this.changeGlasses("3")} className="col-2">
                <img className="img-fluid" src="./img/v3.png" />
              </div>
              <div onClick={() => this.changeGlasses("4")} className="col-2">
                <img className="img-fluid" src="./img/v4.png" />
              </div>
              <div onClick={() => this.changeGlasses("5")} className="col-2">
                <img className="img-fluid" src="./img/v5.png" />
              </div>
              <div onClick={() => this.changeGlasses("6")} className="col-2">
                <img className="img-fluid" src="./img/v6.png" />
              </div>
              <div onClick={() => this.changeGlasses("7")} className="col-2">
                <img className="img-fluid" src="./img/v7.png" />
              </div>
              <div onClick={() => this.changeGlasses("8")} className="col-2">
                <img className="img-fluid" src="./img/v8.png" />
              </div>
              <div onClick={() => this.changeGlasses("9")} className="col-2">
                <img className="img-fluid" src="./img/v9.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
