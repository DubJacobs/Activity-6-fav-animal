const { findAllUsers } = require('./userQueries');
const connection = require('../config/connections');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fetchUsers,
};
