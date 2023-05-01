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
  return db.createTable("roles", {
    columns: {
      id: {
        type: "int",
        autoIncrement: true,
        notNull: true,
        primaryKey: true,
        unsigned: true,
      },
      userId: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "roles_userId_fk",
          table: "users",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
          },
          mapping: "id",
        },
        unsigned: true,
      },
      roleId: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "roles_roleId_fk",
          table: "roleTypes",
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
  return db.dropTable("roles");
};

exports._meta = {
  version: 1,
};
