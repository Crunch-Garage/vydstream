import { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	Platform,
	StatusBar,
	Text,
	TextInput,
	ScrollView,
	FlatList,
	Image
} from 'react-native'
import { RoundButton, SvgImage } from '../components';
import { COLORS, svgIcons, SIZES, FONTS, staticData } from '../constants';

function FavoriteGenre({ navigation, route }) {

	const [data, setData] = useState({
		favoriteGenres: []
	})

	useEffect(() => {

	}, [])
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
						justifyContent: 'flex-end',
						marginBottom: SIZES.radius
					}}
				>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginHorizontal: SIZES.padding
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate('HomeScreen')}
							style={{
								width: 35,
								height: 35,
							}}
						>

							<SvgImage
								containerStyle={{
									width: `${25}px`,
									height: `${25}px`,
									icon_name: svgIcons.close_icon
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
		function MovieGenre({ ...props }) {
			const CARD_HEIGHT = SIZES.width * 0.65;
			const CARD_WIDTH = SIZES.width * 0.45;
			return (
				<TouchableOpacity
					onPress={() => toggleFavorites(props?.item)}
					style={{
						marginLeft: SIZES.radius,
						marginTop: SIZES.radius,
					}}
				>
					<Image
						source={props?.item?.thumbnail}
						style={{
							width: CARD_WIDTH,
							height: CARD_HEIGHT,
							borderRadius: SIZES.radius
						}}
						resizeMode='cover'
					/>

					<View
						style={{
							width: CARD_WIDTH,
							height: CARD_HEIGHT,
							borderRadius: SIZES.radius,
							position: 'absolute',
							top: 0,
							left: 0,
							backgroundColor: checkInterestExist(props?.item) ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
						}}
					>

						<View
							style={{
								alignSelf: 'center',
								marginTop: CARD_HEIGHT * 0.4
							}}
						>
							{checkInterestExist(props?.item) &&
								<SvgImage
									containerStyle={{
										width: `${50}px`,
										height: `${50}px`,
										icon_name: svgIcons.check_list_icon
									}}
								/>
							}
						</View>

					</View>

					<View
						style={{
							alignSelf: 'flex-start',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: SIZES.padding * 3,
							padding: 8,
							backgroundColor: COLORS.vydstream_button,
							elevation: 3,
							marginLeft: SIZES.radius,
							position: 'absolute',
							bottom: SIZES.radius
						}}
					>
						<Text
							style={{
								textAlign: 'left',
								color: COLORS.vydstream_white,
								fontSize: 12,
								lineHeight: 14,
								...FONTS.poppinsSemiBoldFont
							}}
						>{props.item?.name}</Text>
					</View>

				</TouchableOpacity>

			)
		}

		return (
			<View>
				<View
					style={{
						marginBottom: SIZES.padding * 5
					}}
				>

					<Text
						style={{
							fontSize: 30,
							lineHeight: 36,
							...FONTS.poppinsSemiBoldFont,
							marginTop: SIZES.padding,
							textAlign: 'left',
							color: COLORS.vydstream_white,
							marginHorizontal: SIZES.radius,

						}}
					>What's your favorite movie genre.</Text>

					<FlatList
						showsVerticalScrollIndicator={false}
						data={staticData.genreData}
						keyExtractor={item => `${item.id}`}
						renderItem={({ item, index }) => {
							return (
								<MovieGenre item={item} />
							)
						}}
						numColumns={2}
					/>

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
					onPress={() => navigation.navigate('HomeScreen')}
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
					title={'Start Watching!'}
				/>

			</View>
		)
	}

	/*check if movie genre exists in favorite array */
	function checkInterestExist(genre) {
		const { favoriteGenres } = data;
		if (genre !== null && genre) {
			if (favoriteGenres.filter(item => item?.id === genre?.id)[0]) {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}

	/*update favorite movie genre */
	function toggleFavorites(genre) {
		const { favoriteGenres } = data;
		let interestArray = favoriteGenres

		if (genre !== null && genre) {
			let filter = interestArray.filter(item => item?.id === genre?.id)[0]
			if (filter) {
				/*if genre already exists then remove it from favorite genre array */
				for (var i = 0; i < interestArray.length; i++) {
					if (interestArray[i]?.id === genre?.id) {
						interestArray.splice(i, 1);
						setData({ ...data, favoriteGenres: interestArray })
					}
				}
			} else {
				/*if genre  does not exist add it to favorite movie genre*/
				interestArray.push(genre);
				setData({ ...data, favoriteGenres: interestArray })
			}
		}
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

export default FavoriteGenre