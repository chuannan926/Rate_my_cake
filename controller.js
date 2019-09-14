const Models = require('./models');
const Cake = Models["Cake"];
const Review = Models["Review"];

module.exports ={
    index:(request,response) =>{
        Cake.find({}).sort({createdAt:1})
        .then(All_Cake =>{
            console.log("Showing_All_Cakes");
            response.json(All_Cake);
        })
        .catch(err => response.json(err))
    },

    new_cake:(request,response) =>{
        console.log(request.body);
        Cake.create(request.body)
        .then(New_Cake =>{
            console.log("Show new cakes");
            response.json(New_Cake);
        })
        .catch(err => response.json(err))      
    },

    new_review:(request,response) =>{
        // Create a new Review
        Review.create(request.body)
            .then(New_Review =>{    // If review successfully created, add it to the Cake with the right ID
                Cake.findOneAndUpdate({_id: request.params.id}, {$push: {reviews: New_Review}})
                    .then(Cake_Before_Update => {    // Console log the review and Cake ID
                        console.log("Successfully added " + New_Review + " to Cake with id: " + request.params.id);
                        response.json(New_Review);
                    })
                    .catch(err => response.json(err))
                // response.json(New_Review);
            })
            .catch(err => response.json(err))
    },

    one_cake:(request,response) =>{
        console.log("showing one_cake_id ", request.params.id)
        Cake.findById({_id: request.params.id})
            .then(One_Cake =>{
                response.json(One_Cake);
            })
            .catch(err => response.json(err))
    }

    





}