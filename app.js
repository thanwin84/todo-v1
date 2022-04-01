const express = require('express');
const https = require('https');
const date = require(__dirname + '/date.js')

const newListItems = []
const workList = []
const app = express();
// using middleware
app.use(express.urlencoded({extended: false}))
app.use(express.static('pulic'))

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    const day = date.getDate();
    res.render("list", {
        title: day,
        listItems:newListItems
    })
})
app.get('/work', (req, res)=>{
    res.render("list", {
        title: "work",
        listItems: workList
    })
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.post('/', (req, res)=>{
    const listItem = req.body.newItem;
    const {list} = req.body;
    console.log(list)
    if (list === 'work'){
        workList.push(listItem);
        res.redirect('/work')
    }
    else {
        newListItems.push(listItem);
        res.redirect('/')
    }
})

app.listen(3000, (req, res)=>{
    console.log("server is listening on port 300")
})