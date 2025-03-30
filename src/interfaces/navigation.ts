import { screenNames } from "../helpers/screenNames";

export type RootStackParamList = {
  [screenNames.MEALS_CATEGORIES]: undefined;
  [screenNames.MEALS_OVERVIEW]: {
    categoryId: string,
  };
  [screenNames.MEALS_DETAILS]: {
    mealDetails: any
  };
};