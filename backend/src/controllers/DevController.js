const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArryay = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store (request, response)  {
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            // name = login - Caso o nome seja nula, busca por login. 
            const {login, avatar_url, bio} = apiResponse.data;
            const techsArryay = parseStringAsArryay(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name : login,
                avatar_url,
                bio,
                techs : techsArryay,
                location
            });
        
            console.log(login, avatar_url, bio, github_username);
        }

        return response.json(dev);
    },

    async update(request, response){
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({github_username});

        if(dev){
            
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const {bio} = apiResponse.data;

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            const techsArryay = parseStringAsArryay(techs);
        
            dev = await Dev.updateOne(
                {
                    github_username
                },
                {
                bio,
                techs : techsArryay,
                location
            });
        }
        else{
            dev = {};
        }

        return response.json(dev);
    },

    async delete(request, response){
        const {github_username} = request.body;

        let dev = await Dev.findOne({github_username});
        let msg = "";

        if(dev){
            
            dev = await Dev.deleteOne(
                {
                    github_username
                },
                (err) =>{
                    console.log(err);
                    if(err){
                        msg = err;
                    }
                    else{
                        msg = "sucesso";
                    }
                }
            );
        }
        else{
            msg = "Não encontrado";
        }

        return response.json({message: msg});
    }
}