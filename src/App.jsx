import './App.css'
import BookMarks from './components/BookMarks/BookMarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='max-w-[1150px] mx-auto flex justify-between items-start mt-4'>
        <div className="w-[69%] border-2 border-green-500">
          <Blogs></Blogs>
        </div>
        <div className="w-[29%] border-2 border-red-500">
          <BookMarks></BookMarks>
        </div>
      </main>


    </>
  )
}

export default App