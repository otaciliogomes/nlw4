import { Router } from 'express';
import SurveysController from './controllers/SurveysContoller';
import UserController from './controllers/UserController';

const router = Router();

const userController = new UserController;
const surveyController = new SurveysController;

router.post('/users', userController.create);
router.post('/surveys', surveyController.create);
router.get('/surveys', surveyController.show);

export default router;