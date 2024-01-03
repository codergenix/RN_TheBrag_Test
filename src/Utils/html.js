import React from 'react';
import { Linking, View, Text, StyleSheet, ImageBackground, TouchableHighlight, ActivityIndicator } from 'react-native';
import { COLOR } from '../Utils/Theme';




export const BodyImage = (props) => { return (<ImageBackground source={props.url} resizeMode="cover" style={cssclass.bodyImage}><View style={[cssclass.bodyImageoverlay, { backgroundColor: props.overlay ? `rgba(0,0,0,${props.overlay})` : 'rgba(0,0,0,0.7)' }]}>{props.children}</View></ImageBackground>) }
export const BtnDefault = (props) => {
   return (<TouchableHighlight onPress={props.onPress} disabled={props.disabled}>
      <View style={props.disabled ? cssclass.button_disable : cssclass.button}>{props.loading && (<ActivityIndicator size="small" color={props.disabled ? COLOR.dark4 : COLOR.White1} style={{ marginRight: 8 }} />)}<Text style={props.disabled ? cssclass.button_disable_text : cssclass.button_text}>{props.title}</Text></View>
   </TouchableHighlight>)
}

export const Hline = (props) => { return (<View style={[cssclass.hline, props.style]}></View>) }
export const Row = (props) => { return (<View style={[cssclass.row, props.style]}>{props.children}</View>) }
export const Col = (props) => { return (<View style={[cssclass.col, props.style]}>{props.children}</View>) }

export const Center = (props) => { return (<View style={[cssclass.center, props.style]}>{props.children}</View>) }
export const VHcenter = (props) => { return (<View style={[cssclass.vhCenter, props.style]}>{props.children}</View>) }
export const FormGroup = (props) => { return (<View style={[cssclass.formGorup, props.style]}>{props.children}</View>) }
export const Shadowbox = (props) => { return (<View style={[cssclass.shodowBox, props.style]}>{props.children}</View>) }

export const H1 = (props) => { return (<Text style={[cssclass.h1, props.style]}>{props.children}</Text>) }
export const H2 = (props) => { return (<Text style={[cssclass.h2, props.style]}>{props.children}</Text>) }
export const H3 = (props) => { return (<Text style={[cssclass.h3, props.style]}>{props.children}</Text>) }
export const H4 = (props) => { return (<Text style={[cssclass.h4, props.style]}>{props.children}</Text>) }
export const H5 = (props) => { return (<Text style={[cssclass.h5, props.style]}>{props.children}</Text>) }
export const H6 = (props) => { return (<Text style={[cssclass.h6, props.style]}>{props.children}</Text>) }
export const FormLabel = (props) => { return (<Text style={[cssclass.FormLabel, props.style]}>{props.children}</Text>) }
export const Label = (props) => { return (<Text style={[cssclass.Label, props.style]}>{props.children}</Text>) }
export const Link = (props) => { return (<Text style={[cssclass.link, props.style]} onPress={() => Linking.openURL(props.href)}>{props.children}</Text>) }

export const Ol = (props) => { return (<View style={[cssclass.ol, props.style]}>{props.children}</View>) }
export const Ul = (props) => { return (<View style={[cssclass.ul, props.style]}>{props.children}</View>) }
export const Li = (props) => { return (<View style={[cssclass.li, props.style]}>{props.children}</View>) }

export const Table = (props) => { return (<View style={[cssclass.Table, props.style]}>{props.children}</View>) }
export const Tr = (props) => { return (<View style={[cssclass.Tr, props.style]}>{props.children}</View>) }
export const Th = (props) => { return (<Text style={[cssclass.Th, props.style]}>{props.children}</Text>) }
export const Td = (props) => { return (<Text style={[cssclass.Td, props.style]}>{props.children}</Text>) }

export const cssclass = StyleSheet.create({
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
   safeareaview: {
      flex: 1,
   },
   scrollView: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
   //------------- row col 
   row: {
      flexDirection: "row",
      marginHorizontal: -5,
      alignItems: "center",
   },
   col: {
      flex: 1,
      paddingHorizontal: 5,
   },
   //------------- heading 
   h1: {
      marginBottom: 8,
      color: COLOR.primarytext,
      fontSize: 40,
      lineHeight: 45,
      fontWeight: "600",
   },
   h2: {
      marginBottom: 7,
      color: COLOR.primarytext,
      fontSize: 35,
      lineHeight: 40,
      fontWeight: "600",
   },
   h3: {
      marginBottom: 6,
      color: COLOR.primarytext,
      fontSize: 30,
      lineHeight: 35,
      fontWeight: "600",
   },
   h4: {
      marginBottom: 6,
      color: COLOR.secondary,
      fontSize: 25,
      lineHeight: 30,
      fontWeight: "600",
   },
   h5: {
      marginBottom: 5,
      color: COLOR.primarytext,
      fontSize: 19,
      lineHeight: 28,
      fontWeight: "600",
   },
   h6: {
      color: COLOR.primarytext,
      fontSize: 14,
      lineHeight: 18,
      fontWeight: "500",
   },
   //-------------------
   Label: {
      fontSize: 14,
      color: COLOR.dark3,
      fontWeight: '400',
      lineHeight: 24
   },
   //-----------------
   vhCenter: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   center: {
      justifyContent: "center",
      alignItems: "center",
   },
   //------- bg images with overlay
   bodyImage: {
      flex: 1,
   },
   bodyImageoverlay: {
      flex: 1,
      padding: 15
   },
   //--------- radio checkbox 
   checkboxButton: {
      height: 45,
   },
   radioButton: {
      height: 35,
   },
   //------------- alet not data 
   nodataWrap: {
      paddingHorizontal: 20,
      paddingTop: 20
   },
   nodata: {
      marginBottom: 6,
      paddingHorizontal: 10,
      paddingVertical: 10,
      color: COLOR.primarytext,
      textAlign: "center",
      borderWidth: 1,
      borderColor: COLOR.info2,
      borderRadius: 3,
      backgroundColor: COLOR.info2,
      overflow: 'hidden'
   },
   //-------------
   link: {
      color: COLOR.primarytext
   },
   shodowBox: {
      marginBottom: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: COLOR.White1,
      shadowColor: COLOR.primarytext,
      shadowOffset: { width: 0, height: 3, },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
   },
   hline: {
      height: 1,
      opacity: 0.5,
      backgroundColor: COLOR.dark2,
   },
   //------------- form 
   formGorup: {
      position: "relative",
      marginBottom: 20,
   },
   input: {
      height: 40,
      fontSize: 14,
      lineHeight: 16,
      color: COLOR.dark2,
      backgroundColor: COLOR.White1,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderColor: COLOR.light1,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 4,

   },
   input_sm: {
      height: 30,
      fontSize: 13,
      lineHeight: 15,
      color: COLOR.dark1,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderColor: COLOR.dark1,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,

   },
   inputDate: {
      display: "flex",
      height: 50,
      fontSize: 15,
      lineHeight: 28,
      color: COLOR.dark6,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderColor: COLOR.light3,
      borderWidth: 1,
      borderRadius: 8,
      borderStyle: "solid",
      backgroundColor: COLOR.light1
   },
   textarea: {
      minHeight: 130,
      maxHeight: 150,
      lineHeight: 20,
      color: COLOR.dark2,
      padding: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: COLOR.White1,
      textAlignVertical: 'top',
      borderColor: COLOR.light1,
   },
   searchinput: {
      color: COLOR.primarytext,
      height: 40,
      margin: 12,
      padding: 10,
      paddingLeft: 40,
      fontSize: 14,
      color: COLOR.dark2,
      fontWeight: '400',
      lineHeight: 24,
      backgroundColor: COLOR.White2,
      borderRadius: 5,
      lineHeight: 15,
      overflow: 'hidden'
   },
   FormLabel: {
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 17,
      color: COLOR.dark4,
      marginBottom: 5,
   },
   errormsg: {
      color: COLOR.Red,
   },
   //-------- modal
   modal_centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      paddingHorizontal: 15,
      backgroundColor: "rgba(0,0,0,0.4)"
   },
   modalView: {
      width: "100%",
      margin: 20,
      borderRadius: 20,
      padding: 20,
      backgroundColor: COLOR.White1,
      shadowColor: COLOR.dark0,
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      overflow: 'hidden'
   },
   //-------- button 
   button: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 13,
      paddingHorizontal: 6,
      borderRadius: 8,
      backgroundColor: COLOR.primary1,
      overflow: 'hidden'
   },
   button_disable: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 13,
      paddingHorizontal: 6,
      borderRadius: 8,
      backgroundColor: COLOR.light3,
      overflow: 'hidden'
   },
   button_disable_text: {
      fontSize: 18,
      fontWeight: "600",
      color: COLOR.dark4
   },
   button_text: {
      fontSize: 18,
      fontWeight: "600",
      color: COLOR.White1
   },
   btn_primary: {
      paddingVertical: 14,
      paddingHorizontal: 8,
      fontSize: 14,
      borderRadius: 4,
      color: COLOR.White1,
      lineHeight: 24,
      fontWeight: '500',
      backgroundColor: COLOR.primary,
      flexDirection: "row",
      textAlign: 'center',
      justifyContent: "center",
      overflow: 'hidden'
   },
   btn_primary_outline: {
      paddingVertical: 14,
      paddingHorizontal: 8,
      borderRadius: 4,
      borderWidth: 1,
      color: COLOR.secondarytext,
      backgroundColor: COLOR.transparent,
      borderColor: COLOR.borderopacitycolor,
      fontSize: 14,
      lineHeight: 24,
      fontWeight: '500',
      flexDirection: "row",
      textAlign: 'center',
      justifyContent: "center",
      overflow: 'hidden'
   },
   btn_secondry: {
      paddingVertical: 14,
      paddingHorizontal: 8,
      fontSize: 15,
      borderRadius: 4,
      color: COLOR.secondarytext,
      lineHeight: 24,
      fontWeight: '500',
      backgroundColor: COLOR.transparent,
      flexDirection: "row",
      textAlign: 'center',
      justifyContent: "center",
      overflow: 'hidden'
   },
   btn_secondry_outline: {
      fontSize: 14,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
      lineHeight: 24,
      fontWeight: '500',
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: "center",
      overflow: 'hidden',
      borderWidth: 1,
      color: COLOR.primarytext,
      borderColor: COLOR.borderopacitycolor,
      backgroundColor: COLOR.White1,
   },
   btn_disable: {
      paddingVertical: 7,
      paddingHorizontal: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      backgroundColor: COLOR.light3,
      overflow: 'hidden'
   },
   btn_primary_round: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 18,
      color: COLOR.primarytext,
      alignItems: "center",
      textTransform: 'uppercase',
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 20,
      backgroundColor: COLOR.logoorange,
      overflow: 'hidden'
   },

   //--------- ul li
   ol: {
      marginVertical: 5,

   },
   ul: {
      marginVertical: 5,
   },
   li: {
      marginBottom: 9,
   },
   //------------- table 
   Table: {
      borderWidth: 0.2, borderStyle: 'solid', borderColor: COLOR.borderopacitycolor,
      borderRadius: 10,
   },
   Tr: {
      flexDirection: "row",
      marginBottom: 1
   },
   Th: {
      paddingHorizontal: 8,
      paddingVertical: 8,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 24,
      color: COLOR.dark2,
      backgroundColor: COLOR.White3
   },
   Td: {
      flexGrow: 2,
      textAlign: 'right',
      paddingHorizontal: 8,
      paddingVertical: 8,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 24,
      color: COLOR.secondarytext,
      backgroundColor: COLOR.White1
   },

   //------------- tab
   tab_fill_active_btn: {
      padding: 8,
      color: COLOR.White1,
      textAlign: "center",
      borderRadius: 20,
      borderColor: COLOR.dark1,
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: COLOR.primary,
      overflow: 'hidden'
   },
   tab_fill_inactive_btn: {
      padding: 8,
      color: COLOR.dark1,
      textAlign: "center",
      borderRadius: 20,
      borderColor: COLOR.dark1,
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: COLOR.gradionTop,
      overflow: 'hidden'
   },
   //-------------
});

