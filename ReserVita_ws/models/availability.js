const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    availability_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "availability_id",
      autoIncrement: true
    },
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "resource_id",
      autoIncrement: false,
      references: {
        key: "resource_id",
        model: "resources_model"
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "room_id",
      autoIncrement: false,
      references: {
        key: "room_id",
        model: "rooms_model"
      }
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "start_time",
      autoIncrement: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "end_time",
      autoIncrement: false
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "is_available",
      autoIncrement: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "availability",
    comment: "",
    indexes: []
  };
  const AvailabilityModel = sequelize.define("availability_model", attributes, options);
  return AvailabilityModel;
};