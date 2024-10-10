import Bookmark from "../Bookmark/Bookmark"

const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <>

    
        <div className="w-[35%] bg-gray-300 p-2 rounded-md">

        <div className="mb-5 bg-blue-400 p-3 rounded-md">
            <h3 className="text-3xl">Reading Time {readingTime}</h3>
        </div>

        <h2 className="text-xl font-semibold mb-3">Bookmarked Blog : {bookmarks.length}</h2>

        <h1 className="">
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </h1>

        </div>
        
        </>
    )
}

export default BookMarks
