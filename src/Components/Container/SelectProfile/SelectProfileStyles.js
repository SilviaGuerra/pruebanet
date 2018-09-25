import { css } from 'glamor';

const selectProfileStyles = () => css({
    color: '#fff',
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
