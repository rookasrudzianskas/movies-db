// @ts-nocheck
import {Link, useRouter} from 'expo-router';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';

const MovieListItem = ({ movie }: {movie: any}) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7} onPress={() => router.push(`/${movie.id}`)}>
      <View>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          }}
          style={{ width: '100%', aspectRatio: 3 / 5, borderRadius: 20 }}
        />
        {/* <Text>{movie.title}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default MovieListItem;
