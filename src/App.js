import React, { Component } from 'react';

import { Card, CountryPicker, Popup } from './components';
import { fetchData } from './api';
import 'tachyons';
import axios from 'axios';


const url = 'https://restcountries.eu/rest/v2/name/';

class App extends Component {
    state = {
        selected: [],
        country: 'test',
        test: 'lol',
    }

    async componentDidMount() {
        const data = await fetchData();
        
        
    }

    openPopUp = (name) => {
        axios(url + name).then(({ data }) => {

       
            let result = data;
            // console.log(data)
            // console.log({name});
      
         
      
            this.setState({selected: result});
            // console.log(result);
        })
    }

    getCountryName = () => {
        
        console.log(this.state.country)
    }
    




    render() {
        return(
            <div>
                {this.state.test === 'lol'
                ? <div>
                    <Popup selected={this.state.selected} />
                </div>
                : (
                    null
                )
                
                
                
                }
                <Card openPopUp={this.openPopUp} getCountryName={this.getCountryName} selected={this.state.selected} />
                <CountryPicker />
            </div>
        )
    }

}

export default App;






















// import React, { Component } from 'react';

// import { Card, CountryPicker, Popup } from './components';
// import { fetchData } from './api';
// import 'tachyons';

// class App extends Component {
//     state = {
//         selected: "hello",
//     }

//     async componentDidMount() {
//         const data = await fetchData();
//         console.log(data);
//     }

//     openPopUp = () => {
//         this.setState({selected: "lol"});
//     }
    




//     render() {
//         return(
//             <div>
//                 {this.state.selected === 'lol'
//                 ? <div>
//                     <Popup />
//                 </div>
//                 : (
//                     null
//                 )
                
                
                
//                 }
//                 <Card openPopUp={this.openPopUp} />
//                 <CountryPicker />
//             </div>
//         )
//     }

// }

// export default App;
