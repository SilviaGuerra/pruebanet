import { css } from 'glamor';

const selectProfileStyles = () => css({
    color: '#fff',
    // height: 500,
    // margin: '0 60px',
    // display: 'flex',
    // justifyContent: 'space-around',
    // flexDirection: 'row',
    // background: 'purple',
    ' .header': {
        ' img': {
            height: 85,
        },
    },
    // ' .profile': {
    //     '&__descriptionMovie': {
    //         width: 400,
    //         // background: 'green'
    //     },
    //     '&__mainMovie': {
    //         backgroundImage: 'url(http://corriendolavoz.com.ar/wp-content/uploads/2018/04/Vincent.jpg)',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'contain',
    //         height: 200,
    //         width: '50%'
    //     },
    // },
    ' .user__photo': {
        display: 'inline-block',
        padding: 30,
        ' img': {
            height: 120,
            borderRadius: '500px'
        }
    }
});

export default selectProfileStyles;
