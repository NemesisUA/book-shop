import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(json => setBooks(json))
      .catch(error => console.error(error))
  }, []);

  return (
    <Container maxWidth='xl'>
      <h1>Books</h1>
      {books.length > 0 && books.map(book => {
        return (
          <li key={book.title}>{book.title}</li>
        )
      })}
    </Container>
  )
}

export default HomePage