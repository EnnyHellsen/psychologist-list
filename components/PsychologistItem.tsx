import React from 'react';
import { View, Text, TextProps, StyleSheet, Image } from 'react-native';

export type PsychologistItemProps = TextProps & {
  name: string,
  image: string,
  description: string
}

export const PsychologistItem = ({name, image, description}: PsychologistItemProps) => (
  <View style={styles.item}>
    <Image
      source={{ uri: image}}
      style={styles.image}
    />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
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