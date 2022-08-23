import express from 'express';
import apikey from '../../auth/apikey';
import upload from './orthodontic/upload'

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
router.use('/', apikey);
/*-------------------------------------------------------------------------*/

// router.use('/feature', featureImp);
router.use('/upload', upload);

export default router;
