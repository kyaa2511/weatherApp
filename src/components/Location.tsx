
import React, { Component } from 'react';



class Location extends Component{
        constructor(props: number){
        super(props)
        this.state = {

        }
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position)  {
            console.log('Latitude is:', position.coords.latitude);
            console.log('Longitude is:', position.coords.longitude);
            
        })
    }

    render(){
        return(
            <div>
               
             <h1></h1>  

            </div>
        )
    }

}



export default Location





 
   

    
   




