const { Pool } = require('pg');

const pool = new Pool({
  user: 'pizzeria_pro_db_user',
  host: 'dpg-cg3kefndvk4r4hj8eevg-a',
  database: 'pizzeria_pro_db',
  password: 'XiYNArRvQJV4Os6mieI0FQDDPNjw6L3H',
  port: '5432',
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected successfully');
});
