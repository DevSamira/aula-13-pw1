const User = require('../models/User');

const store = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = { name, email, password };

    await User.createAutoInc(newUser);

  } catch (err) {
    console.error(err);
  }
};

module.exports = { store };
