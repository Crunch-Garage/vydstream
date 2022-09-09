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

function AddInfo({ navigation, route }) {
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
                    >Add your Info</Text>

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


                            <TextInput
                                placeholder='First Name'
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


                            <TextInput
                                placeholder='Last Name'
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
                    //alignItems: 'center',
                    bottom: 0,
                    left: 0,

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: SIZES.padding
                    }}
                >

                    <RoundButton
                        onPress={() => navigation.navigate('FavoriteGenre')}
                        containerStyle={{
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
                            ...FONTS.poppinsSemiBoldFont,
                            marginHorizontal: SIZES.padding * 1.5
                        }}
                        title={'Skip'}
                    />

                    <RoundButton
                        onPress={() => navigation.navigate('FavoriteGenre')}
                        containerStyle={{
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
                            ...FONTS.poppinsSemiBoldFont,
                            marginHorizontal: SIZES.padding * 2
                        }}
                        title={'Continue'}
                    />


                </View>

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

export default AddInfo