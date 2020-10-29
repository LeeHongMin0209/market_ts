import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, SchemaType, SchemaTypes } from 'mongoose';
import { ObjectId } from 'mongodb';
export type MarketDocument = Market & Document;

@Schema()
export class Market extends Document {    
    @Prop()
    email: string;

    @Prop()
    name: string;

    @Prop()
    phone: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    userId: string;
}
export const MarketSchema = SchemaFactory.createForClass(Market);