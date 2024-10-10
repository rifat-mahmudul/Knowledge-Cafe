import { useState } from 'react'
import './App.css'
import BookMarks from './components/BookMarks/BookMarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddtoBookMark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time)
  }


  return (
    <>
      <Header></Header>
      <main className='max-w-[1150px] mx-auto flex justify-between items-start mt-4'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleAddtoBookMark={handleAddtoBookMark}></Blogs>
          <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </main>


    </>
  )
}

export default App