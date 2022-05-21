import { useNavigation } from "@react-navigation/native"
import { Button, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../App";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from "../assets/data/activitiesData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import discoverData, { discoverDataType } from "../assets/data/discoverData";
import learnMoreData from "../assets/data/learnMoreData";
import person from "../assets/images/person.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

Feather.loadFont()
Entypo.loadFont()

export const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()

  const renderCategoriesItem = ({item}) => {
    return (
      <Text style={[styles.discoverCategoryText, {color: (item.id === 'discover-categories-1') ? colors.orange : colors.gray}]}>{item.text}</Text>
    )
  }

  const renderDiscoverItem: React.FC<{item: discoverDataType}> = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item})} style={[styles.discoverItem, {marginLeft: item.id === 'discover-1' ? 20 : 0}]}>
        <ImageBackground source={item.image} style={styles.discoverItemBg} imageStyle={styles.discoverItemBgImage} resizeMode="cover" />
        <View style={styles.discoverItemContentWrapper}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name={'location-pin'} size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const renderActivityItem = ({item}) => {
    return (
      <View style={[styles.activityItemWrapper, {marginLeft: item.id === 'activities-1' ? 20 : 0}]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <View style={[styles.learnMoreItem, {marginLeft: item.id === 'learnMore-1' ? 20 : 0}]}>
        <ImageBackground source={item.image} style={styles.learnMoreItemBg} imageStyle={styles.learnMoreItemBgImage} resizeMode="cover" />
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather name={'menu'} size={32} color={colors.black} style={styles.menuIcon} />
            <Image source={person} style={styles.profileImage} />
          </View>
        </SafeAreaView>
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <FlatList
              data={discoverCategoriesData}
              renderItem={renderCategoriesItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={discoverData}
            renderItem={renderDiscoverItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  discoverItemBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  discoverItemBgImage: {
    borderRadius: 20,
  },
  discoverItemContentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  discoverItemTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  learnMoreItemBgImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
})