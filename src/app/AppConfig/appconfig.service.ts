import { InjectionToken, Injector } from "@angular/core";
import { AppConfig } from "./AppConfig";
import { envrironment } from "../../environments/environment";
import { appConfig } from "../app.config";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG :AppConfig = {
apiEndpoint:envrironment.endPoint
}
