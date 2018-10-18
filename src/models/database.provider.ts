import { Sequelize } from "sequelize-typescript";
import { UserService } from "../services/user/user.service";
import { User } from "../services/user/models/user.model";
import { Profile } from "./entities/profile/profile.entity";
import config from "../config";

export const databaseProviders = [
  {
    provide: "SequelizeToken",
    useFactory: async () => {
      const sequelize = new Sequelize(config.get('db'));
      sequelize.addModels([User, Profile]);
      await sequelize.sync({ force: true });
      await UserService.createTestData();
      return sequelize;
    }
  }
];
