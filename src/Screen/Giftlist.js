import React from 'react'
import { View as Div, FlatList, RefreshControl, TextInput, Image } from 'react-native'
import { Label, cssclass } from '../Utils/html'
import { COLOR } from '../Utils/Theme';
import CONFIG from '../Utils/Config';
//----- icone
import Entypo from 'react-native-vector-icons/Entypo';
//------store
import { Giphylist, GiphylistMore, mainSelector, updateState } from '../Store/Reducers/MainSlice';
import { useDispatch, useSelector } from 'react-redux';

import { showMessage } from 'react-native-flash-message';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Giftlist() {
  const dispatch = useDispatch();
  const [srcvalue, setSrcvalue] = React.useState('');
  const { isError, errorMessage, isFetching, GiphylistOfset, GiphylistData, GiphylistCount } = useSelector(mainSelector);

  React.useEffect(() => {
    const timeOutId = setTimeout(() => {
      Apicall();
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [srcvalue])

  React.useEffect(() => {
    if (isError) {
      showMessage({
        message: errorMessage,
        type: "danger",
        icon: "danger",
      });
      dispatch(updateState({ isError: false, errorMessage: '' }));
    }
  }, [isError]);

  const Apicall = () => {
    let data = {
      api_key: CONFIG.API_KEY,
      q: srcvalue,
      limit: 15,
      offset: 0,
    }
    dispatch(Giphylist(data))
  }
  const onEndReached = () => {
    if (GiphylistData.length < GiphylistCount) {
      let data = {
        api_key: CONFIG.API_KEY,
        q: srcvalue,
        limit: 15,
        offset: GiphylistOfset,
      }
      dispatch(GiphylistMore(data))
    }
  }
  const onRefresh = () => {
    Apicall();
  }
  const RenderItem = ({ item }) => (
    <Div style={cssclass.shodowBoxcol}>
      <Div style={cssclass.shodowBox}>        
          <Image height='100%' width='100%' source={{ uri: item.images?.original?.url }} resizeMode='cover' />        
      </Div>
    </Div>
  )
  return (
    <SafeAreaView style={cssclass.safeareaview} edges={['left', 'right']}>
      <Div style={cssclass.searchwrap}>
        <TextInput
          style={cssclass.searchinput}
          selectionColor={COLOR.Black1}
          maxLength={20}
          placeholder='Search GIPHY'
          placeholderTextColor={COLOR.Black1}
          value={srcvalue}
          onChangeText={(value) => setSrcvalue(value)}
        />
        <Div style={cssclass.searchbtnwrap}>
          <Entypo name='magnifying-glass' size={25} color={COLOR.White1} />
        </Div>
        {srcvalue != '' ? (
          <Entypo style={cssclass.closebtnwrap} name='cross' size={25} color={COLOR.Black1} onPress={() => setSrcvalue('')} />
        ) : null}
      </Div>
      <Div style={cssclass.flatelistwrap}>
        <FlatList
          data={GiphylistData}
          renderItem={RenderItem}
          onEndReached={onEndReached}
          numColumns={2}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={onRefresh}
              title=""
              tintColor={COLOR.Black2}
            />
          }
          ListEmptyComponent={() => {
            return (<Div style={cssclass.nodataWrap}><Label style={cssclass.nodata}>No Data found</Label></Div>)
          }}
        />
      </Div>
    </SafeAreaView>
  )
}