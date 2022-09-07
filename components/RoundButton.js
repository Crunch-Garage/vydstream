import { Text, TouchableOpacity } from 'react-native'

function RoundButton({...props}) {
    return (
        <TouchableOpacity
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