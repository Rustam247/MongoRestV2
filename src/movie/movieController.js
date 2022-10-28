const Movie = require("./movieModel")
const User = require("../user/userModel")

exports.createMovie = async (req, res) =>{
    try{
        const newMovie = await Movie.create(req.body);
        res.status(201).send({movie: newMovie});
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.readMovie = async (req, res) =>{
    try{
        const movies = await Movie.find({});
        const user = await User.find({});
        if(movies && user) {
            res.status(200).send({movie: movies, user})  
        }else{
            response.status(500).send({ error: "Could not get." });
        }
        
    } catch(error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
exports.readMovieOne = async (req, res) =>{
    try{
        const movies = await Movie.findOne({username: req.params.username});
        const user = await User.findOne({username: req.params.username});
        if(movies && user) {
            res.status(200).send({movie: movies, user})  
        }else{
            response.status(500).send({ error: "Could not get." });
        }
        
    } catch(error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.updateMovie = async (req, res) =>{
    try{
        await Movie.updateOne(
            {title: req.body.title},
            {[req.body.key]: req.body.value}
        )
        res.status(200).send({message: "Successfully update a Movie"})
    }catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.deleteMovie = async(req, res)=>{
    try{
        await Movie.deleteOne(req.body)
        res.status(200).send({message: "Successfully delete a Movie"})
    }catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}