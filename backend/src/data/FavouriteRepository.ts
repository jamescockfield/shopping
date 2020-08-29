import fs from 'fs';

export interface Favourite {
    userId: number,
    productId: number,
    favourite: boolean,
    dateCreated: Date,
    dateModified: Date,
    dateDeleted?: Date
}

export class FavouriteRepository {

    #favourites: Favourite[];

    constructor() {
        this.#favourites = [];
    }

    setFavourite(productGuid: string, favourite: boolean) {
        return true;
    }
}
