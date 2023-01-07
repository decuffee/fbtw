const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('home', {title: "Discover A Better Way"})
})

app.get('/discover', (req, res) => {
  res.render('discover', {title: "Discover"})
})

app.get('/discover/:post', (req, res) => {
  res.render('post_discover', {title: "This Is A Discovery Post"})
})

app.get('/discover/category/:category', (req, res) => {
  res.render('category_discover', {title: "This Is A Discovery Post Category"})
})


app.get('/ministries', (req, res) => {
  res.render('ministries', {title: "Ministries"})
})

app.get('/events', (req, res) => {
  res.render('events', {title: "Events"})
})

app.get('/events/:post', (req, res) => {
  res.render('post_events', {title: "This Is An Event post"})
})

app.get('/about', (req, res) => {
  res.render('about', {title: "About"})
})

app.get('/give', (req, res) => {
  res.render('give', {title: "Give"})
})

app.get('/contact', (req, res) => {
  res.render('contact', {title: "Contact"})
})


app.use((req, res, next) => {
    res.status(404).render('404', {title: "404"});
  })
  
  
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })