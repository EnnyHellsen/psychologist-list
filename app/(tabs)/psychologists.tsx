import { StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText'
import { IconSymbol } from '@/components/ui/IconSymbol';
import { PsychologistItem } from '@/components/PsychologistItem';

export default function PsychologistsScreen() {
  const [list, setList] = useState([]);

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


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person.fill"
          style={styles.headerImage}
        />
      }>
    <ThemedText type="title">Find a Psychologist</ThemedText>

    {!!list.length && 
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <PsychologistItem item={item} />
        )}
      />
    }

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#000',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
});
