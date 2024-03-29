export const fetchWatchlistMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/account/21050033/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWEwOTBhNGQwNmNkMTc4ZjRjZDYyMjA5ZjYwZjFhOSIsInN1YiI6IjY1ODE4Njg0OGRiYzMzMDhkNzk5YTIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4kle7854cxlJQKfBiuc9mm2JMMokBD64IVljL0Zi8Pk'
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // console.log(data);
    return data.results;
  } catch (error) {
    console.error('Error fetching movie details', error);
  }
}

export const addMovieToWatchList = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/20844194/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWEwOTBhNGQwNmNkMTc4ZjRjZDYyMjA5ZjYwZjFhOSIsInN1YiI6IjY1ODE4Njg0OGRiYzMzMDhkNzk5YTIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4kle7854cxlJQKfBiuc9mm2JMMokBD64IVljL0Zi8Pk'
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // console.log(data);
    return data.results;
  } catch (error) {
    console.error('Error fetching movie details', error);
  }
};
