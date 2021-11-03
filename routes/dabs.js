const express=require('express')
const { model } = require('mongoose')
const router=express.Router()
let Dab =require('../Models/Dabs')

//Route http://localhost:5000/dab/registerDAB
//@role register
//public

router.post('/registerDAB',async(req,res)=>{
    const{affiliation,nomdab,agence,etat,responsable,codebanque}=req.body
    try {

        //verifier si le DAB exist déja

        let dab= await Dab.findOne({affiliation})
        if (dab) {return res.json({msg:`DAB exist déja`})}

//creation DAB
dab=new Dab({affiliation,nomdab,agence,etat,responsable,codebanque})
//Sauvegarder DAB
await dab.save()

res.status(202).json({msg:`DAB Ajouté Avec Succes`,dab})

    }catch(error){
        res.status(500).json({msg:error.message})
    }
})


//Route http://localhost:5000/dab/all
//@role Get Dab
//Private

router.get("/all",async(req,res)=>{
    
    try {
        const dabs=await Dabs.find()
        res.status(200).json({dabs})
    }catch(error){
        res.status(500).json({msg:error.message})
    }
        
    })


    //@role:delete a  dabs
//@url: http://localhost:5000/dab/delete/:id
//pubilc/private
router.delete('/delete/:id',async(req,res)=>{
    const ID =req.params.id
    try {
        const dab= await Dabs.findByIdAndDelete(ID) 
        res.status(200).json({msg:'the DAB has been deleted',dab })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
    } )

//@url: http://localhost:5000/api/contacts/edit/:name
//private
router.put('/edit/:affiliation', async(req,res)=>{
    const AFFILIATION=req.params.affiliation
try {
    const dab= await  Dabs.findOneAndUpdate({affiliation:AFFILIATION},{$set: req.body } )
    res.status(200).json({dab})
} catch (error) {
    res.status(400).json({message:error.message} )
}

})
    
module.exports=router