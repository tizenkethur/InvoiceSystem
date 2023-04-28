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
      roleId: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "users_roleId_fk",
          table: "roles",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
          },
          mapping: "id",
        },
        unsigned: true,
      },
    },
    ifNotExists: true,
  });
};

exports.down = function (db) {
  return db.dropTable("users");
};

exports._meta = {
  version: 1,
};
