import fs from "fs";
import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

interface IFavourite extends mongoose.Document {
    userId: typeof mongoose.Schema.Types.ObjectId,
    favourites: number[]
}

const FavouriteSchema: mongoose.Schema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    favourite: [Number]
}, { timestamps: true });

FavouriteSchema.plugin(mongoose_delete, { deletedAt: true });

const Favourite = mongoose.model<IFavourite>('Favourite', FavouriteSchema);

export default Favourite;
