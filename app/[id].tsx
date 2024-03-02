//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Stack, useLocalSearchParams} from "expo-router";
import {useQuery} from "@tanstack/react-query";
import {fetchMovieDetails} from "@/api/movies";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
   const {data: movie, isLoading, error, mutate} = useQuery({
    queryKey: ['movie', id],
     queryFn: () => fetchMovieDetails(id)
  });

  if (isLoading || error) {
    return (
      <View className='flex h-screen items-center justify-center'>
        {isLoading ? <ActivityIndicator /> : <Text>Error: {error?.message}</Text>}
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie.title }} />
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
        }}
        style={{ width: '100%', height: 300 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: '500', marginVertical: 10 }}>
          {movie.title}
        </Text>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            onPress={() => mutate()}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <FontAwesome name="bookmark-o" size={24} color="black" />
            <Text>Add to watchlist</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
