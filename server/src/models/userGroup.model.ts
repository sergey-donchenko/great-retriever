import mongoose, { Schema, Document } from 'mongoose';

export interface IUserGroup extends Document {
    name: string;
}

const UserGroupSchema: Schema = new Schema({
    name: { type: String, required: true }
});

// Export the model and return your IUser interface
export default mongoose.model<IUserGroup>('UserGroup', UserGroupSchema);