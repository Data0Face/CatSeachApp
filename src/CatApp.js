import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.css'



const CatApp =({name , id , email}) => {

        return(
            
        <div className= "bg-light-blue dib br4 pa2 ma3 grow bw1 shadow-2">
            <div>
                <div>
                  <img src= {`https://robohash.org/${id}?set=set4`}/>
                </div>
                <h2>{name}</h2>
                <code>{email}</code>
            </div>
        </div>

        );
    }


export default CatApp;

