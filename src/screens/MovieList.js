import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesSuccess, fetchMoviesFailure } from '../redux/movieSlice';

const API_KEY = 'ba2e6ce58ba5592f7e06799aa756b91c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieList = () => {
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        dispatch(fetchMoviesSuccess(data.results));
      } catch (error) {
        dispatch(fetchMoviesFailure(error.message));
      }
    };

    fetchMovies();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {movies.map(movie => (
        <View key={movie.id} style={styles.movieContainer}>
          <View style={styles.movieImageContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
              style={styles.moviePoster}
            />
          </View>
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  movieContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  movieImageContainer: {
    width: 120,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  moviePoster: {
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MovieList;
