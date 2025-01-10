const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    reservation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "reservation_id",
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "users_model"
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    status: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "pending",
      comment: null,
      primaryKey: false,
      field: "status",
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
    tableName: "reservations",
    comment: "",
    indexes: []
  };
  const ReservationsModel = sequelize.define("reservations_model", attributes, options);
  return ReservationsModel;
};