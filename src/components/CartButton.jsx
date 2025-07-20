import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../screen/constants/colors';
import { fontSize, spacing } from '../screen/constants/dimensions';
import { fontFamily } from '../screen/constants/fonts';

const CartButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8743FF', '#4136F1']}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={styles.addToCartButton}
      >
        <Ionicons
          name={'cart-outline'}
          color={colors.background}
          size={spacing.md}
        />

        <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </LinearGradient>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  addToCartText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.md,
  },
  addToCartButton: {
    width: '90%',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: spacing.md,
    gap: spacing.sm,
  },
});
