// Version.ts
// This model will maintain the database version
import mongoose, { Schema, Document } from 'mongoose';

export interface IVersion extends Document {
  version: number;
}

const versionSchema: Schema = new Schema({
    version: { type: Number, required: true, default: 0 },
});

const Version = mongoose.model<IVersion>('Version', versionSchema);

export default Version;
