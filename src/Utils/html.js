import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { COLOR } from '../Utils/Theme';
// Component for vertically and horizontally centering its children
export const VHcenter = (props) => { return (<View style={[cssclass.vhCenter, props.style]}>{props.children}</View>) }
// Heading component styles
export const H1 = (props) => { return (<Text style={[cssclass.h1, props.style]}>{props.children}</Text>) }
export const H2 = (props) => { return (<Text style={[cssclass.h2, props.style]}>{props.children}</Text>) }
export const H3 = (props) => { return (<Text style={[cssclass.h3, props.style]}>{props.children}</Text>) }
// Label component style
export const Label = (props) => { return (<Text style={[cssclass.Label, props.style]}>{props.children}</Text>) }
// Styles for various components
export const cssclass = StyleSheet.create({
   // General test style
   test: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingHorizontal: 1,
      paddingVertical: 1,
      marginHorizontal: 1,
      marginVertical: 1,
      borderBottomColor: "green",
      borderBottomWidth: 2,
      textAlign: "left",
      textTransform: "capitalize",
      backgroundColor: "green",
      fontStyle: 'italic',
      fontWeight: "600",
      lineHeight: 17,
      fontSize: 18,
   },
   // SafeAreaView style
   safeareaview: {
      flex: 1,
   },
   // Heading styles
   h1: {
      marginBottom: 8,
      color: COLOR.White1,
      fontSize: 40,
      lineHeight: 45,
      fontWeight: "600",
   },
   h2: {
      marginBottom: 7,
      color: COLOR.White1,
      fontSize: 35,
      lineHeight: 40,
      fontWeight: "600",
   },
   h3: {
      marginBottom: 6,
      color: COLOR.White1,
      fontSize: 30,
      lineHeight: 35,
      fontWeight: "600",
   },
   // Label style
   Label: {
      fontSize: 15,
      color: COLOR.White1,
   },
   // Vertical and horizontal centering style
   vhCenter: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   // Styles for displaying "No Data" message
   nodataWrap: {
      paddingHorizontal: 20,
      paddingTop: 20
   },
   nodata: {
      marginBottom: 6,
      paddingHorizontal: 10,
      paddingVertical: 10,
      color: COLOR.White1,
      textAlign: "center",
      borderWidth: 1,
      borderColor: COLOR.Black2,
      borderRadius: 5,
      backgroundColor: COLOR.Black2,
      overflow: 'hidden'
   },
   // Styles for a shadowed box column in a FlatList
   shodowBoxcol: {
      padding: 5,
      width: '50%'
   },
   // Styles for a shadowed box in a FlatList
   shodowBox: {
      backgroundColor: COLOR.Black2,
      padding: 5,
      height: 150
   },
   // Styles for the search bar wrapper
   searchwrap: {
      marginTop: 20,
   },
   searchinput: {
      color: COLOR.Black1,
      height: 50,
      margin: 10,
      paddingLeft: 10,
      paddingRight: 80,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 20,
      backgroundColor: COLOR.White1,
      borderRadius: 5,
      overflow: 'hidden'
   },
   searchbtnwrap: {
      backgroundColor: COLOR.Red,
      bottom: 10,
      right: 10,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      position: 'absolute',
      padding: 13
   },
   closebtnwrap: {
      bottom: 22,
      right: 65,
      position: 'absolute'
   },
   // Styles for the FlatList wrapper
   flatelistwrap: {
      flex: 1,
      marginHorizontal: 10,
      paddingBottom: 10
   }

});

