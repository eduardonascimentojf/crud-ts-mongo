import { Document } from "mongoose";

export default interface UserInterface extends Document {
     firstName: string;
     lastName: string;
     email: string;
     password: string;
     birthDate: string;
}