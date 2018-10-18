import {
  Table,
  Column,
  Model,
  HasOne,
  PrimaryKey,
  ForeignKey
} from "sequelize-typescript";
import CustomModel from "../../../common/custom.model";
import NoJSON from "../../../common/NoJSON.decorator";
import { User } from "../../../services/user/models/user.model";

@Table({
  tableName: "profiles"
})
export class Profile extends CustomModel<Profile> {
  @Column firstName: string;

  @NoJSON()
  @Column
  lastName: string;

  @HasOne(() => User)
  user: User;
}

export const profilesProviders = [
  {
    provide: "ProfilesRepository",
    useValue: Profile
  }
];
