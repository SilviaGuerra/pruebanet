import React, { Component } from 'react';
import Header from './Header';
import SelectProfile from './SelectProfile';

import containerStyles from './ContainerStyles';

class Container extends Component {
    render() {
        return (
            <div {...containerStyles()}>
                <Header />
                <SelectProfile />
            </div>
        );
    }
}

export default Container;
