import React from 'react'
import { View as Div, Text, Image } from 'react-native'
import { VHcenter, cssclass } from '../Utils/html'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Splacescreen() {
  



    return (
        <SafeAreaView style={cssclass.safeareaview} edges={['left', 'right']}>
            <VHcenter>
                <Div>
                    {/* <Image style={{ width: 300, resizeMode: "contain", alignSelf: "center" }} source={(require('../Assets/images/ncc-image-white.png')) } /> */}
                </Div>
            </VHcenter>
        </SafeAreaView>
    )
}