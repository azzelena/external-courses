let books = [];
	//Все книги
	function getAllBooks () {
	  return fetch('/api/books')
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json()
	      }
	      throw new Error('Something goes wrong =(')
	    })
	    .then(data => {
	      renderBooks(data.payload);
	      saveBooks(data.payload);
	})
	};
	getAllBooks()

	function saveBooks(receivedBooks) {
	    books = receivedBooks;
	}
	
	// Поиск по ID
	function getBook (id) {
	  return fetch(`/api/books/${id}`)
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json()
	      }
	      throw new Error('Something goes wrong =(')
	    })
	    .then(data => renderBooks([data.payload]))
	}
	
	const bookList = document.getElementById('books-list'); 
		
	//Избавляемся от повтора
		function delRepeat () {
			while (bookList.firstChild) {
				bookList.removeChild(bookList.firstChild);
			}
		}
	//Вывод всех книг
	function renderBooks(books) {
		delRepeat();
			for(let i = 0; i < books.length; i++) {
				var book = document.createElement('div'); 
				var title = document.createElement('div');
					title.style.color = '#4D4D4D';
					title.style.fontWeight = 'bold';
				var author = document.createElement('div');
					author.style.color = '#4D4D4D';
						book.className = 'book';
						book.dataset.id = books[i].id;
						title.textContent = books[i].title;
						author.textContent = books[i].author;
				var img = document.createElement('img');
				 	img.src = books[i].image;
				 	img.width = '180';
				 	img.height = '250';
				var rating = renderRating(books[i].rating);

				book.append(img);
				book.append(title); 
				book.append(author);
				book.append(rating);
				bookList.append(book);
			}
	}
	
	//Рейтинг
	function renderRating(number) { 
	    var stars = document.createElement('div');
			stars.className = ('stars');
	    	for (let i = 1; i <= 5; i++){
	        	var star = document.createElement('i');
	        if (number >= i){
	          star.className = ('fa fa-star');
	        } else {
	          star.className = (' ');
	        }
	        star.dataset.rating = i;
	        stars.append(star);
	    }
	    return stars;
	}
	
	bookList.addEventListener('click', addRating);
	
	//Сохранение рейтинга, в фильтре
	function addRating(event) { 
	    event.stopPropagation();
	    let star = event.target.closest('.stars > i');
	    if (star) {
	        let rating = star.dataset.rating;
	        let book = event.target.closest('[data-id]');
	        let bookId = book.dataset.id;
	        let bookModel = books.find(book => book.id === +bookId);
	        let updatedBook = {...bookModel, rating};
	        return fetch(`/api/books/${bookId}`, {
	            method: "PUT",
	            headers: {'Content-Type': 'application/json'},
	            body: JSON.stringify(updatedBook)
	        })
	            .then(responce => {
	                if (responce.ok) {
	                    return responce.json();
	                }
	
	                throw new Error('Something goes wrong =(');
	            })
	            .then(data => {
	                Object.assign(bookModel, updatedBook);
	                renderBooks(books);
	            });
	    }
	}

	//MOST POPULAR
	function mostPopular () {
	  return fetch('/api/books?filter=most-popular')
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json()
	      }
	
	      throw new Error('Something goes wrong =(');
	    })
	    .then(data => renderBooks(data.payload));
	}
	
	//FREE
	function freeBooks () {
	  return fetch('/api/books?filter=free-books')
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json()
	      }
	
	      throw new Error('Something goes wrong =(')
	    })
	    .then(data => renderBooks(data.payload))
	}
	
	//MOST RECENT
	function mostRecent () {
	  return fetch('/api/books?filter=most-recent')
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json()
	      }
	
	      throw new Error('Something goes wrong =(')
	    })
	    .then(data => renderBooks(data.payload))
	}
	
	//Поиск 
	function getBookMatch (match) {
	  return fetch(`/api/books?match=${match}`)
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json();
	      }
	
	      throw new Error('Something goes wrong =(')
	    })
	    .then(data => renderBooks(data.payload));
	}
	
	//Поиск книг
	function searchBook () {
		var searchQuery = document.getElementById('textSearch').value;
			if (this.timer) {
				clearTimeout(this.timer)
			}
			searchQuery = searchQuery.toLowerCase();
			this.timer = setTimeout(() => getBookMatch(searchQuery), 1000);
	}
	