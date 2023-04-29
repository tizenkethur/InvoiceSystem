'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable("users", {
    columns: {
      id: {
        type: "int",
        autoIncrement: true,
        notNull: true,
        primaryKey: true,
        unsigned: true,
      },
      name: { type: "string", notNull: true },
      username: { type: "string", notNull: true },
      password: { type: "string", notNull: true },
    },
    ifNotExists: true,
  });
};

exports.down = function (db) {
  return db.dropTable("users");
};

exports._meta = {
  "version": 1
};
