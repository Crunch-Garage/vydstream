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
import { RoundButton, SvgImage } from '../components';
import { COLORS, svgIcons, SIZES, FONTS } from '../constants';

function CreatePassword({ navigation, route }) {

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
                    >Create your password.</Text>

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
                                    icon_name: svgIcons.lock_icon
                                }} />

                            <View style={{ width: 2, height: 30, backgroundColor: COLORS.vydstream_white, marginHorizontal: 10 }} />

                            <TextInput
                                placeholder='Enter your preferred password'
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

                    </View>

                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.poppinsRegularFont,
                                fontSize: 16,
                                lineHeight: 22,
                                color: COLORS.vydstream_white
                            }}
                        >Your password must: </Text>

                        <View
                            style={{
                                marginHorizontal: SIZES.radius,
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{
                                width: SIZES.radius * 0.3,
                                height: SIZES.radius * 0.3,
                                borderRadius: 20,
                                backgroundColor: COLORS.vydstream_white,
                                marginTop: SIZES.radius
                            }} />

                            <View style={{ marginHorizontal: SIZES.radius }}>
                                <Text
                                    style={{
                                        ...FONTS.poppinsRegularFont,
                                        fontSize: 16,
                                        lineHeight: 24,
                                        color: COLORS.vydstream_white
                                    }}
                                >be 8 - 72 characters long</Text>
                            </View>

                        </View>

                        <View
                            style={{
                                marginHorizontal: SIZES.radius,
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{
                                width: SIZES.radius * 0.3,
                                height: SIZES.radius * 0.3,
                                borderRadius: 20,
                                backgroundColor: COLORS.vydstream_white,
                                marginTop: SIZES.radius
                            }} />

                            <View style={{ marginHorizontal: SIZES.radius }}>
                                <Text
                                    style={{
                                        ...FONTS.poppinsRegularFont,
                                        fontSize: 16,
                                        lineHeight: 24,
                                        color: COLORS.vydstream_white
                                    }}
                                >not contain your name or email</Text>
                            </View>

                        </View>

                        <View
                            style={{
                                marginHorizontal: SIZES.radius,
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{
                                width: SIZES.radius * 0.3,
                                height: SIZES.radius * 0.3,
                                borderRadius: 20,
                                backgroundColor: COLORS.vydstream_white,
                                marginTop: SIZES.radius
                            }} />

                            <View style={{ marginHorizontal: SIZES.radius }}>
                                <Text
                                    style={{
                                        ...FONTS.poppinsRegularFont,
                                        fontSize: 16,
                                        lineHeight: 24,
                                        color: COLORS.vydstream_white
                                    }}
                                >not commonly used, easily guessed or contain any variation of the word "vysstream".</Text>
                            </View>

                        </View>

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
                    onPress={() => navigation.navigate('AddInfo')}
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
                    title={'Continue'}
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

export default CreatePassword