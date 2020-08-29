import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

interface IAddress {
    streetAddress: string,
    city: string,
    zipCode: string
}

interface IUser extends mongoose.Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: IAddress
}

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address: {
        streetAddress: String,
        city: String,
        zipCode: String
    }
});

UserSchema.plugin(mongoose_delete, { deletedAt: true });

// we need to implement waterfall delete here for the address record

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
