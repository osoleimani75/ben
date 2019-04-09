module.exports = (sequelize, DataTypes) => {
  const Contributor = sequelize.define("Contributor", {
    userOrderNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    left: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    archived: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false
    }
  });
  return Contributor;
};
