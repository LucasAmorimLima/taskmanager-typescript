import {Model,DataTypes} from 'sequelize';
import sequelize from '../../configs/connection';
// These are all the attributes in the User model
interface UserInferface {
    id?: number;
    name: string;
    email: string;
    password: string;
  }

class User extends Model<UserInferface> implements UserInferface {
  declare id: number; // Note that the `null assertion` `!` is required in strict mode.
  declare name: string;
  declare email: string;
  declare password: string;
  

  // timestamps!
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

}
User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      }
    },
    {
      tableName: "users",
      sequelize, // passing the `sequelize` instance is required
    }
  );

export default User 
//User.sync({force: true})