import { Types } from 'mongoose';

export type IAppointment = {
  user: Types.ObjectId;
  doctor: Types.ObjectId;
  date: Date;
  time: string;
  reason?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
