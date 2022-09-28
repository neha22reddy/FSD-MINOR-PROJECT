const { request } = require('express')
const express=require('express')
const router=express.Router()
const s2=require('../model/modelalien')
router.get('/',async(req,res)=>{
    try{
        const a = await s2.find()
        res.json(a)
    }
    catch(err){

        res.send("Error"+err)

    }
})
router.patch('/',async(req,res)=>{
    try{
        const a = await s2.findById(req.params.id)
        a.tech=req.body.tech
        const a1=a.save()
        res.json(a)
    }
    catch(err){

        res.send("Error"+err)

    }
})
router.post('/',async(req,res)=>{
    const x =new s2(
        {
            name:request.body.name,
            tech:req.body.tech,
            section:req.body.section
        })
    try{
        const x1 = await x.save()
        res.json(x1)
    }
    catch(err){
        res.send("Error"+err)
    }
        

})
module.exports=router

