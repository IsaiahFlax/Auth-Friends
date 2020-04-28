import React, {useState} from "react";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {

  state = {
    friends: [], 
    newFriend: {
      id: '',
      name: '',
      age: '',
      email: ''
    }
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
    const friends = this.state.friends
    const newFriend = this.state.newFriend
    console.log('state', friends);
    
    const onSubmit = e => {
      e.preventDefault();
      console.log(this.state.newFriend.name)
    }
    const handleChange = friend => {
      this.setState({
        newFriend: {
          id: Date.now(),
        [friend.target.name]: friend.target.value
        }
      });
    };



    return(<div className='friends'>
      <div className="new-friend-form">
        <h2>Add a new friend</h2>
        <form className="addFriend" onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={newFriend.age}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <button>Add Friend</button>
    </form>
        </div>
        <div className='friends-card'>
    <h2>These are your friends</h2>
    {friends.map((x, index)=> (
    <div className="friend-card">
    <div>{x.name}</div>
    <div>{x.email}</div></div>))}
  </div></div>)
  }
}

export default Friends;
