import React from "react";
import axios from "axios";
import Select from "react-select";
import mongoose from "mongoose";

import "./App.scss";

mongoose.Promise = global.Promise

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      states: [],
      selectedStates: [],
    };
  }

  async componentDidMount() {
    // const userRes = await axios.get("http://localhost:5006/user", {
    //   headers: {
    //     Authorization: "Bearer 123"
    //   }
    // });
    // console.log('user: ', userRes.data.user);
    const response = await axios('http://localhost:5006/getStates');
    const states = response.data.states
    this.setState({
      // user: userRes.data.user,
      states: states.map(location => {
        return {value: location, label: location}
      })
    });
  }

  changeLocation = selectedStates => {
    this.setState({
      selectedStates: selectedStates
    });
  };

  onSaveClick = async () => {
    console.log(this.state.selectedStates)
    await axios.post('http://localhost:5006/addUser', {
      // user: username,
      states: this.state.selectedStates
    })
  };

  render() {
    const { user, states } = this.state;
    return (
      <div className="app-main">
        <div className="app-main-content">
          <div>
            <h3>
              Your Resident States
            </h3>
          </div>
          <div>
            What states did {user.firstName ? `${user.firstName}` : "you"} reside in during 2018?
          </div>
          <div className="app-stateDropdownMenu">
            <Select
              isMulti={true}
              options={states}
              name='states'
              placeholder="Select states"
              onChange={this.changeLocation}
            />
          </div>
          <div>
            <button className="app-saveButton" type="button" onClick={this.onSaveClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
