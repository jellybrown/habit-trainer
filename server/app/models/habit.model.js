module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      name: String,
      goal: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Habit = mongoose.model(
    "habit",
    schema,
    "habit");
  return Habit;
};
