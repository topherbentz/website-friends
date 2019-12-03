const express = require('express');
const path = require('path');

const router = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production"){
    router.use(express.static("public"));
  
    router.get('*',(req,res) => {
      res.sendFile(path.resolve(__dirname, "public","index.html"))
    });
  }

  router.listen(port, () => console.log(`Listening on port ${port}`));