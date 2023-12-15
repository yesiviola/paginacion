import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const data = [
  {key: '1', uri: 'https://pbs.twimg.com/media/FL6eGJlWUAcvaQj.jpg'},
  {key: '2', uri: 'https://www.unebook.es/blog/wp-content/uploads/2019/09/20-plantas-para-combatir-el-estr%C3%A9s.png'},
  {key: '3', uri: 'https://i.pinimg.com/564x/49/cf/e6/49cfe643c6faf9f8a4abeb8dfc4a818e.jpg'},
  {key: '4', uri: 'https://i.ytimg.com/vi/GaHInc9QOqI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjmXGBqKyReuvD76Q7sPSCdP_cmA'},
  {key: '5', uri: 'https://www.botanical-online.com/wp-content/uploads/cancer-remedios-medicinales.jpg'},
];

export default function App() {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
    >
      {data.map((item, index) => (
        <View style={styles.slide} key={item.key}>
          <Text style={styles.text}>Pagina {item.key}</Text>
          <Image source={{uri: item.uri}} style={styles.image} />
        </View>
      ))}
    </SwiperFlatList>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40E0D0',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: 1250,
    height: 500,
    borderRadius: 10,
  }
});
