import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import { fontSize, IconSize, spacing } from './constants/dimensions';
import { colors } from './constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fontFamily } from './constants/fonts';
import { useState } from 'react';
import CartButton from '../components/CartButton';

const colorsData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2',
  },
  {
    colorName: 'Bright Orange',
    colorValue: '#F25745',
  },
  {
    colorName: 'Starlight',
    colorValue: '#FAF6F2',
  },
];

const ProductDetailScreen = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTabs, setSelectedTabs] = useState('Details');
  const item = useRoute().params.item;
  // console.log("item: ", item);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroolViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <ProductCarousel images={item.images} />
        {/* content stuff */}
        <View style={styles.titleContainer}>
          {/* Title wrapper */}
          <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>
          {/* rating wrapper */}
          <View style={styles.ratingWrapper}>
            <AntDesign name={'star'} color={colors.yellow} size={IconSize.sm} />
            <Text style={styles.ratingValue}>4.5</Text>
          </View>
        </View>
        {/* color container */}
        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>
          {/* inside this view we gonna render all the colors card */}
          <FlatList
            data={colorsData}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.selectColorContainer,
                    item.colorValue === selectedColor && {
                      borderColor: colors.purple,
                    },
                    // {
                    //   borderColor: colors.purple,
                    // },
                  ]}
                  onPress={() => {
                    setSelectedColor(item.colorValue);
                  }}
                >
                  <View
                    style={[
                      styles.circleColor,
                      {
                        backgroundColor: item.colorValue,
                      },
                    ]}
                  />
                  <Text style={styles.colorText}>{item.colorName}</Text>
                </TouchableOpacity>
              );
            }}
            horizontal
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: spacing.sm,
                }}
              />
            )}
          />
        </View>
        {/* details and review */}
        <View style={styles.detailsReviewTabs}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabs('Details');
            }}
          >
            <Text
              style={[
                styles.tabText,
                selectedTabs === 'Details' && {
                  color: colors.purple,
                },
              ]}
            >
              Details
            </Text>
            {selectedTabs === 'Details' && <View style={styles.underline} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabs('Review');
            }}
          >
            <Text
              style={[
                styles.tabText,
                selectedTabs === 'Review' && {
                  color: colors.purple,
                },
              ]}
            >
              Review
            </Text>
            {selectedTabs === 'Review' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>
        {/* content view */}
        <Text style={styles.detailContent}>
          {selectedTabs === 'Details' ? item.details : item.review}
        </Text>
      </ScrollView>
      {/* add to cart button */}
      <CartButton />
    </View>
  );
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scroolViewContainer: {
    paddingTop: spacing.xl,
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    color: colors.black,
    fontSize: fontSize.lg,
  },
  brand: {
    fontFamily: fontFamily.Meduim,
    color: colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.lavendar,
    borderRadius: spacing.md,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  ratingValue: {
    color: colors.gray,
    fontFamily: fontFamily.Meduim,
    fontSize: fontSize.md,
  },
  colorContainer: {
    paddingTop: spacing.md,
    // paddingBottom: spacing.md,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  parentSelectColorContainer: {},
  selectColorContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontFamily: fontFamily.Meduim,
    fontSize: fontSize.sm,
    color: colors.black,
  },
  detailsReviewTabs: {
    flexDirection: 'row',
    paddingTop: spacing.md,
    gap: spacing.lg,
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Meduim,
    color: colors.gray,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.sm,
  },
  detailContent: {
    color: colors.gray,
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
    paddingBottom: 200,
  },
});
