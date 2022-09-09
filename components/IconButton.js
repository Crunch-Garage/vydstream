import React from "react";
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import SvgImage from "./SvgImage";

const IconButton = ({ ...props }) => {

    return (
        <TouchableOpacity
            onPress={props?.navigation_action}
        >

            <View style={{ ...props?.containerStyle }}>

                <SvgImage containerStyle={{ ...props?.iconStyle }} />

                <Text style={{ ...props?.textStyle }}>{props?.button_name}</Text>

            </View>

        </TouchableOpacity>
    )
}

export default IconButton
