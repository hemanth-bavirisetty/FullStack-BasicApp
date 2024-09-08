import express from 'express';
const app = express();
const port =  process.env.PORT || 3000;



const jokes = [
    {
        "id": 1,
        "title": "A joke",
        "content": "This is a joke."
    },
    {
        "id": 2,
        "title": "Another joke",
        "content": "This is another joke."
    },
    {
        "id": 3,
        "title": "A third joke",
        "content": "This is a third joke."
    },
    {
        "id": 4,
        "title": "A fourth joke",
        "content": "This is a fourth joke."
    },
    {
        "id": 5,
        "title": "A fifth joke",
        "content": "This is a fifth joke."
    },
    {
        "id": 6,
        "title": "A sixth joke",
        "content": "This is a sixth joke."
    },
];



app.get('/',(req,res)=>{
    res.send('App is running...')
});


app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
