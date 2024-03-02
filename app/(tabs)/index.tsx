
import EditScreenInfo from '@/components/EditScreenInfo';
import {ActivityIndicator, Text, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {fetchTopRatedMovies} from "@/api/movies";
import {FlatList, Image} from "react-native";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import MovieListItem from "@/components/movie-list-item";

export default function TabOneScreen() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1
  });

  if (isLoading || error) {
    return (
      <View className='flex h-screen items-center justify-center'>
        {isLoading ? <ActivityIndicator /> : <Text>Error: {error?.message}</Text>}
      </View>
    );
  }

  const movies = data?.pages?.flat();

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
        onEndReached={() => fetchNextPage()}
      />

      <StatusBar style="auto" />
    </View>
  );
}
