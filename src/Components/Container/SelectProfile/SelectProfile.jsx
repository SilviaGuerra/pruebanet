import React, { Fragment } from 'react';
import selectProfileStyles from './SelectProfileStyles';

const SelectProfile = () => {
    return (
        <div {...selectProfileStyles()}>
            <h1>Quien esta viendo ahora?</h1>
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
            <div className="user__photo">
                <img src="https://i.pinimg.com/originals/08/90/78/089078150f5f43e817c4fd2491ef6e30.jpg" alt=""/>
                <h3>Nombre</h3>
            </div>
        </div>
    );
}

export default SelectProfile;
