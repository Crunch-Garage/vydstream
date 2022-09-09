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

function LoginHome({ navigation, route }) {

    /*header section */
    function renderHeader() {
        return (
            <View style={{ backgroundColor: COLORS.white }}>
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
                    >What email or phone number did you use?</Text>

                    <View>

                        <View
                            style={{
                                alignSelf: 'center',
                                width: SIZES.width * 0.85,
                                flexDirection: 'row',
                                marginTop: SIZES.padding,
                                alignItems: 'center',
                                height: 60,
                                borderRadius: 5,
                                padding: 10,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}>

                            <SvgImage
                                containerStyle={{
                                    width: `${30}px`,
                                    height: `${30}px`,
                                    icon_name: svgIcons.address_icon
                                }} />

                            <TextInput
                                placeholder='Email address or phone number'
                                placeholderTextColor={COLORS.vydstream_white}
                                autoCapitalize='none'
                                // onChangeText={(val) => emailPhoneChange(val)}
                                style={{
                                    flex: 1,
                                    fontSize: 16,
                                    marginHorizontal: SIZES.radius,
                                    color: COLORS.vydstream_white,
                                    lineHeight: 22,
                                    ...FONTS.poppinsRegularFont,

                                }}
                                keyboardType="default"
                            />

                        </View>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.radius,
                            alignItems: 'center',
                            width: SIZES.width * 0.85,
                            alignSelf: 'center'
                        }}
                    >

                        <View
                            style={{
                                flex: 1,
                                height: 0.5,
                                backgroundColor: COLORS.vydstream_white
                            }}
                        />

                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 22,
                                marginHorizontal: SIZES.radius,
                                ...FONTS.poppinsRegularFont,
                                color: COLORS.vydstream_white
                            }}
                        >or</Text>

                        <View
                            style={{
                                flex: 1,
                                height: 0.5,
                                backgroundColor: COLORS.vydstream_white
                            }}
                        />

                    </View>

                    <View
                        style={{
                            marginTop: SIZES.padding,
                            alignSelf: 'center'
                        }}
                    >

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
                                navigation.navigate('FavoriteGenre')
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
                                navigation.navigate('FavoriteGenre')
                            }}
                        />

                    </View>

                    <Text
                        style={{
                            flexWrap: 'wrap',
                            marginTop: SIZES.padding * 2,
                            textAlign: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.poppinsRegularFont,
                                fontSize: 13,
                                lineHeight: 16,
                                textAlign: 'left',
                                color: COLORS.vydstream_white
                            }}
                        >Don't have an acccount?</Text>
                        <Text>{" "}</Text>
                        <Text
                            onPress={() => navigation.navigate('SignUpHome')}
                            style={{
                                ...FONTS.poppinsRegularFont,
                                fontSize: 13,
                                lineHeight: 16,
                                textAlign: 'left',
                                color: COLORS.vydstream_links
                            }}
                        >Create one here</Text>

                    </Text>

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
                    bottom: 0,
                    left: 0,

                }}
            >

                <RoundButton
                    onPress={() => navigation.navigate('Login')}
                    containerStyle={{
                        width: SIZES.width * 0.85,
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding * 1.5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: SIZES.padding * 3,
                        padding: 10,
                        backgroundColor: COLORS.vydstream_button,
                        elevation: 3
                    }}
                    textStyle={{
                        textAlign: 'center',
                        color: COLORS.vydstream_white,
                        fontSize: 16,
                        ...FONTS.poppinsSemiBoldFont
                    }}
                    title={'Next'}
                />

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

export default LoginHome;