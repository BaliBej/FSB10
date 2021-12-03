document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();

    const isbn = document.querySelector('input').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => response.json())
        .then(data => {
            const bookTitle = document.createElement('h2');
            bookTitle.innerText = data.items[0].volumeInfo.title;

            document.querySelector('.book-info').appendChild(bookTitle);
        })
        .catch(error => console.error(error));

});
