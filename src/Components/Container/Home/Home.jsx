import React, { Component } from 'react';
import { Search, Notifications } from '@material-ui/icons';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import SelectFilm from './SelectFilm';
import Profile from '../Profile';
import Joyride from 'react-joyride';

import homeStyles, { stylesMaterial } from './HomeStyles';


const defaultProps = {
    joyride: {}
};

class Home extends Component {
    state = {
        run: false,
        open: false,
        stepIndex: 0,
        steps: [
            // {
            //     target: '.app__carousel',
            //     content: 'tururururututuru ',
            //     placement: 'top'
            // },
            // {
            //     target: '.app__carousel',
            //     content: 'batman tururururuturu batman',
            //     placement: 'top'
            // },
            // {
            //     target: '.app__carousel',
            //     content: 'cha cha cha ',
            //     placement: 'top'
            // },
            // {
            //     target: '.app__carousel',
            //     content: 'jajajajajaa ',
            //     placement: 'top'
            // },
            {
                target: '.header__rightSide svg:nth-child(1)',
                content: 'hwfhkfhksfkskhfkhksfhskfjhskjh',
                placement: 'top'
            },
            {
                target: '.header__rightSide svg:nth-child(2)',
                content: 'hwfhkfhksfkskhfkhksfhskfjhskjhfkjshfkjkjhfdjhfjhsdjsj',
                placement: 'top'
            },
            {
                target: '.profile__descriptionMovie',
                content: 'This is my awesome feature!',
                placement: 'bottom',
            },
            {
                target: '.profile__div3',
                content: 'este es el div 3 gvhsdbjnflkmflsaashknn, kcjhsakfhskf',
                placement: 'bottom',
                styles: {
                    options: {
                        beaconSize: 20,
                        backgroundColor: 'purple',
                        textColor: '#fff'
                    }

                }
            },
            {
                target: '.profile__mainMovie',
                content: 'This if my awesome feature!',
                placement: 'bottom',
            },
            {
                target: '.profile__div2 button',
                content: 'Último paso. Ádios',
                placement: 'top',
                spotlightClicks: true,
                styles: {
                    buttonClose: {
                      display: "none"
                    },
                    // spotlight: {
                    //   background: 'red',
                    // }
                }
            }
        ]
    };

    componentDidMount() {
        this.setState({
            run: true,
            open: true
        });
    }

    callback = (tour) => {
        // const { action, index, type } = tour;
        console.log(tour);
    };

    // handleClickNextButton = () => {
    //     console.log("you're zero");
    // const { stepIndex } = this.state;
    //
    //     if (this.state.stepIndex === 2) {
    //         this.setState({
    //           stepIndex: stepIndex + 1
    //         });
    //     }
    // };

    handleClickNextButton = () => {
        const { stepIndex } = this.state;

        if (this.state.stepIndex === 1) {
            this.setState({
              stepIndex: stepIndex + 1
            });
        }
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { steps, run, open } = this.state;

        return(
            <div {...homeStyles()}>
                <Joyride
                    continuous
                    showProgress
                    showSkipButton
                    scrollToFirstStep
                    steps={steps}
                    run={run}
                    callback={(tour) => this.callback(tour)}
                />
                <div className="header" onClick={this.handleClickStart}>
                    <div className="header__leftSide">
                        <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" alt="netflix"/>
                    </div>
                    <div className="header__rightSide">
                        <Search style={stylesMaterial.iconWhite} />
                        <Notifications style={stylesMaterial.iconWhite} />
                        <button onClick={this.handleToggle}>
                            <Profile />
                            feliz
                        </button>
                    </div>
                </div>
                <div className="profile__descriptionMovie">
                    <p>Holaaaaa</p>
                    <div className="profile__mainMovie" />
                </div>
                <SelectFilm
                    movies={this.props.film}
                />
                <div className="profile__div1">azul</div>
                <div className="profile__div2">
                    <button onClick={this.handleClickNextButton}>aqui</button>
                </div>
                <div className="profile__div3">morado</div>
            </div>
        );
    }
}

Home.defaultProps = defaultProps;

export default Home;
