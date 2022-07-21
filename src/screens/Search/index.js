import { Container, SearchArea, Input, SearchButton, FlatList } from './style';
import { StatusBar, Keyboard } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Octicons from '@expo/vector-icons/Octicons';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';
import firebase from '../../firebase';

import ChatList from '../../components/ChatList';

export default function Search() {
  const isFocused = useIsFocused();
  const { color } = useTheme();
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const hasUser = firebase.auth().currentUser ? firebase.auth().currentUser.toJSON() : null;

    setUser(hasUser);
  }, [isFocused]);

  async function handleSearch() {
    if (search === '') return;
    const responseSearch = await firebase
      .firestore()
      .collection('MESSAGE_THREADS')
      .where('name', '>=', search)
      .where('name', '<=', search + '\uf8ff')
      .get()
      .then((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data(),
          };
        });
        setList(threads);
        //console.log(threads);
        setSearch('');
        Keyboard.dismiss();
      });
  }
  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
      <SearchArea>
        <Input
          value={search}
          onChangeText={(e) => setSearch(e)}
          placeholder='Procurando algum grupo?'
          autoCapitalize={'none'}
          keyboardType='default'
        />
        <SearchButton onPress={handleSearch}>
          <Octicons name='search' size={25} color={color.white} />
        </SearchButton>
      </SearchArea>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ChatList data={item} userStatus={user} />}
      />
    </Container>
  );
}
