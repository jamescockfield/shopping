import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

interface IProduct extends mongoose.Document {
    name: string,
    description: string,
    imageSrc: string,
    price: string,
    sizes: string[],
    salePrice?: string | null,
    guid?: string
}

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageSrc: String,
    price: String,
    sizes: [String],
    salePrice: String
}, { timestamps: true});

ProductSchema.plugin(mongoose_delete, { deletedAt: true });

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
