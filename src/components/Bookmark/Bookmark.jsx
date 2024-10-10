const Bookmark = ({bookmark}) => {

    const {title} =bookmark;

    return (
        <div>
            <h3 className="text-3xl font-semibold bg-gray-400 p-2 rounded-md mt-3">{title}</h3>
        </div>
    )
}

export default Bookmark
