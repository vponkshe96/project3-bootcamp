module.exports = (sequelize, DataTypes) => {
  //CREATING & EXPORTING USER MODEL via anonymous function
  const user = sequelize.define(
    "user",
    {
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      isStudent: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return user;
};
