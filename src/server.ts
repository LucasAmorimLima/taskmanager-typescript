import app from "./app"

app.listen(process.env.port || 3000, ()=>{
    console.log("listering on port 3000")
})