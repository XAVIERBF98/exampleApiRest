const {response, request} = require('express');


//Get Users
const usersGet =(req, res = response)=>{
    res.json({
        ok: true,
        msg: "get API- this Controller"
    });
}
//Post Users
const userPost =(req, res = response)=>{

    const {name, age    } = req.body;

    res.json({
        ok: true,
        msg: "Post API- this Controller",
        name,
        age
    });
}
//Put Users
const usersPut =(req= request, res = response)=>{

    const { id   }  =  req.params
    res.json({
        ok: true,
        id,
        msg: "Put API- this Controller",
    
    });
}
//Delete Users
const userDelete =(req, res = response)=>{
    res.json({
        ok: true,
        msg: "Delete API- this Controller"
    });
}
//Patch Users
const usersPatch =(req, res = response)=>{
    res.json({
        ok: true,
        msg: "Patch API- this Controller"
    });
}






module.exports = {
    usersGet, userPost, usersPut, userDelete, usersPatch
}
