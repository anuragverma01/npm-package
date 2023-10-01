import {
  StyleSheet,
  Text,
  View,
  FlexAlignType,
  DimensionValue,
} from "react-native";
import React from "react";
interface IndexProps {
  alignItems?: FlexAlignType;
  alignContent?: any;
  alignSelf?: FlexAlignType;
  fontSize?: number;
  fontWeight?: any;
  width?: DimensionValue;
  height?: DimensionValue;
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
  childern: any;
}

const UIText: React.FC<IndexProps> = ({
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
  childern,
}) => {
  const styles = StyleSheet.create({
    UIText: {
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
      <Text style={styles.UIText}>{childern}</Text>
    </View>
  );
};

export default UIText;
