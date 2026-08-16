// ============================================
// db.js — Angkor AI Database
// ============================================
const Database = require('better-sqlite3');
const db = new Database('chat.db');

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON'); // ត្រូវការដើម្បីឲ្យ FOREIGN KEY ពិតជាដំណើរការ

// ===== SETUP ALL TABLES =====
db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  password_hash TEXT,
  google_id TEXT UNIQUE,
  name TEXT,
  grade TEXT,
  is_admin INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  download_url TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS memory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  fact TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_messages_user ON messages(user_id);
CREATE INDEX IF NOT EXISTS idx_memory_user ON memory(user_id);
`);

// ===== USER FUNCTIONS =====
function createUser({ email, password_hash, name, grade }) {
  const stmt = db.prepare(`
    INSERT INTO users (email, password_hash, name, grade)
    VALUES (?, ?, ?, ?)
  `);
  return stmt.run(email, password_hash, name, grade);
}

function createGoogleUser({ email, google_id, name, grade }) {
  const stmt = db.prepare(`
    INSERT INTO users (email, google_id, name, grade)
    VALUES (?, ?, ?, ?)
  `);
  return stmt.run(email, google_id, name, grade);
}

function findUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

function findUserByGoogleId(google_id) {
  return db.prepare('SELECT * FROM users WHERE google_id = ?').get(google_id);
}

function findUserById(id) {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

function linkGoogleId(userId, google_id) {
  return db.prepare('UPDATE users SET google_id = ? WHERE id = ?').run(google_id, userId);
}

// ===== MESSAGE FUNCTIONS =====
function saveMessage({ user_id, role, content, download_url = null }) {
  return db.prepare(`
    INSERT INTO messages (user_id, role, content, download_url)
    VALUES (?, ?, ?, ?)
  `).run(user_id, role, content, download_url);
}

function getMessages(user_id) {
  return db.prepare(`
    SELECT * FROM messages WHERE user_id = ? ORDER BY created_at ASC
  `).all(user_id);
}

function clearHistory(user_id) {
  return db.prepare('DELETE FROM messages WHERE user_id = ?').run(user_id);
}

// ===== MEMORY FUNCTIONS =====
function saveFact({ user_id, fact }) {
  return db.prepare(`
    INSERT INTO memory (user_id, fact)
    VALUES (?, ?)
  `).run(user_id, fact);
}

function getFacts(user_id) {
  return db.prepare(`
    SELECT id, fact, created_at FROM memory WHERE user_id = ? ORDER BY created_at ASC
  `).all(user_id);
}

function deleteFact(id) {
  return db.prepare('DELETE FROM memory WHERE id = ?').run(id);
}

// ===== ADMIN FUNCTIONS =====
function getAllUsers() {
  return db.prepare(`
    SELECT id, email, name, grade, is_admin, created_at FROM users ORDER BY created_at DESC
  `).all();
}

function getTodayMessageCount() {
  // +7 hours = Cambodia time (UTC+7), so "today" resets at Cambodia midnight, not UTC midnight
  return db.prepare(`
    SELECT COUNT(*) as count FROM messages
    WHERE date(created_at, '+7 hours') = date('now', '+7 hours')
  `).get();
}

module.exports = {
  createUser, createGoogleUser,
  findUserByEmail, findUserByGoogleId, findUserById, linkGoogleId,
  saveMessage, getMessages, clearHistory,
  saveFact, getFacts, deleteFact,
  getAllUsers, getTodayMessageCount,
};
