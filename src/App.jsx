import { useState, useEffect } from "react"
// import './App.css'
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);

    }
    fetchPosts()
  }, [])
  // console.log(posts)


  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPost = posts.slice(indexOfFirstPage, indexOfLastPage)

  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  return (
    <>
    <div className="block">
      <h2 className="text-2xl text-blue-300 p-3">My blog</h2>
      <Posts posts={currentPost} loading={loading}/>
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
      </div>
    </>
  )
}

export default App
