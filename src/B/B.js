import React, { Component } from 'react';


class Traininfo extends Component { 

    constructor(props) {
        super();
        this.state = {
            allData : null,         
        };
    }


    onSubmit = (e) => {
        e.preventDefault();

        var input = this.refs.TrainNum;
        var inputValue = input.value;

         const API=`https://api.railwayapi.com/v2/route/train/${inputValue}/apikey/0847mkcje2/`
         fetch(API)
         .then((Response)=>Response.json())
         .then((findResponse) => {
             console.log(findResponse)
             this.setState({
              allData:findResponse,  
             //  allDataTrain:findResponse.train.days,        
             })
            
              // console.log(this.state.allData)
           
             
         })
     
     }
     
     changeHandler = (e) => {
         let {name,value} = e.target;
         //console.log(name)
         this.setState({
             [name]:value
         })
     }
     
     
     
     
     
         render() {       
          
             return (
     
                
                 <div className="homepage">
                     <div className="container">
                     <h1>Train info</h1>
                     <div className="pnrBox">
                        <form onSubmit={this.onSubmit} id="myForm">
                            <input type="text" name="val" onChange={this.changeHandler} ref="TrainNum"  placeholder="enter train number"  required title="5 characters minimum" maxLength="5" minLength="5"/>
                            <button type="submit" value="submit">Get train info</button>  
                        </form>                 
                     </div>
                             <br/>
                             {this.state.allData!==null&& 
                             <div>
                     <table className="table table-striped table-dark">
                         <thead>
                             <tr>
                                 <th>Day</th>
                                 <th>Distance</th>
                                 <th>Halt</th>
                                 <th>No</th>
                                 <th>SchArr</th>
                                 <th>SchDep</th>
                                 <th>Station code</th>
                                 {/* <th>station latitude</th>
                                 <th>station langitude</th> */}
                                 <th>Station name</th>
                             </tr>
                         </thead>
                      
     
                           <tbody>
                            {
                                 this.state.allData.route.map((item,index) =>
                                 <tr>
                                     <td>{item.day}</td>
                                     <td>{item.distance}</td>
                                     <td>{item.halt}</td>
                                     <td>{item.no}</td>
                                     <td>{item.scharr}</td>
                                     <td>{item.schdep}</td>
                                     <td>{item.station.code}</td>
                                     {/* <td>{item.station.lat}</td>
                                     <td>{item.station.lng}</td> */}
                                     <td>{item.station.name}</td>
                                 </tr>
                             )
                            }
     
                         </tbody>
                     </table> 
     
                     <br/>
     
                     {/* <table className="table table-striped table-dark">
                         <thead>
                             <tr>
                                 <th>available</th>
                                 <th>code</th>
                                 <th>runs</th>
                             </tr>
                         </thead>
                         <tbody>
     
                            {this.state.allData!==null&&
                                this.state.allData.train.classes.map((item,index) =>
                                 <tr key={index}>
                                     <td>{item.available}</td>
                                     <td>{item.code}</td>
                                     <td>{item.name}</td>
                                 </tr>
                             )
                            } 
     
                         </tbody>
                     </table>  */}

                     </div>
                       } 
     
                     </div>
                     
                         
                 </div>
             )
         }
}

export default Traininfo;
