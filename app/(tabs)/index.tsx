
import EditScreenInfo from '@/components/EditScreenInfo';
import {ActivityIndicator, Text, View} from 'react-native'
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {fetchTopRatedMovies} from "@/api/movies";
import {FlatList, Image} from "react-native";
import {useQuery} from "@tanstack/react-query";

export default function TabOneScreen() {
  const {data: movies, isLoading, error} = useQuery({queryKey: ['movies'], queryFn: fetchTopRatedMovies});

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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width: '50%', padding: 5 }}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={{
                aspectRatio: 1,
                resizeMode: 'cover',
                width: '100%',
                borderRadius: 10,
                height: 200,  // Increase the height slightly
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
              }}
            />
            <Text className="text-lg font-semibold">{item.title}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}
