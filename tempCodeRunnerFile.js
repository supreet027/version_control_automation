const results = await connection.query(query);

for (const row of results) {
  console.log(row.name);
}