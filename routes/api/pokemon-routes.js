const router = require('express').Router();
const {
    Pokemon
} = require('../../models');

const withAuth = require('../../utils/auth');

//get all pokemon
router.get('/', (req, res) => {

    //find all pokemon
    Pokemon.findAll({
            attributes: [
                'id',
                'pokemon_name'
            ]
        })

        .then(dbPokemon => res.json(Pokemon))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get one pokemon
router.get('/:id', (req, res) => {
            //find a single pokemon by its 'id'
            Pokemon.findOne({
                where: {
                    id: req.params.id
                },
                attributes: [
                    'id',
                    'pokemon_name',
                    'type'
                ],
                include: [{
                    model: Type,
                    attributes: ['type_name']
                
                
            }]
          
});

            //delete pokemon
            router.delete('/:id', (req, res) => {
                //delete one product by its 'id' value
                Pokemon.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(Pokemon => {
                        if (!Pokemon) {
                            rs.status(404).json({
                                message: 'No pokemon found with this id'
                            });
                            return;
                        }
                        res.json(Pokemon);
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json(err)});
                    });
            });

            module.exports = router;