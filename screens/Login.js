import { useState } from 'react';
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
import {RoundButton, SvgImage } from '../components';
import { COLORS, svgIcons, SIZES, FONTS } from '../constants';

function Login({ navigation, route }) {

    const [data, setData] = useState({
        secure: true
    })

    /*header section */
    function renderHeader() {
        return (
            <View>
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
        const { secure } = data
        return (
            <View style={{ alignSelf: 'center' }}>
                <View
                    style={{
                        marginHorizontal: SIZES.padding,
                    }}
                >

                    <Text
                        style={{
                            fontSize: 30,
                            lineHeight: 36,
                            ...FONTS.poppinsSemiBoldFont,
                            marginTop: SIZES.padding,
                            textAlign: 'left',
                            color: COLORS.vydstream_white
                        }}
                    >Enter your password.</Text>

                    <View>

                        <View
                            style={{
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
                                    icon_name: svgIcons.phone_icon
                                }} />

                            <View style={{ width: 2, height: 30, backgroundColor: COLORS.vydstream_white, marginHorizontal: 10 }} />

                            <TextInput
                                placeholder='johndoe@gmail.com'
                                placeholderTextColor={COLORS.vydstream_white}
                                autoCapitalize='none'
                                style={{
                                    flex: 1,
                                    fontSize: 16,
                                    color: COLORS.vydstream_white,
                                    ...FONTS.poppinsRegularFont,
                                    lineHeight: 22
                                }}
                            />

                        </View>

                        <View
                            style={{
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
                                    icon_name: svgIcons.lock_icon
                                }} />

                            <View style={{ width: 2, height: 30, backgroundColor: COLORS.vydstream_white, marginHorizontal: 10 }} />

                            <TextInput
                                placeholder='Password'
                                placeholderTextColor={COLORS.vydstream_white}
                                autoCapitalize='none'
                                secureTextEntry={secure ? true : false}
                                style={{
                                    flex: 1,
                                    fontSize: 16,
                                    color: COLORS.vydstream_white,
                                    ...FONTS.poppinsRegularFont,
                                    lineHeight: 22
                                }}
                            />

                            <TouchableOpacity
                                onPress={() => setData({ ...data, secure: !secure })}
                            >

                                <SvgImage
                                    containerStyle={{
                                        width: `${30}px`,
                                        height: `${30}px`,
                                        icon_name: !secure ? svgIcons.secure_icon : svgIcons.insecure_icon
                                    }} />

                            </TouchableOpacity>

                        </View>

                    </View>

                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text
                            onPress={() => navigation.navigate('ForgotPassword')}
                            style={{
                                fontSize: 16,
                                lineHeight: 22,
                                color: COLORS.vydstream_links,
                                ...FONTS.poppinsSemiBoldFont,
                            }}
                        >Forgot Password? </Text>

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
                    bottom: 0,
                    left: 0,

                }}
            >

                <RoundButton
                    onPress={() => navigation.navigate('FavoriteGenre')}
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

export default Login