import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";
import config from "../config";

const swaggerOptions: SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "InvoiceSystem",
      version: "1.0.0",
      description: "InvoiceSystem endpoints",
    },
    servers: [`${config.servers.host}:${config.servers.port}`],
  },
  apis: ["./src/routes/api.routes.ts"],
};

export const swaggerDocs = swaggerJSDoc(swaggerOptions);
