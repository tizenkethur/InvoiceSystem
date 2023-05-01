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
  return db.createTable("invoices", {
    columns: {
      id: {
        type: "int",
        autoIncrement: true,
        notNull: true,
        primaryKey: true,
        unsigned: true,
      },
      name: { type: "string", notNull: true },
      userId: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "invoices_userId_fk",
          table: "users",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
          },
          mapping: "id",
        },
        unsigned: true,
      },
      dateOfIssue: { type: "string", notNull: true },
      dueDate: { type: "string", notNull: true },
      item: { type: "string", notNull: true },
      description: { type: "string", notNull: true },
      price: { type: "string", notNull: true },
    },
    ifNotExists: true,
  });
};

exports.down = function (db) {
  return db.dropTable("invoices");
};

exports._meta = {
  "version": 1
};
