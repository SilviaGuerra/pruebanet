import React, { Component, Fragment } from 'react';
import SelectProfile from './SelectProfile';

import containerStyles from './ContainerStyles';

class Container extends Component {
    render() {
        return (
            <div {...containerStyles()}>
                <SelectProfile />
            </div>
        );
    }
}

export default Container;
