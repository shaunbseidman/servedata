const express = require('express');
const cors = require('cors');
const data = require('./content.json');
const app = express();
const port = process.env.PORT || 2001;
app.use(cors())

app.get('/',function(req, res) {
  res.json({data})
})


function listById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

app.get('/:id', function(req, res) {
  var record = listById(data, req.params.id)
  if (!record) {
    res.status(404).json({
      error: {message: "No record found!"}
    })
  } else{
    res.json({data: record})
  }
})

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
