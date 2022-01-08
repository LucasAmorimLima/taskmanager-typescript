import 
{Model,DataTypes,HasManyAddAssociationMixin,HasManyGetAssociationsMixin,Association,
  HasManyCreateAssociationMixin,HasManyHasAssociationMixin,HasManyCountAssociationsMixin,} 
from 'sequelize';
import sequelize from '../../configs/connection';
import Time from './TimeModel'
// These are all the attributes in the User model
interface ProjectInferface {
    id?: number;
    name: string;
    status: Date;
  }

class Project extends Model<ProjectInferface> implements ProjectInferface {
  declare id: number; // Note that the `null assertion` `!` is required in strict mode.
  declare name: string;
  declare status: Date;
  

  // timestamps!
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  declare getProjects: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  declare addProject: HasManyAddAssociationMixin<Project, number>;
  declare hasProject: HasManyHasAssociationMixin<Project, number>;
  declare countProjects: HasManyCountAssociationsMixin;
  declare createProject: HasManyCreateAssociationMixin<Project>;


  declare static associations: {
    projects: Association<Project, Time>;
  };
}
Project.init(
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
      status: {
        type: new DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      tableName: "projects",
      sequelize, // passing the `sequelize` instance is required
    }
);
  Project.hasMany(Time, {
    sourceKey: "id",
    foreignKey: "idProject",
    as: "projects", // this determines the name in `associations`!
  });

export default Project 
//Project.sync({force: true})