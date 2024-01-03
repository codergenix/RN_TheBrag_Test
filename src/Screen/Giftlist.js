import React from 'react'
import { View as Div, FlatList, RefreshControl, TextInput, Image } from 'react-native'
import { Label, cssclass } from '../Utils/html'
import { COLOR } from '../Utils/Theme';
import CONFIG from '../Utils/config';
//----- icone
import Entypo from 'react-native-vector-icons/Entypo';
//------store
import { Giphylist, GiphylistMore, mainSelector, updateState } from '../Store/Reducers/MainSlice';
import { useDispatch, useSelector } from 'react-redux';

import { showMessage } from 'react-native-flash-message';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Giftlist() {
  const dispatch = useDispatch();
  const   [Searchvalue ,setSearchvalue] = React.useState('');
  const { isError, errorMessage, isFetching, GiphylistOfset, GiphylistData, GiphylistCount } = useSelector(mainSelector);

  // Effect to call the API with a delay after the user stops typing
  React.useEffect(() => {
    const timeOutId = setTimeout(() => {
      Apicall();
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [Searchvalue])
 // Effect to display error messages
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
  // Function to make an API call
  const Apicall = () => {
    let data = {
      api_key: CONFIG.API_KEY,
      q: Searchvalue,
      limit: 15,
      offset: 0,
    }
    dispatch(Giphylist(data))
  }
  // Function to load more data when reaching the end of the list
  const onEndReached = () => {
    if (GiphylistData.length < GiphylistCount) {
      let data = {
        api_key: CONFIG.API_KEY,
        q: Searchvalue,
        limit: 15,
        offset: GiphylistOfset,
      }
      dispatch(GiphylistMore(data))
    }
  }
  // Function to refresh the list
  const onRefresh = () => {
    Apicall();
  }
   // Component to render each item in the FlatList
  const RenderItem = ({ item }) => (
    <Div style={cssclass.shodowBoxcol}>
      <Div style={cssclass.shodowBox}>        
          <Image height='100%' width='100%' source={{ uri: item.images?.original?.url }} resizeMode='cover' />        
      </Div>
    </Div>
  )
  return (
    <SafeAreaView style={cssclass.safeareaview} edges={['left', 'right']}>
         {/* Search bar  */}
      <Div style={cssclass.searchwrap}>
        <TextInput
          style={cssclass.searchinput}
          selectionColor={COLOR.Black1}
          maxLength={20}
          placeholder='Search GIPHY'
          placeholderTextColor={COLOR.Black1}
          value={Searchvalue}
          onChangeText={(value) => setSearchvalue(value)}
        />
        <Div style={cssclass.searchbtnwrap}>
          <Entypo name='magnifying-glass' size={25} color={COLOR.White1} />
        </Div>
        {Searchvalue != '' && (
          <Entypo style={cssclass.closebtnwrap} name='cross' size={25} color={COLOR.Black1} onPress={() => setSearchvalue('')} />
        )}
      </Div>
      {/* FlatList to display Giphy search results */}
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