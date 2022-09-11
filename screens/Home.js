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
	Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar, SvgImage } from '../components';
import { COLORS, svgIcons, SIZES, FONTS, staticData } from '../constants';

function Home({ navigation, route }) {

	/*top section */
	function renderTopSection() {
		const { userData } = staticData
		return (
			<View
				style={{
					marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + SIZES.radius : SIZES.radius,
					marginHorizontal: SIZES.padding / 2,
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginBottom: SIZES.radius
				}}
			>

				<View>
					<Text
						style={{
							textAlign: 'left',
							color: COLORS.vydstream_white,
							fontSize: 16,
							lineHeight: 18,
							...FONTS.poppinsRegularFont
						}}
					>Welcome Back</Text>

					<Text
						style={{
							textAlign: 'left',
							color: COLORS.vydstream_white,
							fontSize: 18,
							lineHeight: 20,
							...FONTS.poppinsSemiBoldFont,
							marginTop: SIZES.radius * 0.5
						}}
					>{userData?.name}</Text>

				</View>

				<View>
					<Image
						source={userData?.thumbnail}
						style={{
							width: SIZES.padding * 1.8,
							height: SIZES.padding * 1.8,
							borderRadius: SIZES.padding * 2
						}}
						resizeMode='cover'
					/>
				</View>

			</View>

		)
	}

	/*middle section */
	function renderMiddleSection() {

		return (
			<View
				style={{
					marginHorizontal: SIZES.radius,
					marginBottom: SIZES.padding * 6
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						marginTop: SIZES.radius,
						alignItems: 'center',
						height: 60,
						borderRadius: 5,
						padding: 10,
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
					}}>

					<SvgImage
						containerStyle={{
							width: `${25}px`,
							height: `${25}px`,
							icon_name: svgIcons.search_icon
						}} />

					<TextInput
						placeholder='Search videos, movies...'
						placeholderTextColor={COLORS.vydstream_white}
						autoCapitalize='none'
						style={{
							flex: 1,
							fontSize: 16,
							color: COLORS.vydstream_white,
							...FONTS.poppinsRegularFont,
							lineHeight: 22,
							marginLeft: SIZES.radius
						}}
					/>

				</View>

				{/* trending movies */}
				<TrendingMovies />

				{/* continue watching movies */}
				<ContinueWatching />

				{/* most watched */}
				<MostWatched />

			</View>
		)
	}

	/*tending movies */
	const TrendingMovies = () => {

		const { moviesData } = staticData;
		const trendingMovies = moviesData.slice(0, 3)
		const scrollX = new Animated.Value(0);

		/*trending movie item */
		function TrendingMovie({ ...props }) {
			const { movie, index, } = props;
			const CARD_WIDTH = SIZES.width * 0.9;
			const CARD_HEIGHT = SIZES.width * 0.65;
			return (

				<View
					style={{
						marginLeft: SIZES.radius,
						marginTop: SIZES.radius * 1.5,
						borderRadius: SIZES.radius,
						marginRight: trendingMovies.length - 1 === index ? SIZES.padding : 0
					}}
				>
					<Image
						source={movie?.thumbnail}
						style={{
							width: CARD_WIDTH,
							height: CARD_HEIGHT,
							borderRadius: SIZES.radius,
						}}
						resizeMode='cover'
					/>

					<View
						style={{
							position: 'absolute',
							width: CARD_WIDTH,
							height: CARD_HEIGHT,
							borderRadius: SIZES.radius,
							backgroundColor: 'rgba(0, 0 ,0 , 0.3)'
						}}
					>

						<View
							style={{
								marginHorizontal: SIZES.padding,
								position: 'absolute',
								bottom: SIZES.radius * 1.5
							}}
						>
							<Text
								style={{
									...FONTS.poppinsSemiBoldFont,
									fontSize: 25,
									lineHeight: 26,
									//marginTop: CARD_HEIGHT * 0.25,
									textAlign: 'left',
									color: COLORS.vydstream_white,
								}}
								numberOfLines={1}
							>{movie?.name}</Text>

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

							<View
								style={{
									marginTop: SIZES.radius * 1.5,
									flexDirection: 'row',
									alignItems:'center'
								}}
							>
								<TouchableOpacity
									onPress={() => navigation.navigate('MovieDetail', ({ movie_details: movie }))}
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
									>{'Play'}</Text>
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() => navigation.navigate('MovieDetail', ({ movie_details: movie }))}
									style={{
										alignSelf: 'flex-start',
										flexDirection: 'row',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: SIZES.padding * 3,
										padding: 7,
										backgroundColor: 'transparent',
										elevation: 3,
										marginLeft: SIZES.radius,
										borderWidth: .5,
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

					</View>
				</View>
			)
		}

		/*animated dots */
		function renderDots() {

			const dotPosition = Animated.divide(scrollX, SIZES.width)

			return (
				<View style={{
					marginTop: SIZES.radius,
					height: 30
				}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							height: SIZES.padding
						}}
					>
						{trendingMovies?.map((item, index) => {

							const opacity = dotPosition.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: [0.3, 1, 0.3],
								extrapolate: "clamp"
							})

							const dotSize = dotPosition.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: [SIZES.base * 1.2, SIZES.padding * 0.8, SIZES.base * 1.2],
								extrapolate: "clamp"
							})

							const dotHeight = dotPosition.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: [SIZES.base * 0.8, SIZES.base * 0.9, SIZES.base * 0.8],
								extrapolate: "clamp"
							})

							const dotColor = dotPosition.interpolate({
								inputRange: [index - 1, index, index + 1],
								outputRange: [COLORS.vydstream_white, COLORS.vydstream_button, COLORS.vydstream_white],
								extrapolate: "clamp"
							})

							return (
								<Animated.View
									key={`dot-${index}`}
									opacity={opacity}
									style={{
										borderRadius: SIZES.radius,
										marginHorizontal: 6,
										width: dotSize,
										height: dotHeight,
										backgroundColor: dotColor
									}}
								/>
							)
						})}
					</View>
				</View>
			)
		}


		return (
			<View>
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

					{
						trendingMovies?.map((item, index) => {
							return (
								<TrendingMovie key={index} movie={item} index={index} />
							)
						})
					}

				</Animated.ScrollView>

				{/* render dots */}
				{renderDots()}
			</View>
		)
	}

	/*continue watching */
	const ContinueWatching = () => {

		const { moviesData } = staticData;
		const movies = moviesData.slice(4, 8)
		const scrollX = new Animated.Value(0);

		function MovieItem({ ...props }) {
			const { movie, index } = props;
			const CARD_WIDTH = SIZES.width * 0.4;
			const CARD_HEIGHT = SIZES.width * 0.6;
			return (
				<TouchableOpacity
					onPress={() => navigation.navigate('MovieDetail', ({ movie_details: movie }))}
					style={{
						marginLeft: SIZES.radius,
						marginTop: SIZES.radius,
						borderRadius: SIZES.radius,
					}}
				>
					<Image
						source={movie?.thumbnail}
						style={{
							width: CARD_WIDTH,
							height: CARD_HEIGHT,
							borderRadius: SIZES.radius,
							marginRight: movies.length - 1 === index ? SIZES.padding : 0
						}}
						resizeMode='cover'
					/>
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
							colors={['transparent', '#000']}
							style={{
								width: '100%',
								borderBottomRightRadius: SIZES.radius,
								borderBottomLeftRadius: SIZES.radius
							}}
						>
							<View style={{
								alignItems: 'center',
								marginHorizontal: SIZES.radius
							}}>

								<Text
									style={{
										...FONTS.poppinsSemiBoldFont,
										fontSize: 14,
										lineHeight: 16,
										color: COLORS.vydstream_white,
										marginTop: SIZES.padding * 2
									}}
									numberOfLines={1}
								>{movie?.name}</Text>

								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										marginBottom: SIZES.padding,
										marginHorizontal: SIZES.radius
									}}
								>
									<ProgressBar
										containerStyle={{
											marginTop: SIZES.radius
										}}
										barStyle={{
											height: 3
										}}
										barPercentage={movie?.watchingprogress}
									/>
								</View>



							</View>

						</LinearGradient>

					</View>
				</TouchableOpacity>

			)
		}

		return (
			<View>
				<Text
					style={{
						...FONTS.poppinsSemiBoldFont,
						fontSize: 20,
						lineHeight: 22,
						marginTop: SIZES.radius,
						textAlign: 'left',
						color: COLORS.vydstream_white
					}}
				>Continue Watching</Text>

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
					{movies.map((movie, index) => {
						return (
							<MovieItem
								key={index}
								movie={movie}
								index={index}
							/>
						)
					})}

				</Animated.ScrollView>


			</View>
		)
	}

	/*Most watched */
	const MostWatched = () => {
		const { moviesData } = staticData;
		const movies = moviesData.slice(9, 15)
		const scrollX = new Animated.Value(0);

		function MovieItem({ ...props }) {
			const { movie, index } = props;
			const CARD_WIDTH = SIZES.width * 0.4;
			const CARD_HEIGHT = SIZES.width * 0.6;
			return (
				<TouchableOpacity
					onPress={() => navigation.navigate('MovieDetail', ({ movie_details: movie }))}
					style={{
						marginLeft: SIZES.radius,
						marginTop: SIZES.radius,
						borderRadius: SIZES.radius,
					}}
				>
					<Image
						source={movie?.thumbnail}
						style={{
							width: CARD_WIDTH,
							height: CARD_HEIGHT,
							borderRadius: SIZES.radius,
							marginRight: movies.length - 1 === index ? SIZES.padding : 0
						}}
						resizeMode='cover'
					/>
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
							colors={['transparent', '#000']}
							style={{
								width: '100%',
								borderBottomRightRadius: SIZES.radius,
								borderBottomLeftRadius: SIZES.radius
							}}
						>
							<View style={{
								alignItems: 'center',
								marginHorizontal: SIZES.radius,
								marginBottom: SIZES.padding,
							}}>

								<Text
									style={{
										...FONTS.poppinsSemiBoldFont,
										fontSize: 14,
										lineHeight: 16,
										color: COLORS.vydstream_white,
										marginTop: SIZES.padding * 2
									}}
									numberOfLines={1}
								>{movie?.name}</Text>


							</View>

						</LinearGradient>

					</View>
				</TouchableOpacity>

			)
		}

		return (
			<View
				style={{
					marginTop: SIZES.padding
				}}
			>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between'
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
					>Most Watched</Text>

					<Text
						style={{
							...FONTS.poppinsSemiBoldFont,
							fontSize: 15,
							lineHeight: 16,
							marginTop: SIZES.radius,
							textAlign: 'left',
							color: COLORS.vydstream_white
						}}
					>{`See all`}</Text>
				</View>

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
					{movies.map((movie, index) => {
						return (
							<MovieItem
								key={index}
								movie={movie}
								index={index}
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
				backgroundColor: COLORS.vydstream_primary
			}}
		>
			{/* render top section */}
			{renderTopSection()}

			<ScrollView
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
			>

				{/*render middle section */}
				{renderMiddleSection()}

			</ScrollView>

		</SafeAreaView>
	)
}

export default Home