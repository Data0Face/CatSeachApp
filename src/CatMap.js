import React from 'react'
import CatApp from './CatApp'
import { Cats }  from "./cats"

export default class CatMap extends React.Component{



render(){


    return(
        <div>
            {Cats.map((value,index)=>(

            <CatApp
            key={index*2}
            name={value.username}
            email={value.email}
            id={value.id*9}
            />
            )
                                    )}


        </div>
            
    )

}
}