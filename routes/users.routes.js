const { Router} = require("express");
const { usersGet, userDelete, usersPatch, userPost, usersPut } = require("../controllers/user.controller");
const router = Router();


//GET
router.get('/',usersGet);
//PUt
router.put('/:id',usersPut);
//post
router.post('/', userPost);
//delete
router.delete('/', userDelete);
//patch
router.patch('/', usersPatch);




module.exports = router;