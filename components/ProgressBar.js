import {
    View
} from 'react-native';
import { COLORS, SIZES } from '../constants'

const ProgressBar = ({...props}) => {

    const {
        containerStyle,
        barStyle,
        barPercentage,
        barWidth
    } = props;
    
    return (
        <View style={{ ...containerStyle }}>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.vydstream_white,
                    ...barStyle
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: barPercentage,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.vydstream_button,
                    ...barStyle
                }}
            />

        </View>
    )
}
export default ProgressBar