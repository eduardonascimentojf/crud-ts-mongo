import mongoose, { Schema } from "mongoose"
import UserInterface from '../interfaces/user'



const UserSchema: Schema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  birthDate: { type: String, require: true }

},
  {
    timestamps: true
  }
);


export default mongoose.model<UserInterface>("User", UserSchema)