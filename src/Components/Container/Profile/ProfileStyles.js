import { css } from 'glamor';

const profileStyles = () => css({
    ' .header': {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ' img': {
        cursor: 'pointer'
    }
});

export default profileStyles;

export const stylesMaterial = {
    iconWhite: {
        color: '#fff'
    }
};
