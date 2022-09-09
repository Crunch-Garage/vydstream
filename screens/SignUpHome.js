import React from 'react'
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Platform,
    StatusBar,
    Text,
    TextInput,
    ScrollView
} from 'react-native'
import { IconButton, RoundButton, SvgImage } from '../components';
import { COLORS, svgIcons, SIZES, FONTS } from '../constants';

function SignUpHome({ navigation, route }) {
    /*header section */
    function renderHeader() {
        return (
            <View >
                <View
                    style={{
                        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + SIZES.radius : SIZES.radius,
                        marginHorizontal: SIZES.padding / 2,
                        width: SIZES.width,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: SIZES.radius
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack(null)}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        >

                            <SvgImage
                                containerStyle={{
                                    width: `${18}px`,
                                    height: `${18}px`,
                                    icon_name: svgIcons.left_icon
                                }}
                            />

                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    }

    /*middle section */
    function renderMiddleSection() {
        return (
            <View style={{ alignSelf: 'center' }}>
                <View
                    style={{
                        marginHorizontal: SIZES.radius,
                    }}
                >

                    <Text
                        style={{
                            ...FONTS.poppinsSemiBoldFont,
                            fontSize: 30,
                            lineHeight: 36,
                            marginTop: SIZES.padding,
                            textAlign: 'left',
                            color: COLORS.vydstream_white
                        }}
                    >Sign Up</Text>

                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 18,
                            lineHeight: 20,
                            marginTop: SIZES.padding,
                            textAlign: 'left',
                            color: COLORS.vydstream_white
                        }}
                    >We won't share your contact info with pros</Text>

                    <View
                        style={{
                            marginTop: SIZES.radius,
                            alignSelf: 'center'
                        }}
                    >
                        <IconButton
                            containerStyle={{
                                width: SIZES.width * 0.85,
                                flexDirection: 'row',
                                marginTop: SIZES.radius,
                                alignItems: 'center',
                                height: 55,
                                borderRadius: SIZES.padding * 2,
                                padding: 10,
                                backgroundColor: COLORS.vydstream_white,
                                borderWidth: 1,
                                borderColor: COLORS.vydstream_white,
                            }}
                            iconStyle={{
                                width: `${30}px`,
                                height: `${30}px`,
                                icon_name: svgIcons.phone_icon,

                            }}
                            textStyle={{
                                ...FONTS.poppinsSemiBoldFont,
                                color: '#000000',
                                marginLeft: 15,
                                fontSize: 16,
                                lineHeight: 22
                            }}
                            button_name={'Continue with phone'}
                            navigation_action={() => {
                                navigation.navigate('SignUpPhone')
                            }}
                        />

                        <IconButton
                            containerStyle={{
                                width: SIZES.width * 0.85,
                                flexDirection: 'row',
                                marginTop: 10,
                                alignItems: 'center',
                                height: 55,
                                borderRadius: SIZES.padding * 2,
                                padding: 10,
                                backgroundColor: COLORS.vydstream_white,
                                borderWidth: 1,
                                borderColor: COLORS.vydstream_white,
                            }}
                            iconStyle={{
                                width: `${30}px`,
                                height: `${30}px`,
                                icon_name: svgIcons.facebook_icon,

                            }}
                            textStyle={{
                                ...FONTS.poppinsSemiBoldFont,
                                color: '#000000',
                                marginLeft: 15,
                                fontSize: 16,
                                lineHeight: 22
                            }}
                            button_name={'Continue with Facebook'}
                            navigation_action={() => {
                                navigation.navigate('SignUpPhone')
                            }}
                        />

                        <IconButton
                            containerStyle={{
                                width: SIZES.width * 0.85,
                                flexDirection: 'row',
                                marginTop: 10,
                                alignItems: 'center',
                                height: 55,
                                borderRadius: SIZES.padding * 2,
                                padding: 10,
                                backgroundColor: COLORS.vydstream_white,
                                borderWidth: 1,
                                borderColor: COLORS.vydstream_white,
                            }}
                            iconStyle={{
                                width: `${30}px`,
                                height: `${30}px`,
                                icon_name: svgIcons.google_icon
                            }}
                            textStyle={{
                                ...FONTS.poppinsSemiBoldFont,
                                color: '#000000',
                                marginLeft: 15,
                                fontSize: 16,
                                lineHeight: 22
                            }}
                            button_name={'Continue with Google'}
                            navigation_action={() => {
                                navigation.navigate('SignUpPhone')
                            }}
                        />

                        <IconButton
                            containerStyle={{
                                width: SIZES.width * 0.85,
                                flexDirection: 'row',
                                marginTop: SIZES.radius,
                                alignItems: 'center',
                                height: 55,
                                borderRadius: SIZES.padding * 2,
                                padding: 10,
                                backgroundColor: COLORS.vydstream_white,
                                borderWidth: 1,
                                borderColor: COLORS.vydstream_white,
                            }}
                            iconStyle={{
                                width: `${30}px`,
                                height: `${30}px`,
                                icon_name: svgIcons.email_icon
                            }}
                            textStyle={{
                                ...FONTS.poppinsSemiBoldFont,
                                color: '#000000',
                                marginLeft: 15,
                                fontSize: 16,
                                lineHeight: 22
                            }}
                            button_name={'Continue with Google'}
                            navigation_action={() => {
                                navigation.navigate('SignUpPhone')
                            }}
                        />

                    </View>

                </View>
            </View>
        )
    }

    /*bottom section */
    function renderBottomSection() {
        return (
            <View
                style={{
                    position: 'absolute',
                    width: SIZES.width,
                    alignItems: 'center',
                    bottom: SIZES.padding,
                    left: 0,

                }}
            >

                <Text
                    style={{
                        flexWrap: 'wrap',
                        marginTop: SIZES.padding * 2,
                        //textAlign: 'center',
                        marginHorizontal: SIZES.padding,
                        lineHeight: 18
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 13,
                            lineHeight: 18,
                            textAlign: 'left',
                            color: COLORS.vydstream_white,

                        }}
                    > By tapping Sign up with Phone, Facebook, Google or Email, you agree to the </Text>
                    <Text>{" "}</Text>
                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 13,
                            lineHeight: 18,
                            textAlign: 'left',
                            color: COLORS.vydstream_links
                        }}
                    >Terms of Use</Text>
                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 13,
                            lineHeight: 18,
                            textAlign: 'left',
                            color: COLORS.vydstream_white,

                        }}
                    >{" and "}</Text>
                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 13,
                            lineHeight: 18,
                            textAlign: 'left',
                            color: COLORS.vydstream_links
                        }}
                    >Privacy Policy</Text>

                </Text>

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.vydstream_primary
            }}
        >

            {/*render header*/}
            {renderHeader()}

            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >

                {/*render middle section */}
                {renderMiddleSection()}

            </ScrollView>

            {renderBottomSection()}


        </SafeAreaView>
    )
}

export default SignUpHome