import React from "react";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // update gas prices
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("bk: GasPrices.js: getData: success: res: ", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err =>
        console.error("bk: GasPrices.js: getData: failure: err: ", err)
      );
  };



  render() {
    console.log('state', this.state);
    return('hello')
  }
}

export default Friends;
