import { Router } from 'express';
import type { Request, Response } from 'express';
const routes = Router();

routes.use('/api/v1/auth', (req: Request, res: Response) => {});

export default routes;
