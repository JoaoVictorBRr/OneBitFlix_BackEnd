import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResoucers } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticateOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    resources: adminJsResoucers,
    branding: brandingOptions,
    locale: locale,
    dashboard: dashboardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  authenticateOptions,
  null, 
  {
      resave: false,
      saveUnitialized: false
  }
)