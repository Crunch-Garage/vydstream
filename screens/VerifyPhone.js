import { useState, useRef, useEffect } from 'react';
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

function VerifyPhone({ navigation, route }) {

    const pin_1_ref = useRef(null);
    const pin_2_ref = useRef(null);
    const pin_3_ref = useRef(null);
    const pin_4_ref = useRef(null);
    const pin_5_ref = useRef(null);
    const [data, setData] = useState({
        pin_1: '',
        pin_2: '',
        pin_3: '',
        pin_4: '',
        pin_5: ''
    })

    useEffect(() => {

        pin_1_ref?.current?.focus()

    }, [])

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
        const { pin_1, pin_2, pin_3, pin_4, pin_5 } = data
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
                    >Confirm your Phone Number</Text>

                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 20,
                            ...FONTS.poppinsRegularFont,
                            marginTop: SIZES.radius,
                            textAlign: 'left',
                            color: COLORS.vydstream_white
                        }}
                    >Enter  the 5-digit code we sent over SMS to 0712345678.</Text>

                    <View
                        style={{
                            marginTop: SIZES.padding,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >

                        <TextInput
                            ref={pin_1_ref}
                            onChangeText={(pin_1) => {
                                setData({ ...data, pin_1: pin_1})
                                if (pin_1 != '') {
                                    pin_2_ref.current.focus()
                                }
                            }}
                            keyboardType='number-pad'
                            value={pin_1}
                            maxLength={1}
                            secureTextEntry={true}
                            style={{
                                color: COLORS.vydstream_white,
                                ...FONTS.poppinsSemiBoldFont,
                                alignSelf: 'center',
                                padding: 10,
                                fontSize: 18,
                                height: 60,
                                width: '15%',
                                borderRadius: 5,
                                alignContent: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}
                        />

                        <TextInput
                            ref={pin_2_ref}
                            onChangeText={(pin_2) => {
                                setData({ ...data, pin_2: pin_2 })
                                if (pin_2 != '') {
                                    pin_3_ref.current.focus()
                                }
                            }}
                            keyboardType='number-pad'
                            value={pin_2}
                            maxLength={1}
                            secureTextEntry={true}
                            style={{
                                color: COLORS.vydstream_white,
                                ...FONTS.poppinsSemiBoldFont,
                                alignSelf: 'center',
                                padding: 10,
                                fontSize: 18,
                                height: 60,
                                width: '15%',
                                borderRadius: 5,
                                alignContent: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}
                        />

                        <TextInput
                            ref={pin_3_ref}
                            onChangeText={(pin_3) => {
                                setData({ ...data, pin_3: pin_3 })
                                if (pin_2 != '') {
                                    pin_4_ref.current.focus()
                                }
                            }}
                            keyboardType='number-pad'
                            value={pin_3}
                            maxLength={1}
                            secureTextEntry={true}
                            style={{
                                color: COLORS.vydstream_white,
                                ...FONTS.poppinsSemiBoldFont,
                                alignSelf: 'center',
                                padding: 10,
                                fontSize: 18,
                                height: 60,
                                width: '15%',
                                borderRadius: 5,
                                alignContent: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}
                        />

                        <TextInput
                            ref={pin_4_ref}
                            onChangeText={(pin_4) => {
                                setData({ ...data, pin_4: pin_4 })
                                if (pin_2 != '') {
                                    pin_5_ref.current.focus()
                                }
                            }}
                            keyboardType='number-pad'
                            value={pin_4}
                            maxLength={1}
                            secureTextEntry={true}
                            style={{
                                color: COLORS.vydstream_white,
                                ...FONTS.poppinsSemiBoldFont,
                                alignSelf: 'center',
                                padding: 10,
                                fontSize: 18,
                                height: 60,
                                width: '15%',
                                borderRadius: 5,
                                alignContent: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}
                        />

                        <TextInput
                            ref={pin_5_ref}
                            onChangeText={(pin_5) => {
                                setData({ ...data, pin_5: pin_5 })
                            }}
                            keyboardType='number-pad'
                            value={pin_5}
                            maxLength={1}
                            secureTextEntry={true}
                            style={{
                                color: COLORS.vydstream_white,
                                ...FONTS.poppinsSemiBoldFont,
                                alignSelf: 'center',
                                padding: 10,
                                fontSize: 18,
                                height: 60,
                                width: '15%',
                                borderRadius: 5,
                                alignContent: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}
                        />

                    </View>

                    <Text
                        style={{
                            flexWrap: 'wrap',
                            marginTop: SIZES.padding * 2,
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
                        >Didn't get a code?</Text>
                        <Text>{" "}</Text>
                        <Text
                            style={{
                                ...FONTS.poppinsRegularFont,
                                fontSize: 13,
                                lineHeight: 16,
                                textAlign: 'left',
                                color: COLORS.vydstream_links
                            }}
                        >Tap to resend </Text>

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
                    onPress={() => navigation.navigate('CreatePassword')}
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

export default VerifyPhone