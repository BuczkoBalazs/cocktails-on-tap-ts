export type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

export enum SortCocktails {
    ASC = 'Sort ascending',
    DESC = 'Sort descending'
};

export type CocktailAntProps = {
    cocktail: CocktailDetails,
}