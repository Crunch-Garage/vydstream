import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Platform,
    StatusBar,
    Text,
    TextInput,
    ScrollView,
    Image,
    Animated,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar, SvgImage } from '../components';
import { COLORS, svgIcons, SIZES, FONTS, staticData } from '../constants';
import { useState, useEffect } from 'react';


function MovieDetail({ navigation, route }) {

    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        let { movie_details } = route.params;
        setSelectedMovie(movie_details)
    }, [])

    /*top section */
    function renderTopSection() {

        const CARD_WIDTH = SIZES.width;
        const CARD_HEIGHT = SIZES.height * 0.75

        return (
            <View>

                <Image
                    source={selectedMovie?.thumbnail}
                    style={{
                        width: CARD_WIDTH,
                        height: CARD_HEIGHT,
                    }}
                    resizeMode='cover'
                />

                <View
                    style={{
                        position: 'absolute',
                        width: CARD_WIDTH,
                        height: CARD_HEIGHT,
                        backgroundColor: 'rgba(0, 0 ,0 , 0.7)'
                    }}
                >

                    {/* header */}
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

                    <View
                        style={{
                            alignSelf: 'center',
                            marginTop: CARD_HEIGHT * .125
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30
                            }}
                        >

                            <SvgImage
                                containerStyle={{
                                    width: `${80}px`,
                                    height: `${80}px`,
                                    icon_name: svgIcons.playlist_icon
                                }}
                            />

                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            width: CARD_WIDTH,
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['transparent', '#000', '#000']}
                            style={{
                                width: '100%',
                            }}
                        >
                            <View
                                style={{
                                    marginHorizontal: SIZES.radius
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.poppinsSemiBoldFont,
                                        fontSize: 25,
                                        lineHeight: 26,
                                        textAlign: 'left',
                                        color: COLORS.vydstream_white
                                    }}
                                    numberOfLines={1}
                                >{selectedMovie?.name}</Text>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: SIZES.radius * .5,
                                        alignItems: 'center',
                                        alignContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.poppinsSemiBoldFont,
                                            fontSize: 15,
                                            lineHeight: 16,
                                            textAlign: 'left',
                                            color: COLORS.vydstream_white
                                        }}
                                        numberOfLines={1}
                                    >{'PG13'}</Text>
                                    <View
                                        style={{
                                            backgroundColor: COLORS.vydstream_white,
                                            width: SIZES.radius * .25,
                                            height: SIZES.radius * .25,
                                            borderRadius: SIZES.radius,
                                            marginHorizontal: SIZES.radius * .5
                                        }}
                                    />
                                    <Text
                                        style={{
                                            ...FONTS.poppinsSemiBoldFont,
                                            fontSize: 15,
                                            lineHeight: 16,
                                            textAlign: 'left',
                                            color: COLORS.vydstream_white
                                        }}
                                        numberOfLines={1}
                                    >{'Action'}</Text>

                                    <View
                                        style={{
                                            backgroundColor: COLORS.vydstream_white,
                                            width: SIZES.radius * .25,
                                            height: SIZES.radius * .25,
                                            borderRadius: SIZES.radius,
                                            marginHorizontal: SIZES.radius * .5
                                        }}
                                    />

                                    <Text
                                        style={{
                                            ...FONTS.poppinsSemiBoldFont,
                                            fontSize: 15,
                                            lineHeight: 16,
                                            textAlign: 'left',
                                            color: COLORS.vydstream_white
                                        }}
                                        numberOfLines={1}
                                    >{'Adventure'}</Text>

                                </View>

                                <Text
                                    style={{
                                        ...FONTS.poppinsSemiBoldFont,
                                        fontSize: 15,
                                        lineHeight: 16,
                                        textAlign: 'left',
                                        color: COLORS.vydstream_white,
                                        marginTop: SIZES.radius * .5
                                    }}
                                    numberOfLines={1}
                                >{'2022 | 1h 59m'}</Text>

                                <Text
                                    style={{
                                        ...FONTS.poppinsRegularFont,
                                        fontSize: 13,
                                        lineHeight: 15,
                                        textAlign: 'left',
                                        color: COLORS.vydstream_white,
                                        marginTop: SIZES.radius * .5,
                                        width: CARD_WIDTH * 0.7
                                    }}
                                    numberOfLines={3}
                                >"Thor love and thunder finds Thor (Chhris Hemsworth) on a journey unlike  anything he's ever faced --a quest for Love  and thunder</Text>

                                <Text
                                    style={{
                                        textAlign: 'left',
                                        color: COLORS.vydstream_button,
                                        fontSize: 15,
                                        lineHeight: 16,
                                        ...FONTS.poppinsSemiBoldFont,
                                        marginTop: SIZES.radius * .5
                                    }}
                                >{'Show More'}</Text>

                                <View
                                    style={{
                                        marginTop: SIZES.radius * 1.5,
                                        marginBottom: SIZES.padding,
                                        flexDirection: 'row',
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-start',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: SIZES.padding * 3,
                                            padding: 8,
                                            backgroundColor: COLORS.vydstream_button,
                                            elevation: 3,

                                        }}
                                    >
                                        <View
                                            style={{
                                                marginLeft: SIZES.radius * 1.5
                                            }}
                                        >
                                            <SvgImage
                                                containerStyle={{
                                                    width: `${18}px`,
                                                    height: `${18}px`,
                                                    icon_name: svgIcons.play_icon
                                                }}
                                            />
                                        </View>
                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                color: COLORS.vydstream_white,
                                                fontSize: 12,
                                                lineHeight: 14,
                                                ...FONTS.poppinsSemiBoldFont,
                                                marginLeft: SIZES.radius,
                                                marginRight: SIZES.radius * 1.5
                                            }}
                                        >{'Watch Trailer'}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-start',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: SIZES.padding * 3,
                                            padding: 8,
                                            backgroundColor: 'transparent',
                                            elevation: 3,
                                            marginLeft: SIZES.radius,
                                            borderWidth: 1,
                                            borderColor: COLORS.vydstream_white
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginLeft: SIZES.radius * 1.5
                                            }}
                                        >
                                            <SvgImage
                                                containerStyle={{
                                                    width: `${18}px`,
                                                    height: `${18}px`,
                                                    icon_name: svgIcons.plus_icon
                                                }}
                                            />
                                        </View>
                                        <Text
                                            style={{
                                                textAlign: 'left',
                                                color: COLORS.vydstream_white,
                                                fontSize: 12,
                                                lineHeight: 14,
                                                ...FONTS.poppinsSemiBoldFont,
                                                marginLeft: SIZES.radius,
                                                marginRight: SIZES.radius * 1.5
                                            }}
                                        >{'My List'}</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </LinearGradient>
                    </View>

                </View>

            </View>
        )
    }

    /*middle section */
    function renderMiddleSection() {
        return (
            <View
                style={{
                    marginBottom: SIZES.padding * 5
                }}
            >
                {/* actors */}
                <ActorsSection />

                {/* reviews */}
                <ReviewsSection />
            </View>
        )
    }

    function renderBottomSection() {
        return (
            <View
                style={{
                    position: 'absolute',
                    width: SIZES.width,
                    alignItems: 'center',
                    bottom: SIZES.radius,
                    left: 0,

                }}
            >

                <View
                    style={{
                        marginHorizontal: SIZES.radius,
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center',
                        height: 60,
                        borderRadius: SIZES.padding * 2,
                        padding: 10,
                        backgroundColor: 'rgba(116, 116, 116, 1)',
                    }}>

                    <TextInput
                        placeholder='Add Comment'
                        placeholderTextColor={COLORS.vydstream_white}
                        autoCapitalize='none'
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: COLORS.vydstream_white,
                            ...FONTS.poppinsRegularFont,
                            lineHeight: 22,
                            marginLeft: SIZES.radius * 1.5
                        }}
                    />

                    <View
                        style = {{
                            marginRight:SIZES.radius * 1.5
                        }}
                    >
                    <SvgImage
                        containerStyle={{
                            width: `${25}px`,
                            height: `${25}px`,
                            icon_name: svgIcons.send_icon
                        }} />
                    </View>

                </View>

            </View>
        )
    }

    /*actors */
    const ActorsSection = () => {

        const { actorsData } = staticData;
        const scrollX = new Animated.Value(0);

        function ActorItem({ ...props }) {
            const { actor, index } = props
            const CARD_WIDTH = SIZES.width * 0.25;
            const CARD_HEIGHT = SIZES.width * 0.25
            return (
                <View
                    style={{
                        marginLeft: SIZES.radius,
                        marginTop: SIZES.radius,
                        width: CARD_WIDTH
                    }}
                >
                    <Image
                        source={actor?.thumbnail}
                        style={{
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT,
                            marginRight: actorsData.length - 1 === index ? SIZES.padding : 0
                        }}
                        resizeMode='cover'
                    />

                    <Text
                        style={{
                            ...FONTS.poppinsSemiBoldFont,
                            fontSize: 14,
                            lineHeight: 16,
                            color: COLORS.vydstream_white,
                            marginTop: SIZES.radius
                        }}
                        numberOfLines={2}
                    >{actor?.name}</Text>

                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 13,
                            lineHeight: 15,
                            color: COLORS.vydstream_white,
                            marginTop: SIZES.radius * .5
                        }}
                        numberOfLines={1}
                    >{actor?.title}</Text>
                </View>
            )
        }

        return (
            <View
                style={{
                    marginHorizontal: SIZES.radius,
                    marginTop: SIZES.radius
                }}
            >
                <Text
                    style={{
                        ...FONTS.poppinsSemiBoldFont,
                        fontSize: 20,
                        lineHeight: 22,
                        marginTop: SIZES.radius,
                        textAlign: 'left',
                        color: COLORS.vydstream_white
                    }}
                >Cast & Crew</Text>

                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ], { useNativeDriver: false })}
                >
                    {actorsData.map((actor, index) => {
                        return (
                            <ActorItem key={index} actor={actor} index={index} />
                        )
                    })}

                </Animated.ScrollView>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >

                    <Text
                        style={{
                            ...FONTS.poppinsSemiBoldFont,
                            fontSize: 16,
                            lineHeight: 18,
                            color: COLORS.vydstream_white,
                            marginRight: SIZES.radius
                        }}

                    >Show all cast & crew</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >

                        <TouchableOpacity>

                            <SvgImage
                                containerStyle={{
                                    width: `${20}px`,
                                    height: `${20}px`,
                                    icon_name: svgIcons.chevron_down_icon
                                }}
                            />

                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    }

    const ReviewsSection = () => {
        const { reviewsData } = staticData;

        function ReviewItem({ ...props }) {
            const { review, index } = props
            return (
                <View
                    style={{
                        marginTop: SIZES.radius
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >

                        <View>
                            <Image
                                source={review?.thumbnail}
                                style={{
                                    width: SIZES.padding * 2,
                                    height: SIZES.padding * 2,
                                    borderRadius: SIZES.padding * 2
                                }}
                                resizeMode='cover'
                            />
                        </View>

                        <Text
                            style={{
                                ...FONTS.poppinsSemiBoldFont,
                                fontSize: 16,
                                lineHeight: 18,
                                color: COLORS.vydstream_white,
                                marginLeft: SIZES.radius,
                            }}
                        >{review?.name}</Text>

                    </View>

                    <Text
                        style={{
                            ...FONTS.poppinsRegularFont,
                            fontSize: 14,
                            lineHeight: 18,
                            color: COLORS.vydstream_white,
                            marginTop: SIZES.radius * 1.5
                        }}
                    >{review?.review}</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.radius
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >

                                <View>
                                    <SvgImage
                                        containerStyle={{
                                            width: `${20}px`,
                                            height: `${20}px`,
                                            icon_name: svgIcons.heart_icon
                                        }}
                                    />

                                </View>

                                <Text
                                    style={{
                                        ...FONTS.poppinsSemiBoldFont,
                                        fontSize: 13,
                                        lineHeight: 15,
                                        color: COLORS.vydstream_white,
                                        marginLeft: SIZES.radius * .5,
                                    }}
                                >{review?.likes}</Text>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: SIZES.padding
                                }}
                            >

                                <View>
                                    <SvgImage
                                        containerStyle={{
                                            width: `${20}px`,
                                            height: `${20}px`,
                                            icon_name: svgIcons.reply_icon
                                        }}
                                    />

                                </View>

                                <Text
                                    style={{
                                        ...FONTS.poppinsSemiBoldFont,
                                        fontSize: 13,
                                        lineHeight: 15,
                                        color: COLORS.vydstream_white,
                                        marginLeft: SIZES.radius * .5,
                                    }}
                                >reply</Text>

                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >

                            <View>
                                <SvgImage
                                    containerStyle={{
                                        width: `${20}px`,
                                        height: `${20}px`,
                                        icon_name: svgIcons.watch_icon
                                    }}
                                />

                            </View>

                            <Text
                                style={{
                                    ...FONTS.poppinsSemiBoldFont,
                                    fontSize: 13,
                                    lineHeight: 15,
                                    color: COLORS.vydstream_white,
                                    marginLeft: SIZES.radius * .5,
                                }}
                            >{review?.time}</Text>

                        </View>

                    </View>

                </View>
            )
        }

        return (
            <View
                style={{
                    marginHorizontal: SIZES.radius,
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        ...FONTS.poppinsSemiBoldFont,
                        fontSize: 20,
                        lineHeight: 22,
                        marginTop: SIZES.radius,
                        textAlign: 'left',
                        color: COLORS.vydstream_white
                    }}
                >1.2K Audience Reviews</Text>

                {reviewsData.map((review, index) => {
                    return (
                        <ReviewItem key={index} review={review} index={index} />
                    )
                })}

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}
                >

                    <Text
                        style={{
                            ...FONTS.poppinsSemiBoldFont,
                            fontSize: 16,
                            lineHeight: 18,
                            color: COLORS.vydstream_white,
                            marginRight: SIZES.radius
                        }}

                    >Show More reviews</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >

                        <TouchableOpacity>

                            <SvgImage
                                containerStyle={{
                                    width: `${20}px`,
                                    height: `${20}px`,
                                    icon_name: svgIcons.chevron_down_icon
                                }}
                            />

                        </TouchableOpacity>

                    </View>

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

            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                {/* render top section */}
                {renderTopSection()}

                {/* render middle section */}
                {renderMiddleSection()}
            </ScrollView>

            {/* render bottom section */}
            {renderBottomSection()}

        </SafeAreaView>
    )
}

export default MovieDetail