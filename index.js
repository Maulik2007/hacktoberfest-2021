const express = require('express')
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({
     message : 'hello world'
  })
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
})
