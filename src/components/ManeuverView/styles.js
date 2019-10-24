/**
 * @imports
 */
import { StyleSheet} from 'react-native';
import { IconFont } from '../../constants/NavigationIcons';


/**
 * @styles
 */
export default props => StyleSheet.create({

    /**
     * @maneuverView
     */
    maneuverView: {
      marginTop:50,
      paddingVertical:16,
      marginHorizontal:16,
      backgroundColor:'rgb(72,146,255)',
      borderRadius:6,
      flexDirection:'row',
      shadowColor: 'rgba(0,0,0,0.12)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 10,
      elevation: 1,
      alignItems:'center'
    },

    maneuverViewArrow: {
        flex: 0,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    maneuverViewDirection: {
        flex: 1,
    },

    maneuverClose: {
        flex: 0,
        width: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    
});
