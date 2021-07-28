import { Router } from 'express';

import { Clients } from '../controllers/ClientsController';

const router = Router();
const clients = new Clients();

router.get('/clients', clients.index);

export { router }
