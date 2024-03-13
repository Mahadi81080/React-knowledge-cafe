import { useCallback, useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
    // Remove the read blog from bookmark
    // console.log('remove book mark',id)
    // const remainingBookMarks = bookmarks.filter(
    //   (bookmark) => bookmark.id !== id
    // );
    // setBookmarks(remainingBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-12">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}
export default App;
