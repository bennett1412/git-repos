import React, { useState,useEffect } from 'react'
import Card from './Card'
import{ fetchNews, filterNews, searchNews} from '../api.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function Home() {

    const [searchFor, setSearchFor] = useState(null);

    const [Filter, setFilter] = useState("")
    const [News, setNews] = useState(null);
    const handlChange = (e) => {
        setSearchFor(e.target.value);
    }
    async function getNews(){
        setFilter('');
        const response = await fetchNews();
        if(response.status === 200){
  setNews(response.data.articles);
  console.log(News);
        }
        else console.log(response);
    }
    useEffect( () => {
            
            getNews();    
        console.log(News);
    },[]);


    const handleFilter = (e) => {
        setFilter(e.target.value);
        console.log(Filter);
    }
    const applyFilter = async () =>  {

        const response = await filterNews(Filter);
        if(response.status === 200)
        setNews(response.data.articles);
        else console.log(response);
        console.log("applying filter");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await searchNews(searchFor);
        if(response.status === 200){
            setNews(response.data.articles);
        }
        else{
            console.log("some error");
        }
        // setSearchFor(null);
    }
   
    return (
        <div className='bg-gray-900'>
            <div className='bg-blue-900 p-4 flex flex-col sm:flex-row justify-between drop-shadow-lg'>
                <div className='text-white p-3 rounded-lg hover:drop-shadow-xl'><button onClick={getNews}>NewsNow</button></div>
                <div>
                <input name='searchfor' type="text" className='rounded-lg p-3' placeholder='Search here...' defaultValue={searchFor} onChange={handlChange}></input>
                <button type='submit' className='p-2 bg-green-600 text-white rounded-lg m-1 mx-2 hover:bg-green-800' onClick={handleSubmit}>Go</button>
                </div>
            </div>
            {(searchFor === null) && <div className='flex flex-row justify-between h-auto bg-gray-200 m-3 p-2 rounded-lg'>
                
                <div className='align-middle p-3'>
                <FormControl>
               
                
      <FormLabel className='basis-1/4' id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={handleFilter} value="science" checked={Filter === "science"} control={<Radio />} label="Science" />
        <FormControlLabel onChange={handleFilter} value="entertainment" checked={Filter === "entertainment"} control={<Radio />} label="Entertainment" />
        <FormControlLabel onChange={handleFilter} value="business" checked={Filter === "business"} control={<Radio />} label="Business" />
        <FormControlLabel onChange={handleFilter} value="general" checked={Filter === "general"} control={<Radio />} label="General" />
        
      </RadioGroup>
 
    </FormControl>
    </div>
        
                <button onClick={applyFilter} className="bg-green-600 hover:bg-green-800 hover:drop-shadow-2xl drop-shadow-sm rounded-md p-1 m-3 text-white basis-1/6"> Go </button>
            </div>} 
            <div className='grid grid-cols-1 lg:grid-cols-3'>
            
            {News && News.map((article,index) => {
                return (
                    <Card category={article.category??null} url={article.url} key={index} descp={article.description} headline={article.title} source={article.source.name} imageUrl={article.urlToImage} />
                )
            }
            )}
            </div>
        </div>
    )
}

export default Home