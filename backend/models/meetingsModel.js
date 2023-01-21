module.exports = (sequelize, DataTypes) => {
  //CREATING & EXPORTING MEETINGS MODEL via anonymous function
  const meetingsModel = sequelize.define(
    "meetings",
    {
      full_name: { type: DataTypes.STRING, allowNull: false },
      tag: { type: DataTypes.STRING, allowNull: false },
      meeting_date: { type: DataTypes.DATEONLY, allowNull: true },
      meeting_notes: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      freezeTableName: true,
    }
  );
  return meetingsModel;
};
