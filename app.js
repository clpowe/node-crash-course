const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express()

// connect to mongodb
const dbURI =
	'mongodb+srv://clpowe:Year1982@nodetuts.yozqe.mongodb.net/nodetuts?retryWrites=true&w=majority'

mongoose
	.connect(dbURI)
	.then(() => {
		app.listen(3000)
		console.log('connected to db')
	})
	.catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))
app.use(morgan('dev'))

app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'new blog 2',
		snippet: 'about my new blog',
		body: 'more interesting content'
	})

	blog
		.save()
		.then((results) => {
			res.send(results)
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/all-blogs', (req, res) => {
	Blog.find()
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/single-blog', (req, res) => {
	Blog.findById('62234d5ba4f568ac5a198e4b')
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
})

// routes
app.get('/', (req, res) => {
	res.redirect('/blogs')
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About'
	})
})

// blog routes
app.get('/blogs', (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render('index', { title: 'All Blogs', blogs: result })
		})
		.catch((err) => {
			console.log(err)
		})
})

app.get('/blog/create', (req, res) => {
	res.render('create', {
		title: 'Create'
	})
})

// redirects
app.get('/about-us', (req, res) => {
	res.redirect('/about')
})

// 404 page
app.use((req, res) => {
	res.status(404).render('404', {
		title: '404'
	})
})
