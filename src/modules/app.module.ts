import { QueueService } from "./../services/queue.service";
import {
  Module,
  MiddlewaresConsumer,
  RequestMethod
} from "@nestjs/common";
import { WeatherController } from "../controllers/weather.controller";
import { DatabaseModule } from "../models/database.module";
import { userProviders } from "../services/user/models/user.model";
import { AuthController } from "../controllers/auth.controller";
import { SessionMiddleware } from "../common/session.middleware";
import { WeatherService } from "../services/weather.service";
import { LoggerMiddleware } from "../common/logger.middleware";
import { loggerProviders } from "../common/providers/logger.provider";
import { AnyExceptionFilter } from "../common/filters/exception.filter";
import { UserService } from "../services/user/user.service";
import { profilesProviders } from "../models/entities/profile/profile.entity";

@Module({
  modules: [DatabaseModule],
  controllers: [WeatherController, AuthController],
  components: [
    UserService,
    WeatherService,
    QueueService,
    AnyExceptionFilter,
    ...loggerProviders,
    ...userProviders,
    ...profilesProviders
  ]
})
export class ApplicationModule {
  configure(consumer: MiddlewaresConsumer): void {
    const allRouts = {
      path: "/**",
      method: RequestMethod.ALL
    };
    consumer.apply(SessionMiddleware).forRoutes(allRouts);
    consumer.apply(LoggerMiddleware).forRoutes(allRouts);
  }
}
