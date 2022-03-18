import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './component/ui/Header'
import Search from './component/ui/Search'
import CharacterGrid from './component/characters/CharacterGrid'

const App = () => {

    const [items,setItems] =useState([])
    const [isLoadin,setIsLoading] =useState(true)
    const [query,setQuary] =useState('')


    useEffect(()=>{
       const fetchItems = async () =>{
           const result = await axios(
            `https://www.breakingbadapi.com/api/characters?name=${query}`
          )
          console.log(result.data)

          setItems(result.data)
          setIsLoading(false)
       }
       fetchItems()
    },[query])


  return (
    <div className='container'>
      <Header/>
      <Search getQuery={(q) => setQuary(q) } />

      <CharacterGrid isLoadin={isLoadin} items={items} /> 
    </div>
  )
}

export default App

// axios return a promises
