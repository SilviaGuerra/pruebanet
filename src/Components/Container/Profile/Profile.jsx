import React from 'react';
import profileStyles, { stylesMaterial } from './ProfileStyles';
import { Search, Notifications } from '@material-ui/icons';

const Profile = (props) => {
    // console.log(props);
    return (
        <div {...profileStyles()} onClick={props.onClick}>
            <div className="user__photo">
                <img
                    src={props.photo_user}
                    alt="user1"
                />
                <h3>{props.user}</h3>
            </div>
        </div>
    );
}

export default Profile;
