import { Link } from "expo-router";
import { Text, View } from "react-native";
import profiles from "./profiles"
import explore from "./explore"
import properties from "../properties/[id]"
import '../../../global.css'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Link className='font-bold' href='profiles'>Profiles</Link>
      <Link href='explore'>Explore</Link>
      <Link href='properties/1'>Properties</Link>
      
    </View>
  );
}
