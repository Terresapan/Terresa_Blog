const sql = require("better-sqlite3");
const db = sql("users.db");

const users = [
  { name: 'John Doe', email: '9fUeh@example.com' }
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )
`).run();

async function initData() {
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  for (const user of users) {
    stmt.run(user.name, user.email);
  }
}

// Call the initData function and wait for it to complete
initData().then(() => {
  console.log("Data initialization completed.");
}).catch((err) => {
  console.error("Error initializing data:", err);
});