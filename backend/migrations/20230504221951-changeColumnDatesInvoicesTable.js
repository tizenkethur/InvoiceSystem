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
  db.changeColumn("invoices", "dateOfIssue", { type: "datetime" });
  return db.changeColumn("invoices", "dueDate", { type: "datetime" });
};

exports.down = function (db) {
  db.changeColumn("invoices", "dateOfIssue", { type: "string" });
  return db.changeColumn("invoices", "dueDate", { type: "string" });
};

exports._meta = {
  version: 1,
};
