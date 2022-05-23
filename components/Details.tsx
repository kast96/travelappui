import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from "react-native"
import { RootStackParamList } from "../App"
import colors from "../assets/colors/colors"
import Entyto from 'react-native-vector-icons/Entypo'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

Entyto.loadFont()

export const Details = () => {
	const route = useRoute<RouteProp<RootStackParamList, 'Details'>>()
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Details'>>()

	return (
		<View style={styles.container}>
			<ImageBackground source={route.params.item.imageBig} style={styles.background} imageStyle={styles.backgroundImage} resizeMode="cover" />
			<TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
				<Entyto name={'chevron-left'} size={32} color={colors.white} />
			</TouchableOpacity>
			<View style={styles.contentWrapper}>
				<View style={styles.titlesWrapper}>
					<Text style={styles.itemTitle}>{route.params.item.title}</Text>
					<View style={styles.locationWrapper}>
						<Entyto name={'location-pin'} size={24} color={colors.white} />
						<Text style={styles.locationText}>{route.params.item.location}</Text>
					</View>
				</View>
				<View style={styles.descriptionWrapper}>
					<View style={styles.heartWrapper}>
						<Entyto name={'heart'} size={32} color={colors.orange} />
					</View>
					<View style={styles.descriptionTextWrapper}>
						<Text style={styles.descriptionTitle}>Description</Text>
						<Text style={styles.descriptionText}>{route.params.item.description}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<View style={styles.infoItem}>
							<Text style={styles.infoTitle}>Price</Text>
							<View style={styles.infoTextWrapper}>
								<Text style={styles.infoText}>${route.params.item.price}</Text>
								<Text style={styles.infoSubText}>/person</Text>
							</View>
						</View>
						<View style={styles.infoItem}>
							<Text style={styles.infoTitle}>Rating</Text>
							<View style={styles.infoTextWrapper}>
								<Text style={styles.infoText}>{route.params.item.rating}</Text>
								<Text style={styles.infoSubText}>/5</Text>
							</View>
						</View>
						<View style={styles.infoItem}>
							<Text style={styles.infoTitle}>Duration</Text>
							<View style={styles.infoTextWrapper}>
								<Text style={styles.infoText}>{route.params.item.duration}</Text>
								<Text style={styles.infoSubText}> hours</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('You booked a trip!')}>
						<Text style={styles.buttonText}>Book Nor</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
		height: height * 0.6,
  },
	backIcon: {
		marginLeft: 20,
		marginTop: 60,
	},
	contentWrapper: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
	descriptionWrapper: {
		flex: 1,
		backgroundColor: colors.white,
		borderRadius: 25,
		width: '100%',
		minHeight: height * 0.5,
	},
	titlesWrapper: {
		marginHorizontal: 20,
		marginBottom: 20,
	},
	itemTitle: {
		fontFamily: 'Nunito-Bold',
		fontSize: 32,
		color: colors.white,
	},
	locationWrapper: {
		flexDirection: 'row',
		alignItems: "center",
		marginTop: 10,
	},
	locationText: {
		fontFamily: 'Nunito-Bold',
		fontSize: 16,
		color: colors.white,
	},
	heartWrapper: {
		position: 'absolute',
		right: 40,
		top: -30,
		width: 64,
		height: 64,
		backgroundColor: colors.white,
		borderRadius: 64,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	descriptionTextWrapper: {
		marginTop: 30,
		marginHorizontal: 20,
	},
	descriptionTitle: {
		fontFamily: 'Nunito-Bold',
		fontSize: 24,
		color: colors.black,
	},
	descriptionText: {
		marginTop: 20,
		fontFamily: 'Nunito-Regular',
		fontSize: 16,
		color: colors.darkGray,
		height: 85,
	},
	infoWrapper: {
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 20,
		justifyContent: 'space-between',
	},
	infoItem: {

	},
	infoTitle: {
		fontFamily: 'Nunito-Bold',
		fontSize: 12,
		color: colors.gray,
		textTransform: 'uppercase',
	},
	infoTextWrapper: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginTop: 5,
	},
	infoText: {
		fontFamily: 'Nunito-Bold',
		fontSize: 24,
		color: colors.orange,
	},
	infoSubText: {
		fontFamily: 'Nunito-Bold',
		fontSize: 14,
		color: colors.gray,
	},
	buttonWrapper: {
		marginHorizontal: 20,
		marginTop: 40,
		backgroundColor: colors.orange,
		alignItems: 'center',
		paddingVertical: 15,
		borderRadius: 10,
	},
	buttonText: {
		fontFamily: 'Nunito-Bold',
		fontSize: 18,
		color: colors.white,
	},
})