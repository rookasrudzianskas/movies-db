
export const fetchTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWEwOTBhNGQwNmNkMTc4ZjRjZDYyMjA5ZjYwZjFhOSIsInN1YiI6IjY1ODE4Njg0OGRiYzMzMDhkNzk5YTIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4kle7854cxlJQKfBiuc9mm2JMMokBD64IVljL0Zi8Pk'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.error('Error fetching top rated movies', error);
  }
}
