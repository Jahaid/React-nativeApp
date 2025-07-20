import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../screen/constants/colors';
import { fontSize, spacing } from '../screen/constants/dimensions';
import { fontFamily } from '../screen/constants/fonts';
import {useNavigation} from "@react-navigation/native";



// const imageUrl = "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/309326_0_id9ty6.png";
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const handleProductDetailsScreen = () => {
    navigation.navigate("PRODUCT_DETAILS", {item});
  };
    return (
      <TouchableOpacity style={styles.container}
      onPress={handleProductDetailsScreen}>
        <View style={styles.imageWrapper}>
            <Image source={{uri: item.image}}style={styles.productImage} />
        </View>
        {/* content like name price */}
        <View style={styles.contentContainer}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  export default ProductCard;


const styles = StyleSheet.create({
    container: {
        width: "48%",
        // height: 150,
        elevation: 5,
        backgroundColor: colors.background,
        borderRadius: 12,
        marginVertical: spacing.md,
    },
    imageWrapper: {
        borderRadius: 12,
        backgroundColor: "#FFC8B7",
        margin: spacing.sm,
    },
    productImage: {
        height: 120,
        width: "100%",
        resizeMode: "center",
    },
    contentContainer:{
      paddingHorizontal: spacing.md,
      paddingBottom: spacing.md,
    },
    name:{
      color: colors.black,
      fontSize: fontSize.md,
      fontFamily: fontFamily.SemiBold,
    },
    brand: {
      color: colors.gray,
      fontSize: fontSize.sm,
      fontFamily: fontFamily.md,
      paddingVertical: spacing.xs,
    },
    price: {
      color: colors.purple,
      fontSize: fontSize.md,
      fontFamily: fontFamily.Meduim,
    },
})
