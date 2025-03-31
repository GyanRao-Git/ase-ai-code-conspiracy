const PORT = 5000;
//import "tailwindcss/tailwind.css";
const express=require('express');
const userRouter = require("./routes/userRouter");
const errorController=require("./controllers/errorController")
const app=express();

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static("public"));

app.use(userRouter);

app.use(errorController.get404)

app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`);
})