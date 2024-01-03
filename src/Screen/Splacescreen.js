import React from 'react'
import { View as Div, Text, Image } from 'react-native'
import { VHcenter, cssclass } from '../Utils/html'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function Splacescreen() {
    const Navigation = useNavigation();
    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            setTimeout(() => {
                Navigation.navigate('Giftlist')
            }, 1500);
        }
    }, [isFocused])

    return (
        <SafeAreaView style={cssclass.safeareaview} edges={['left', 'right']}>
            <VHcenter>
                <Div>
                    <Image style={{ width: 300, resizeMode: "contain", alignSelf: "center" }} source={(require('../Assets/header-logo-3.png'))} />
                </Div>
            </VHcenter>
        </SafeAreaView>
    )
}