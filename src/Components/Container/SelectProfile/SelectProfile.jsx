import React, { Component } from 'react';
import selectProfileStyles from './SelectProfileStyles';

class SelectProfile extends Component {
    constructor(props) {
        super(props);
        this.handleClickUser = this.handleClickUser.bind(this);
        this.state = {
            user: false
        }
    }

    handleClickUser() {
        console.log("click click");
        //this.setState({
        //    user: !this.state.user
        //})
    }

    render() {
        return (
            <div {...selectProfileStyles()}>
                <h1>Quien esta viendo ahora?</h1>
                <div className="user__photo">
                    <img
                        src="https://i.pinimg.com/originals/08/90/78/089078150f5f43e817c4fd2491ef6e30.jpg"
                        alt="user1"
                        onClick={this.handleClickUser}
                    />
                    <h3>Nombre</h3>
                </div>
                <div className="user__photo">
                    <img src="https://i.pinimg.com/originals/08/90/78/089078150f5f43e817c4fd2491ef6e30.jpg" alt=""/>
                    <h3>Nombre</h3>
                </div>
                <div className="user__photo">
                    <img src="https://i.pinimg.com/originals/08/90/78/089078150f5f43e817c4fd2491ef6e30.jpg" alt=""/>
                    <h3>Nombre</h3>
                </div>
                <div className="user__photo">
                    <img src="https://i.pinimg.com/originals/08/90/78/089078150f5f43e817c4fd2491ef6e30.jpg" alt=""/>
                    <h3>Nombre</h3>
                </div>

            </div>
        )
    }
}

export default SelectProfile;
