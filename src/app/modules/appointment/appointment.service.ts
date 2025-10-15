import { IAppointment } from './appointment.interface';
import { AppointmentModel } from './appointment.model';

const createAppointment = async (data: Partial<IAppointment>) => {
  return await AppointmentModel.create(data);
};

const getAllAppointments = async () => {
  return await AppointmentModel.find().populate('user').populate('doctor');
};

const getAppointmentById = async (id: string) => {
  return await AppointmentModel.findById(id)
    .populate('user')
    .populate('doctor');
};

const updateAppointment = async (id: string, data: Partial<IAppointment>) => {
  return await AppointmentModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteAppointment = async (id: string) => {
  return await AppointmentModel.findByIdAndDelete(id);
};

export const appointmentService = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  updateAppointment,
};
