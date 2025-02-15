import express, { Router } from 'express';

import { protectRoute } from '../../middlewares/protectRoute.js';
import {
  followAndUnfollowUser,
  getMyData,
  getUserProfile,
  updateUserProfile,
} from './userController.js';

export const userRouter: Router = express.Router();

userRouter.get('/:username', getUserProfile);
userRouter.put('/follow/:id', protectRoute, followAndUnfollowUser);
userRouter.put('/me/profile', protectRoute, updateUserProfile);
userRouter.get('/me/data', protectRoute, getMyData);
