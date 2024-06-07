const express = require(`express`);
const app = express();

app.listen(3000);

app.use(express.static("public"));
app.use(express.urlencoded({ extended:true }))

app.set(`view engine`, `ejs`);

// app.get(`/`, (req, res) => {
//     res.render(`index`, { text:  `World`});
//     res.status(500).json({message: `Error`}) 
//     res.download(`server.js`);
// })

const userRouter = require(`./routers/users`);
app.use(`/users`, userRouter);