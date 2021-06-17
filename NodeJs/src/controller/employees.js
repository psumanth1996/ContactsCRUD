const express = require('express');
const router = new express.Router()

const Employee = require('../models/employee')

router.post('/employees', async (req,res)=>{
        const emp = new Employee(req.body)
        try{
            await emp.save()
            res.send(emp)
            
        }catch(e){
            res.send(e)
        }
})

router.get('/employee/list',async (req,res)=>{
    try{
        const employee = await Employee.find({})
        res.send(employee)
    }catch(e){
        res.send(e)
    }
})


router.get('/employee/:id',async (req,res)=>{
    const _id = req.params.id;
    try{
        emp = await Employee.findById(_id)
        if(!emp){
           return res.status(404).send()
        }
        res.send(emp)
    }catch(e){
        res.status(500).send(e)
    }
})


router.patch('/employee/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['FirstName','LastName','Phone'];
    const isValidUpdate = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidUpdate){
        return res.status(400).send('Invalid Updates')
    }
    try{
       const emp = await Employee.findByIdAndUpdate(req.params.id,{$set:req.body},{ new: true, runValidators: true })
       if(!emp){
        return res.status(404).send()
       }
       res.send(emp)
    }catch(e){
        res.status(500).send(e)
    }
})


router.delete('/employee/:id', async (req,res)=>{
    const id = req.params.id
    try{
        const emp = await Employee.findByIdAndDelete(id)
        if(!emp){
            return res.send('there is no user available')
        }
        await emp.remove()
        res.send(emp)
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = router