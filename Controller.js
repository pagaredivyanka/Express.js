const studmodel = require('./modal')

const showdetail = async(req,res)=>{
    try{
        const data = await studmodel.find()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err);
        res.status(400).send({err})
    }
        
}

module.exports={showdetail}