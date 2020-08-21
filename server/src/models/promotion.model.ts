import mongoose, {Schema, Document} from 'mongoose';
import {IUserGroup} from './userGroup.model';

export enum PromotionType {
    basic = 'basic',
    common = 'common',
    epic = 'epic'
}

export interface IPromotion extends Document {
    pName: string;
    pType: PromotionType;
    pStartDate: Date;
    pEndDate: Date;
    pUserGroupName: IUserGroup['_id'];
}

const PromotionSchema: Schema = new Schema(
    {
        pName: {
            type: String,
            required: true,
            unique: false
        },
        pType: {type: String, enum: Object.values(PromotionType)},
        pStartDate: {type: Date},
        pEndDate: {type: Date},
        pUserGroupName: {
            type: Schema.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

export default mongoose.model<IPromotion>('Promotion', PromotionSchema);
