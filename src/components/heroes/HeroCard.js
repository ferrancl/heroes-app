import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters 
}) => {
    return (
        <div className="card ms-3" style={ {maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-4 animate__animated animate__fadeIn">
                    <img src={`./assets/heroes/${ id }.jpg`} className="card-img" alt={ superhero }/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{alter_ego}</p>
                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        <Link to={ `./hero/${id}` }>
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
