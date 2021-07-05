const router = require('express').Router();
	
	const BOOKS = [
	  {
	    id: 11,
	    title: 'Magic',
	    src: 2,
	    author: 'Ggggg',
	    description: 'КShort story',
	    keywords: ['hello', 'my', 'world'],
	    rating: 2,
	    price: 100,
	    created_at: new Date(2016, 1, 3),
	    image: '/img/firstBook.jpeg'
	  },
	  {
	    id: 12,
	    title: 'TITLE',
	    src: 3,
	    author: 'Kkkk',
	    description: 'Long story',
	    keywords: ['hello', 'my', 'world'],
	    rating: 3,
	    price: 200,
	    created_at: new Date(2010, 2, 12),
	    image: 'img/secondBook.jpg'
	  },
	  {
	    id: 13,
	    title: 'TITLE',
	    src: 1,
	    author: 'Hhhhh',
	    description: 'SHORT',
	    keywords: ['hello', 'my', 'world'],
	    rating: 4,
	    price: 0,
	    created_at: new Date(1999, 2, 10),
	    image: 'img/thirdBook.jpg'
	  },
	  {
	    id: 14,
	    title: 'TITLE',
	    src: 4,
	    author: 'Lllll',
	    description: 'LONG',
	    keywords: ['hello', 'my', 'world'],
	    rating: 5,
	    price: 200,
	    created_at: new Date(2010, 9, 1),
	    image: 'img/fourthBook.jpg'
	  },
	  {
	    id: 15,
	    title: 'TITLE',
	    src: 5,
	    author: 'Fffff',
	    description: 'LONG SHORT',
	    keywords: ['hello', 'my', 'world'],
	    rating: 2,
	    price: 100,
	    created_at: new Date(2018, 11, 1),
	    image: 'img/fifthBook.jpg'
	  },
	  {
	    id: 16,
	    title: 'TITLE',
	    src: 6,
	    author: 'Ccccc',
	    description: 'SHORT',
	    keywords: ['hello', 'my', 'world'],
	    rating: 1,
	    price: 300,
	    created_at: new Date(2018, 6, 10),
	    image: 'img/sixthBook.jpg'
	  }
	]
	
	router.get('/:id', (req, res) => {
	  const { id } = req.params
	
	  res.json({ payload: BOOKS.find((book) => book.id === +id) })
	})
	
	const MOST_POPULAR_FILTER = 'most-popular'
	const FREE_BOOKS_FILTER = 'free-books'
	const MOST_RECENT_FILTER = 'most-recent'
	const nowDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate())
	
	router.get('/', (req, res) => {
	  const { query } = req; 
	  const { filter, match } = query
	
	  if (filter) {
	    switch (filter) {
	      case MOST_POPULAR_FILTER: {
	        return res.json({
	          payload: BOOKS.filter(book => book.rating >= 4)
	        })
	      }
	      case FREE_BOOKS_FILTER: {
	        return res.json({
	          payload: BOOKS.filter(book => book.price == 0)
	        })
	      }
	      case MOST_RECENT_FILTER: {
	        return res.json({
	          payload: BOOKS.filter(book => book.created_at > nowDate)
	        })
	      }
	    }
	  }
	  if (match) {
	    return res.json({
	      payload: BOOKS.filter(book => book.title.includes(match) || book.author.includes(match) || book.keywords.find(function (keyword) {return keyword === match}))
	    })
	  }
	
	  res.json({ payload: BOOKS });
	});

	router.post('/', function (req, res) {
	  const { title, author, description, created_at } = req.body
	  const book = {
	    id: ID++,
	    title,
	    author,
	    created_at,
	  description}
	  BOOKS.push(book);
	  res.setHeader('content-type', 'application/json');
	  res.send(JSON.stringify(book));
	})
	
	router.put('/:id', function (req, res) {
	  const { title, src, author, rating, price, created_at } = req.body
	  const { id } = req.params
	  let book = BOOKS.find(book => book.id === +id)
	  book.title = title;
	  book.src = src;
	  book.author = author;
	  book.rating = rating;
	  book.price = price;
	  book.created_at = new Date(created_at);
	  res.json({ payload: book })
	});
	
	module.exports = router;
