import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = ({ history }) => {

    const location = useLocation()

    const { q = '' } = queryString.parse( location.search )

    
    const [ values, handleInputChange] = useForm({
        searchText: q,
    })
    
    const { searchText } = values
    
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`search?q=${ searchText }`)
    }
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])  

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            autoComplete="off"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange= { handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') 
                            && 
                        <div className="alert alert-info">Search a hero</div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            && 
                        <div className="alert alert-danger">There is no hero with { q } </div>
                    }

                    { 
                        heroesFiltered.map( hero => 
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        )
                    }

                    
                </div>
            </div>
            
        </div>
    )
}
