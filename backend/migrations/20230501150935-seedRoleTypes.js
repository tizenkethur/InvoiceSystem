"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  db.insert("roleTypes", ["id", "name"], [1, "Admin"]);
  db.insert("roleTypes", ["id", "name"], [2, "Book keeper"]);
  return db.insert("roleTypes", ["id", "name"], [3, "User"]);
};

exports.down = function (db) {
  return db.runSql("TRUNCATE TABLE roleTypes;");
};

exports._meta = {
  version: 1,
};
