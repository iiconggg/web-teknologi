// pages/api/test-connection.js
import { sql } from "@vercel/postgres";
import dotenv from 'dotenv';

// Memuat variabel lingkungan dari .env
dotenv.config();

export default async function handler(req, res) {
  try {
    // Menggunakan variabel lingkungan untuk koneksi
    const { rows } = await sql`SELECT * FROM CARTS`; // Sesuaikan query dengan kebutuhan Anda

    res.status(200).json({
      message: 'Connected to PostgreSQL successfully',
      data: rows,
    });
  } catch (error) {
    console.error('Error connecting to the database', error.stack);
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
}
