import { Text, TouchableOpacity } from 'react-native'

function RoundButton({...props}) {
    return (
        <TouchableOpacity
            onPress={props?.onPress}
            style={{
                ...props?.containerStyle
            }}
        >
            <Text
                style={{
                    ...props?.textStyle
                }}
            >{props?.title}</Text>
        </TouchableOpacity>
    )
}

export default RoundButton