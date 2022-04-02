/* eslint-disable */

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = (options, seedLink) => {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = (db) => (
  db.createTable(
    'section',
    {
      id: {
        type: 'string',
        length: 36,
        notNull: true,
        primaryKey: true,
      },
      name: {
        type: 'string',
        length: 100,
        notNull: true,
      },
      date_created: {
        type: 'datetime',
        notNull: true,
        defaultValue: new String('now()'),
      },
    },
  )
);

exports.down = (db) => db.dropTable('section');

exports._meta = {
  "version": 1
};
