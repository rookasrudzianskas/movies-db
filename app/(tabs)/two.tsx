import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import MovieListItem from "@/components/movie-list-item";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchWatchlistMovies} from "@/api/watchlist";

export default function TabTwoScreen() {
  const { data: movies, isLoading, error } = useQuery({ queryKey: ['watchlist'], queryFn: fetchWatchlistMovies});

  if (isLoading || error) {
    return (
      <View className='flex h-screen items-center justify-center'>
        {isLoading ? <ActivityIndicator /> : <Text>Error: {error?.message}</Text>}
      </View>
    );
  }
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieListItem movie={item} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
