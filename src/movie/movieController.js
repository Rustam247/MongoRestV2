const Movie = require("./movieModel")

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
        const movies = await Movie.find({})
        res.status(200).send({movie: movies})
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