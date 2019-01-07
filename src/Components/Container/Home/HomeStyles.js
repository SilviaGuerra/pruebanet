import { css } from 'glamor';

const homeStyles = () => css({
    background: '#000',
    ' .header': {
        display: 'flex',
        justifyContent: 'space-around',
        '&__rightSide': {
            display: 'flex',
            alignItems: 'center'
        }
    },
    ' .profile': {
        '&__descriptionMovie': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundImage: 'url(http://corriendolavoz.com.ar/wp-content/uploads/2018/04/Vincent.jpg)',
            backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: 400,
        },
        '&__div1': {
            height: 400,
            background: 'blue'
        },
        '&__div2': {
            height: 500,
            background: 'green'
        },
        '&__div3': {
            height: 600,
            background: 'purple'
        }
    },
    // ' .app__carousel': {
    //     width: '80%'
    // }

    // ' .profile': {
    //     '&__div1': {
    //         height: 400,
    //         background: 'blue'
    //     },
    //     '&__div2': {
    //         height: 500,
    //         background: 'green'
    //     },
    //     '&__div3': {
    //         height: 600,
    //         background: 'purple'
    //     }
    // }
});

export default homeStyles;

export const stylesMaterial = {
    iconWhite: {
        color: '#fff'
    }
};
