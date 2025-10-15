import { IDoctor } from './doctor.interface';
import { DoctorModel } from './doctor.model';

const createDoctor = async (data: Partial<IDoctor>) => {
  return await DoctorModel.create(data);
};

const getAllDoctors = async () => {
  return await DoctorModel.find();
};

const getDoctorById = async (id: string) => {
  return await DoctorModel.findById(id);
};

const updateDoctor = async (id: string, data: Partial<IDoctor>) => {
  return await DoctorModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteDoctor = async (id: string) => {
  return await DoctorModel.findByIdAndDelete(id);
};
export const doctorService = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
