export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";

export type CountryReducerState = {
  countries: [];
  isLoading: boolean;
  error: string;
};

export type FetchAllCountriesAction = {
  type: typeof FETCH_COUNTRIES;
  payload?: string;
};

export type FetchAllCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload?: [];
};

export type fetchAllCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload?: string;
};

export type CountryActions =
  | FetchAllCountriesAction
  | FetchAllCountriesSuccessAction
  | fetchAllCountriesFailureAction;
