import {  FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { fontSize, spacing } from '../screen/constants/dimensions';
import { fontFamily } from '../screen/constants/fonts';
import { colors } from '../screen/constants/colors';
import { category } from '../data/category';
// import { useState } from 'react';


const Category = ({ selectedCategory, handleUpdateCategory }) =>  {

    return (
      <FlatList data={category} renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => {
          handleUpdateCategory(item.name);
        }}>
        <Text style={[styles.categoryText, selectedCategory === item.name && {color: colors.purple,},]}>{item.name}</Text>
        {/* borderBottom for select category */}
        {selectedCategory === item.name && <View style={styles.underline} />}
      </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      ItemSeparatorComponent={
        <View style={{paddingHorizontal:spacing.sm}} />
      }
      showsHorizontalScrollIndicator={false}
      />
    );
  };

  export default Category;

const styles = StyleSheet.create({
    categoryText: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold,
        color: colors.gray,
    },
    underline: {
      borderBottomColor:colors.purple,
      borderBottomWidth: 2,
      width: "50%",
      marginTop: spacing.sm,
    },
});

