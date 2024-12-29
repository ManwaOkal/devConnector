const express=require('express');//allows us to load the express we had initially intalled using npm

const app=express();//creates an instance of express

const PORT=process.env.PORT || 4000; //this allows us to listen to the activites of 
//the server and get its PORT number if its deployed to platforms like Horuku, 
// if not, it will run locally on port 5000

app.get('/',(req,res)=>res.send('API running'))//checks whether the API is running by sending a message to the browser that we can then recieve on postman

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))//checks if the server has started

