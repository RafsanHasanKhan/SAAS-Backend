import mongoose, { Schema } from 'mongoose';
import { IAppointment } from './appointment.interface';

const appointmentSchema = new Schema<IAppointment>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    reason: { type: String },
  },
  {
    timestamps: true,
  }
);

export const AppointmentModel = mongoose.model<IAppointment>(
  'Appointment',
  appointmentSchema
);
