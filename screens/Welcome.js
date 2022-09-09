import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Image, Platform, SafeAreaView, View, StatusBar, Animated, FlatList, Text, TouchableOpacity } from 'react-native'
import { RoundButton } from '../components';
import { COLORS, FONTS, SIZES, staticData } from '../constants'

function Welcome({ navigation, route}) {

    const scrollX = new Animated.Value(0);

    function MovieItem({ ...props }) {
        const { movie, index, array_length } = props;
        return (

            <Image
                source={movie?.thumbnail}
                style={{
                    width: SIZES.width * 0.35,
                    height: SIZES.width * 0.55,
                    marginLeft: SIZES.radius,
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    marginRight: array_length.length - 1 === index ? SIZES.padding : 0
                }}
                resizeMode='cover'
            />
        )
    }

    function MovieAlbum({ ...props }) {
        const { movies } = props;

        return (
            <View>

                {/*Top sections animated scrollview */}
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
                    {movies.slice(0, 5).map((movie, index) => {
                        const array_length = movies.slice(0, 4)
                        return (
                            <MovieItem
                                key={index}
                                movie={movie}
                                index={index}
                                array_length={array_length}
                            />
                        )
                    })}

                </Animated.ScrollView>

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
                    {movies.slice(5, 9).map((movie, index) => {
                        const array_length = movies.slice(0, 4)
                        return (
                            <MovieItem
                                key={index}
                                movie={movie}
                                index={index}
                                array_length={array_length}
                            />
                        )
                    })}

                </Animated.ScrollView>

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
                    {movies.slice(7, 13).map((movie, index) => {
                        const array_length = movies.slice(0, 4)
                        return (
                            <MovieItem
                                key={index}
                                movie={movie}
                                index={index}
                                array_length={array_length}
                            />
                        )
                    })}

                </Animated.ScrollView>

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
                    {movies.slice(0, 4).map((movie, index) => {
                        const array_length = movies.slice(0, 4)
                        return (
                            <MovieItem
                                key={index}
                                movie={movie}
                                index={index}
                                array_length={array_length}
                            />
                        )
                    })}

                </Animated.ScrollView>

            </View>

        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.vydstream_white
            }}
        >

            {/*display backgound movies*/}
            <View
                style={{
                    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
                }}
            >

                <MovieAlbum
                    movies={staticData.moviesData}
                />

            </View>


            <View
                style={{
                    position: 'absolute',
                    width: SIZES.width,
                    bottom: 0,
                    left: 0,
                }}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['transparent', '#000', '#000']}
                    style={{
                        width: '100%'
                    }}
                >
                    <View style={{
                        marginHorizontal: SIZES.padding,
                    }}>

                        <Text
                            style={{
                                ...FONTS.pacificoRegularFont,
                                fontSize: 34,
                                lineHeight: 50,
                                color: COLORS.vydstream_button,
                                marginTop: SIZES.padding * 2
                            }}
                        >VydStream</Text>

                        <View style={{
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}>

                            <Text
                                style={{
                                    ...FONTS.poppinsSemiBoldFont,
                                    fontSize: 30,
                                    lineHeight: 34,
                                    color: COLORS.vydstream_white,
                                    marginTop: SIZES.padding * 1.5
                                }}
                            >All your favorite movies and Tv shows in one place.</Text>

                        </View>

                        <RoundButton
                        onPress = {() => navigation.navigate('LoginHome')}
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
                            title={'Get Started'}
                        />

                    </View>

                </LinearGradient>

            </View>

        </SafeAreaView>
    )
}

export default Welcome