import { Router } from "express";
import { SettingsController } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

/*tipos de parametros
*routes params => parametros de rotas
http://locahost:3333/settings/1

*query params => filtros e buscas
http://locahost:3333/settings/1?search=algumacoisa

*body params => {
    passa objetos dentro das requisições
}

*/

const settingController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/users", usersController.create);
routes.post("/settings", settingController.create);
routes.get("/settings/:username", settingController.finByUsername);
routes.put("/settings/:username", settingController.update);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
