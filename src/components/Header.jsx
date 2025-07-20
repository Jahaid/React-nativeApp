import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { IconSize } from '../screen/constants/dimensions';
import {useNavigation} from "@react-navigation/native";


const Header = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name={"arrow-back"} size={IconSize.md} />
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name={"heart-o"} size={IconSize.md} />
        </TouchableOpacity>
      </View>
    );
  };
export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

