import { Router } from "express";
import * as Controller from "./controller/controller.js";
const router = Router();

router.get('/', Controller.Inicial);
router.get('/cadastro' , Controller.Cadastro)

export default router;