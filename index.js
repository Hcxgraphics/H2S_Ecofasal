import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// import bodyParser from 'body-parser';
// import ejs from 'ejs'; 

const app=express();
const port=3000;

// app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

// app.get("/",(req,res)=>{
//     res.render("mainPage",{
//         sign:"#"
//     });
// });

// app.get("/news",(req,res)=>{
//     res.render("news",{
//         sign:"/"
//     });
// });
// app.get("/about",(req,res)=>{
//     res.redirect("https://drive.google.com/file/d/1FrMmwzrQfPMjKV_qJvF3krE1M7d4m7w8/view?usp=drivesdk")
// });

// app.get("/signin",(req,res)=>{
//     res.render("Sign",{
//         sign:"/"
//     });
// });
// app.get("/login",(req,res)=>{
//     res.render("login",{
//         sign:"/"
//     });
// });
// app.get("/news/loans",(req,res)=>{
//     res.render("loan",{
//         sign:"/",
//         loan:true
//     });
// });

// app.get("/reels",(req,res)=>{
//     res.render("reels",{
//         sign:"/",
//         bool:true
//     });
// });
// app.get("/community",(req,res)=>{
//     res.render("community",{
//         sign:"/",
//         community:true
//     });
// });

// let count=-1;
// app.use(bodyParser.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     console.log(req.method)
//    if(req.method=='POST'){
//      count=1;ad
//     }
//    if(req.method=='GET'){
//      count=2;
//     }
//    next(); 
// });

// app.get("/cropAnalysis",(req,res)=>{
//     console.log(count);
//     res.render("cropAnalysis",{
//         counter:count,
//         sign:"/"
//     })
// });

// app.post("/cropAnalysis/submit",(req,res)=>{
//     console.log(req.body.crop);
//     console.log(count);
//     res.render("cropAnalysis",{
//         counter:count,
//         Crop : req.body.crop,
//         Stage :req.body.stage,
//         sign:"/"
//     });
// });
// app.post("/profile",(req,res)=>{
//     console.log(req.body.fname);
//         res.render("profile",{
//         Fname : req.body.fname,
//         Lname :req.body.lname,
//         profile:true,
//         sign:"/"
//     })   
// });


// app.listen(port,()=>{
//     console.log(`server is running at pory ${port}.`);
// });

if (!process.env.VERCEL) {
    app.listen(3000, () => {
      console.log('Server started on http://localhost:3000');
    });
  }
  
  export default app;