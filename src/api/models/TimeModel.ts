import {Model,DataTypes} from 'sequelize';
import sequelize from '../../configs/connection';
// These are all the attributes in the User model
interface TimeInferface {
    id?: number;
    name: string;
    initialDate: Date;
    finalDate: Date;
    idProject: number;
  }

class Time extends Model<TimeInferface> implements TimeInferface {
  declare id: number; 
  declare name: string;
  declare initialDate: Date;
  declare finalDate: Date;
  declare idProject: number;
  

  // timestamps!
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

}
Time.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        initialDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finalDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        idProject: {
            type:  DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
      tableName: "Times",
      sequelize, // passing the `sequelize` instance is required
    }
  );

export default Time 
//Time.sync({force: true})