import './App.css'
import BookMarks from './components/BookMarks/BookMarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='max-w-[1150px] mx-auto flex justify-between items-start mt-4'>
          <Blogs></Blogs>
          <BookMarks></BookMarks>
      </main>


    </>
  )
}

export default App