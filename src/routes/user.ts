/// <reference path="../../typings.d.ts" />

import * as HttpStatus from 'http-status-codes';
import * as moment from 'moment';

import * as express from 'express';
import { Router, Request, Response } from 'express';

import { UserModel } from '../models/user';

const userModel = new UserModel();
const router: Router = Router();

// save new request
router.get('/', async (req: Request, res: Response) => {
  let decoded = req.decoded;
  try {
    let rs: any = await userModel.getUser(req.db, decoded);
    res.send({ ok: true, rows: rs, code: HttpStatus.OK });
  } catch (error) {
    res.send({ ok: false, error: error.message, code: HttpStatus.OK });
  }

});

export default router;