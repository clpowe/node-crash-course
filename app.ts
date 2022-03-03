const express = require('express')

// express app
const app = express()

// listen for request
app.listen(3000)

app.get('/',(req: any,res: any)=>{ 
  res.sendFile('./views/index.html',{ root: __dirname })
})

app.get('/about',(req: any,res: any) => {
  res.sendFile('./views/about.html',{ root: __dirname })
})

// redirects
app.get('/about-us', (req: any,res: any) => {
  res.redirect('/about')
})

// 404 page
app.use((req: any,res: any) => {
  res.status(404).sendFile('./views/404.html',{ root: __dirname })
})