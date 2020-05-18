const router = require('express').Router();
const User = require('../models/User');

router.get('/users', async (req,res)=>{
    try{
        const result = await User.find({},{id:1,name:1,_id:0});
        res.send(result);
    }
    catch(e){
        console.log(e.toString());
        res.send('Error fetching information : ' + e.toString());
    }
    
})

router.post('/users', async (req,res)=>{
    console.log(req.body)
    const user = new User({
        'name': req.body.name,
        'id': req.body.id
    });

    try{
        await user.save();
        res.send('User Saved Successfully');
    }
    catch(e){
        console.log(e.toString());
        res.send('Error saving information : ' + e.toString());
    }
    
})

router.get('/users/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        let result = await User.findOne({id:id},{id:1,name:1,_id:0});
        if(result === null){
            result = `User with id : ${id} does not exist`;
        }
        res.send(result);
    }
    catch(e){
        console.log(e.toString());
        res.send('Error fetching information : ' + e.toString());
    }
    
});

router.put('/users/:id', async (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;

    try{
        await User.updateOne({id:id},{$set:{name:name}});
        res.send('User info Updated');
    }
    catch(e){
        console.log(e.toString());
        res.send('Error updating information : ' + e.toString());
    }
});

router.delete('/users/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        await User.deleteOne({id:id});
        res.send('User Deleted');
    }
    catch(e){
        console.log(e.toString());
        res.send('Error deleting information : ' + e.toString());
    }
});


module.exports = router;