
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {fetchTopRatedMovies} from "@/api/movies";
import {FlatList, Image} from "react-native";

export default function TabOneScreen() {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchTopRatedMovies();
      setMovies(movies);
    }
    getMovies();
  }, [])

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View className="flex-col">
            <Image
              source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
              style={{
                aspectRatio: 2 / 3,
                width: '100%',
              }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
