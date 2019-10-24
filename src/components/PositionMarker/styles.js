/**
 * @imports
 */
import { StyleSheet} from 'react-native';
import { NavigationIconsFont } from '../../constants/NavigationIcons';


/**
 * @styles
 */
export default props => StyleSheet.create({

    positionMarkerText: {
        ...NavigationIconsFont,
        fontSize: 16,
        color: props.color,
    },

    positionMarkerArrow: {
        backgroundColor: props.backgroundColor,
        width: 32,
        height: 32,
        borderRadius: props.size,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            { rotateX: props.angle + 'deg'}
        ]
    }
});
