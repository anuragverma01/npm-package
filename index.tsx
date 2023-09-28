import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface IndexProps {
  alignItems?: any;
  alignContent?: any;
  alignSelf?: any;
  fontSize?: number;
  fontWeight?: any;
  width?: any;
  height?: any;
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  position?: "absolute" | "relative";
  Texttitle: string;
}

const Index: React.FC<IndexProps> = ({
  alignItems,
  alignContent,
  alignSelf,
  fontSize,
  fontWeight,
  width,
  height,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  margin,
  marginHorizontal,
  marginVertical,
  padding,
  paddingVertical,
  paddingHorizontal,
  position,
  Texttitle,

  ...restProps
}) => {
  const styles = StyleSheet.create({
    text: {
      alignItems,
      alignContent,
      alignSelf,
      fontSize,
      fontWeight,
      width,
      height,
      backgroundColor,
      borderRadius,
      borderColor,
      borderWidth,
      margin,
      marginHorizontal,
      marginVertical,
      padding,
      paddingVertical,
      paddingHorizontal,
      position,
    },
  });
  return (
    <View>
      <Text style={styles.text} {...restProps}>
        {Texttitle}
      </Text>
    </View>
  );
};

export default Index;
