import mysql from "mysql2/promise";

export async function dbQuery({ sql, values }) {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "docs",
    user: "docs",
    password: "docs"
  });
  try {
    const [data] = await connection.query(sql, values);
    connection.end()
    return data
  } catch (error) {
    console.error(error)
  }
}
