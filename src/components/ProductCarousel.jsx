import { FlatList, Dimensions, Image, StyleSheet, View } from 'react-native';
import { spacing } from '../screen/constants/dimensions';
import { colors } from '../screen/constants/colors';
import { useRef, useState } from 'react';
const screenWidth = Dimensions.get('window').width;

const ProductCarousel = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  //pagination
  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveSlide(viewableItems.viewableItems[0].index);
    }
  });
  return (
    <>
      <FlatList
        data={images}
        renderItem={({ item }) => {
          return (
            <View style={styles.productImagesWrapper}>
              <Image source={{ uri: item }} style={styles.productImage} />
            </View>
          );
        }}
        // important properties
        //for pagination change
        // keyExtractor={(item, index) => index}
        // no change
        keyExtractor={(item, index) => item.id}
        horizontal
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={screenWidth}
        decelerationRate={'fast'}
        // keyExtractor={(item, index) => index}
        // onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeSlide ? { width: 20, borderRadius: 32 } : null,
              {
                backgroundColor:
                  index === activeSlide ? colors.purple : colors.gray,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  productImagesWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: spacing.sm,
  },
  productImage: {
    height: 350,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: spacing.xs,
    backgroundColor: colors.gray,
  },
});
