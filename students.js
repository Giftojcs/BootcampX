const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT id, name, cohort_id
  FROM students
  LIMIT $1;
`, [5])
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

