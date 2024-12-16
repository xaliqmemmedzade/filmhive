import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 

function List() {
  const [myList, setMyList] = useState([])

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("myList"))
    if (localData) {
      setMyList(localData)
    }
  }, [])
  const deleteList = (id)=>{
    localStorage.setItem("myList", JSON.stringify( myList.filter(list=> list.id !== id)))
    setMyList( myList.filter(list=> list.id !== id))
  }

  console.log(myList);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
          myList.map((list) => (
            <div
              key={list.id}
              className="bg-gray-800 border-2 border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-6 flex flex-col justify-between"
            >
              <Link
              to={`${list.id}`}
                className="text-xl text-blue-400 hover:text-blue-600 font-semibold mb-4"
              >
                {list.title}
              </Link>
              <button onClick={()=>deleteList(list.id)} className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-300">
                Delete
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List
