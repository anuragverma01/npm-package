# React Native NPM PACKAGE

# AUTHOR: 
YUVRAJ

# React Native Custom Text Package

# Get Started

 yarn add package-name

# Import module as 
  import UIText from "react-native-customtext-v1"
# Example usage:

import {View} from 'react-native';
import React from 'react';
import UIText from 'react-native-customtext-v1';
const Screen = () => {
  return (
    <View>
      <UIText
        Texttitle="any"
        width={50}
        height={50}
        backgroundColor="#f00"
        position="absolute"
        alignSelf="center"
      />
    </View>
  );
};

export default Screen; 

#PROPS
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
