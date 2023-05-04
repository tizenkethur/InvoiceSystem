import { invoiceController } from "controllers/invoiceController";
import express from "express";

const invoiceRouter = express.Router();

invoiceRouter.post("/create", invoiceController.createInvoice);

export default invoiceRouter;
