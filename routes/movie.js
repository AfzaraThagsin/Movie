const express=require('express');
const router=express.Router();
// const movieModel=require('../models/movie');
const {getMovie,getAllmovie,createAmovie,getAmovie,updateAmovie,deleteAmovie}=require('../controllers/movie')
router.route('/').get(getAllmovie).post(createAmovie)
router.route('/:id').get(getMovie,getAmovie).patch(getMovie,updateAmovie).delete(getMovie,deleteAmovie)
module.exports=router;