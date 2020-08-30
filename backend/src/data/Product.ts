import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

interface IProduct extends mongoose.Document {
    name: string,
    guid: string
    description: string,
    imageSrc: string,
    price: number,
    sizes: string[],
    salePrice?: number | null,
}

const ProductSchema = new mongoose.Schema({
    name: String,
    guid: String,
    description: String,
    imageSrc: String,
    price: Number,
    sizes: [String],
    salePrice: Number
}, { timestamps: true});

ProductSchema.plugin(mongoose_delete, { deletedAt: true });

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
