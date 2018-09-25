import { css } from 'glamor';

const selectProfileStyles = () => css({
    color: '#fff',
    ' .user__photo': {
        display: 'inline-block',
        ' img': {
            height: 120,
            borderRadius: '500px'
        }
    }
});

export default selectProfileStyles;
