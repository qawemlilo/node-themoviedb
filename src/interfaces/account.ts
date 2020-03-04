/* eslint-disable camelcase */
import {
  ResultsWithPage, Movie,
  TVShow, ResponseWithCode,
  MovieWithRating, SortOrder,
  MediaType, TVShowWithRating
} from './common';

// Options
interface CommonPathParametrs {
  id: number;
}

interface CommonQueryString {
  language?: string;
  page?: number;
  sessionID?: string;
}

export interface AccountConstructorOptions {
  sessionID: string;
  apiKey: string;
  language?: string;
}

export interface CreatedListsOptions extends CommonPathParametrs, CommonQueryString {}

export interface FavoriteMoviesOptions extends CommonPathParametrs, CommonQueryString {
  sort_by?: SortOrder;
}

export interface FavoriteTVShowsOptions extends FavoriteMoviesOptions {}

export interface MarkAsFavoriteOptions extends CommonPathParametrs {
  sessionID?: string;
  media_type: MediaType;
  media_id: number;
  favorite: boolean;
}

export interface RatedMoviesOptions extends CommonPathParametrs, CommonQueryString {
  sort_by?: SortOrder;
}

export interface RatedTVShowsOptions extends CommonPathParametrs, CommonQueryString {
  sort_by?: SortOrder;
}

export interface RatedTVEpisodesOptions extends CommonPathParametrs, CommonQueryString {
  sort_by?: SortOrder;
}

export interface MovieWatchlistOptions extends CommonPathParametrs, CommonQueryString {
  sort_by?: SortOrder;
}

export interface TVShowWatchlistOptions extends CommonPathParametrs, CommonQueryString {
  sort_by?: SortOrder;
}

export interface AddToWatchlistOptions extends CommonPathParametrs {
  sessionID?: string;
  media_type: MediaType;
  media_id: number;
  watchlist: boolean;
}

// Return types
export interface AccountReturnType {
  details?: AccountDetails;
  createdLists?: ResultsWithPage<AccountCreatedLists>;
  favoriteMovies?: ResultsWithPage<Movie>;
  favoriteTVShows?: ResultsWithPage<TVShow>;
  markAsFavorite?: ResponseWithCode;
  ratedMovies?: ResultsWithPage<MovieWithRating>;
  ratedTVShows?: ResultsWithPage<TVShowWithRating>;
  ratedTVEpisodes?: ResultsWithPage<AccountFavoriteTVEpisodes>;
  movieWatchlist?: ResultsWithPage<Movie>;
  tvShowWatchlist?: ResultsWithPage<TVShow>;
  addToWatchlist?: ResponseWithCode;
}

interface AccountDetails {
  avatar: {
    gravatar: {
      hash: string;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

interface AccountCreatedLists {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: null;
}

interface AccountFavoriteTVEpisodes {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  rating: number;
}
