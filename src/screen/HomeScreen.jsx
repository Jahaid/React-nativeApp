import {
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { spacing, fontSize, IconSize } from './constants/dimensions';
import { colors } from './constants/colors';
import { fontFamily } from './constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import { smartWatch } from '../data/smartwatch';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headline}>Find your suitable watch now</Text>
            {/* search input */}
            <View style={styles.mainInputContainer}>
              {/* input container */}
              <View style={styles.inputWrapper}>
                {/* icon */}
                <Image
                  source={require('../assets/Search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              {/* category container */}
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../assets/Category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category />
          </>
        }
        data={smartWatch}
        renderItem={({ item, index }) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: 200,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    // padding: spacing.lg,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    width: IconSize.md,
    height: IconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Meduim,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
