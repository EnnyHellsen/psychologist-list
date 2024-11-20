import { StyleSheet, FlatList, Image, TextInput, View, Button, Pressable } from 'react-native';
import { useState, useEffect } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText'
import { IconSymbol } from '@/components/ui/IconSymbol';
import { PsychologistItem, PsychologistItemProps } from '@/components/PsychologistItem';

export default function PsychologistsScreen() {
  const [list, setList] = useState<Array<PsychologistItemProps['item']>>([])
  const [filteredList, setFilteredList] = useState<Array<PsychologistItemProps['item']>>([])
  const [searchText, setSearchText] = useState('')
  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use an express server to allow CORS
        const response = await fetch('http://localhost:3000/psychologists');
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }

        const data = await response.json();
        setList(data.data)
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);


  const search = () => {
    setEmptyList(false)
    const filteredFirstname = list.filter(item =>
      item.firstName.toLowerCase().includes(searchText.toLowerCase())
    )
    const filteredLastname = list.filter(item =>
      item.lastName.toLowerCase().includes(searchText.toLowerCase())
    )

    const allResults = [...filteredFirstname, ...filteredLastname]

    if(allResults.length > 0) {
      setFilteredList(allResults)
    } else {
      setEmptyList(true)
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/psychologists-mindler.jpg')}
          style={styles.image}
        />
      }>
    <ThemedText type="title">Find a Psychologist</ThemedText>
    
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={(newText) => setSearchText(newText)}
      />
      <Pressable style={styles.button} onPress={search}>
      <IconSymbol size={28} name="search.fill" color="grey"></IconSymbol>
      </Pressable>
    </View>

    {emptyList && 
      <ThemedText type="default">No results for that name, try searching for a different name</ThemedText>
    }

    {!!list.length && 
      <FlatList
        data={filteredList.length > 0 ? filteredList : list}
        renderItem={({ item }) => (
          <PsychologistItem item={item} />
        )}
      />
    }

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 20,
    width: '80%',
    borderRadius: 20,
    marginVertical: 10,
  },
  button: {
  }
});
