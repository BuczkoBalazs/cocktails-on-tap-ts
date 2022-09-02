export type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

export type LandingSlides = {
    id: number,
    title: string,
    text: string
};

export enum SortCocktails {
    ASC = 'Sort ascending',
    DESC = 'Sort descending'
};