import { Provider } from "@nestjs/common";
import { NotificationTemplateService } from "../notification-template.service";
import { NotificationTemplateRepository } from "../repositories/notification-template.repository";
import { NotificationTemplateAdapter } from "../../../adapter/notification-template/notification-template.adapter";

export const NotificationTemplateProvider: Provider[] = [
  NotificationTemplateService,
  {
    provide: NotificationTemplateRepository,
    useClass: NotificationTemplateAdapter,
  },
];
