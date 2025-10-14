import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { userService } from './user.service';
import { sendResponse } from '../../utils/sendResponse';
import { STATUS_CODES } from '../../core/constants/httpStatusCode';

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: 'User registerd successfully',
    data: user,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await userService.loginUser(email, password);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Login successfully',
    data: result,
  });
});

export const UserController = {
  registerUser,
  loginUser,
};
