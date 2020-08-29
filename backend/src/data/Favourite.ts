import fs from "fs";
import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

interface IFavourite extends mongoose.Document {
    userId: number,
    productId: number,
    favourites: boolean
}

const FavouriteSchema: mongoose.Schema = new mongoose.Schema({
    userId: Number,
    productId: Number,
    favourite: Boolean,
}, { timestamps: true });

FavouriteSchema.plugin(mongoose_delete, { deletedAt: true });

const Favourite = mongoose.model<IFavourite>('Favourite', FavouriteSchema);

export default Favourite;
