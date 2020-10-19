import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams()

    const hero = useMemo(() => getHeroById(heroId), [heroId]) 

    if (!hero) return <Redirect to="/" />

    const handleReturn = () => {
        if (history.length <= 2 ) history.push('/')
        else history.goBack()    
    }

    const {
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters 
    } = hero

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={`../assets/heroes/${ heroId }.jpg`}
                    alt={ superhero } />
            </div>

            <div className="col-8 animate__animated animate__fadeInRight">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> { first_appearance }
                    </li>
                    <li className="list-group-item">
                        <b>Characters: </b> { characters }
                    </li>

                </ul>
                <button 
                    className="btn btn-outline-info mt-3"
                    onClick= { handleReturn }
                >
                    Return
                </button>
            </div>            
        </div>
    )
}
