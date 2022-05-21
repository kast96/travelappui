import { RouteProp, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParamList } from "../App"

export const Details = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>()

  return (
    <View style={{paddingTop: 40}}>
      <Text>Details: {route.params.item.title}</Text>
    </View>
  )
}