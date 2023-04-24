const express=require("express");
const router=express.Router();
const details=require("../trial/schema");

router.post("/",async(req,res)=>{
    try {
        const posting = new details({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email
        });
        const saved=await posting.save();
        res.send(saved)
    } catch (error) {
        res.send(error)
    }
});

router.get("/",async(req,res)=>{
    try {
        const getAll=await details.find()
        res.send(getAll)
    } catch (error) {
        res.send(error)
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const getByID=await details.findById(req.params.id)
        res.send(getByID);
    } catch (error) {
        res.send(error)
    }
});

router.put("/:id",async(req,res)=>{
    try {
        const update=await details.findByIdAndUpdate({_id:req.params.id},{$set:{name:req.body.name,age:req.body.age,email:req.body.email}});
        res.send(update)
    } catch (error) {
        res.send(error)
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const deleting=await details.findByIdAndDelete(req.params.id)
        res.send(deleting)
    } catch (error) {
        res.send(error)
    }
});

router.get("/", (req, res) => {
    res.send("Router is working");
});

module.exports=router;