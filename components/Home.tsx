import { Button, Text, View } from "react-native"

export const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Details")} title={'To Details'} />
    </View>
  )
}