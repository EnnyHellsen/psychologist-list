import React from 'react';
import { View, Text, TextProps, StyleSheet, Image } from 'react-native';

export type PsychologistItemProps = TextProps & {
  item: {
    psychologistId: number
    firstName: string,
    lastName: string,
    headline: string
    thumbnail: string,
  }
}

export const PsychologistItem = ({item}: PsychologistItemProps) => (
  <View style={styles.item}>
    <Image
      source={{ uri: item.thumbnail}}
      style={styles.image}
    />
    <Text style={styles.name}>{`${item.firstName} ${item.lastName}`}</Text>
    <Text style={styles.description}>{item.headline}</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 300,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});