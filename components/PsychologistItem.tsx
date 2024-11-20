import React from 'react';
import { View, Text, TextProps, StyleSheet, Image } from 'react-native';

export type PsychologistItemProps = TextProps & {
  item: {
    psychologistId: number
    firstName: string,
    lastName: string,
    headline: string
    thumbnail: string,
    startsAt: number
  }
}

export const PsychologistItem = ({item}: PsychologistItemProps) => {
  const date = new Date(item.startsAt)

  return (
    <View style={styles.item}>
      <Image
        source={{ uri: item.thumbnail}}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{`${item.firstName} ${item.lastName}`}</Text>
        <Text style={styles.description}>{item.headline}</Text>
        <Text>Next time: {date.toLocaleString()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
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