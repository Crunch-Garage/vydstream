import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { SvgImage } from '../components'
import { COLORS, FONTS, SIZES, svgIcons } from '../constants';

function Splash({ navigation, route }) {

    useEffect(() => {

        /*redirect to home page */
        const timer = setTimeout(() => {
            navigation.navigate('Welcome')
        }, 3000);

        return () => clearTimeout(timer);
    },[])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.vydstream_primary
            }}
        >

            <View
                style={{
                    marginTop: SIZES.height * 0.4
                }}
            >
                <Text
                    style={{
                        ...FONTS.pacificoRegularFont,
                        fontSize: 30,
                        lineHeight: 50,
                        color: COLORS.vydstream_white,
                        textAlign: 'center',
                    }}
                >VydStream</Text>

            </View>

            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.padding,
                    alignSelf: 'center'
                }}
            >
                <Text
                    style={{
                        ...FONTS.poppinsRegularFont,
                        fontSize: 16,
                        lineHeight: 18,
                        color: COLORS.vydstream_white,
                        textAlign: 'center',
                    }}
                >concept & design by</Text>

                <SvgImage
                    containerStyle={{
                        width: `${SIZES.padding * 5}px`,
                        height: `${SIZES.padding * 1.5}px`,
                        icon_name: svgIcons.crunch_garage_icon
                    }}
                    icon_style={{
                        alignSelf: 'center',
                        marginTop: SIZES.radius
                    }}
                />

            </View>

        </SafeAreaView>
    )
}

export default Splash;