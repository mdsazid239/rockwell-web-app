const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/;
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message, sourcePage } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: "Name is required." });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return res.status(400).json({ success: false, error: "A valid email is required." });
    }
    if (!phone || !PHONE_RE.test(phone)) {
      return res.status(400).json({ success: false, error: "A valid phone number is required." });
    }

    const [result] = await pool.query(
      `INSERT INTO contacts (name, email, phone, message, source_page) VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), email.trim(), phone.trim(), (message || "").trim(), sourcePage || null]
    );

    return res.status(201).json({
      success: true,
      message: "Thank you. Our team will get in touch with you shortly.",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Error saving contact:", err.message);
    return res.status(500).json({ success: false, error: "Something went wrong. Please try again later." });
  }
});
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, name, email, phone, message, source_page, created_at
       FROM contacts ORDER BY created_at DESC LIMIT 200`
    );
    return res.json({ success: true, data: rows });
  } catch (err) {
    console.error("Error fetching contacts:", err.message);
    return res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

module.exports = router;
