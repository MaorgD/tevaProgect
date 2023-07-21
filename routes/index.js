const express= require("express");
const router = express.Router();

router.get("/" , (req,res)=> {
  res.json({msg:"maor: Rest api work !"})
})

module.exports = router;