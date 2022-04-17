import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { searchRepos, changePage } from './api';
import Card from '@mui/material/Card';
import RepoCard from './RepoCard';
import Spinner from './Spinner';

import DropDown from './DropDown';

const CssTextField = styled(TextField)({

    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'blue',
        },
        '&:hover fieldset': {
            borderColor: 'blue',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const Home = () => {
    const langs = ["Python", "Javascript", "Java"]
    const [Loading, setLoading] = useState(false);
    const [Language, setLanguage] = useState('')
    const [Page, setPage] = useState(0)
    const counts = ["35", "50", "75", "100"]
    const [PageCount, setPageCount] = useState('')
    const [SortBy, setSortBy] = useState('')
    const [Order, setOrder] = useState('')
    const [SearchKey, setSearchKey] = useState('')
    const handleSearch = (e) => {
        setSearchKey(e.target.value);
        console.log(SearchKey)
    }

    const [Repos, setRepos] = useState(null)
    useEffect(() => {
        console.log(Repos);

    }, [Repos])

    const handleSubmit = async () => {
        setPage(1);
        setLoading(true);
        const res = await searchRepos(SearchKey, Language, SortBy, Order);
        if (res.status === 200) {
            setRepos(res.data.items);
            setLoading(false);
        }
    }

    const handlePagination = async (e, value) => {
        setLoading(true);
        setPage(value)
        const res = await changePage(value, PageCount, SearchKey, Language, SortBy, Order);
        if (res.status === 200) {
            setRepos(res.data.items);
            setLoading(false);
        }
    }

    const handleSort = (e) => {
        console.log(e);
        // setSortBy(e.tar)
    }

    return (
        <>
            <div className="topnav">
                <a style={{margin:"4.5px 0"}} class="active" href="#home">Home</a>
                <div className='searchbox'>
                    <DropDown state={Language} changeState={setLanguage} values={langs} placeholder="Language" />
                    <DropDown state={PageCount} changeState={setPageCount} values={counts} placeholder="Per Page" />
                    <DropDown state={SortBy} changeState={setSortBy} values={["stars", "name"]} placeholder="Sort by" />
                    <DropDown state={Order} changeState={setOrder} values={["desc", "asc"]} placeholder="Order by" />
                    
                        <CssTextField inputProps={{style:{margin:'5px 0'}}} sx={{ input: { color: 'white', } }} onChange={handleSearch} size='small' margin='none' placeholder='Search...' />
                   
                        <Button inputProps={{style:{margin:'5px 0'}}} onClick={handleSubmit} variant='outlined' className='searchbutton' size='small' sx={{ml: 1}} >Go</Button>
       

                </div>
            </div>
            {Page !== 0 && <div className='pagination'>
                <Pagination count={10} onChange={handlePagination} page={Page} shape="rounded" variant="outlined" />
            </div>}
            {Loading ?
                <Spinner />
                :
                <>
                    <div className='repos'>
                        {Repos && Repos.map((repo, index) => {
                            return <Box key={index} sx={{ width: 275, margin: 2 }}>
                                <Card variant="outlined">
                                    <RepoCard name={repo.name} description={repo.description} owner={repo.owner.login} stars={repo.stargazers_count} forks={repo.forks_count} language={repo.language} repoUrl={repo.html_url} />
                                </Card>
                            </Box>
                        })}

                    </div>
                </>
            }
        </>
    )
}

export default Home