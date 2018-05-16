import React, { Component } from 'react';

//import './Gallery.css';
import moment from 'moment'
// import Moment from 'react-moment';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import './App.css';
class TrainRunning extends Component {


    constructor(props) {
        super(props);
        this.state = {
            allData: null,
            value: "",
            dateN: "",
            date: moment()
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        // var trainnum = this.refs.PnrNum;
        // var inputValue = trainnum.value;
        // var TdateF = this.refs.dateF;
        // var newDateF = TdateF.value;

        var inputValue = this.state.value;
        //console.log(newDateF);
        var inputValueDate = this.state.dateN;
        //console.log(inputValueDate);
        var x = moment(inputValueDate).format("DD-MM-YYYY");
        //console.log(x);

        const API = `https://api.railwayapi.com/v2/live/train/${inputValue}/date/${x}/apikey/0847mkcje2/`

        fetch(API)
            .then((Response) => Response.json())
            .then((findResponse) => {
                // console.log(findResponse)
                this.setState({
                    allData: findResponse,
                    //  allDataTrain:findResponse,        
                })
                //console.log(this.state.allData)                
            })


    }

    // changeHandler = (e, name) => {
    //     let {value} = e.target;
    //     console.dir(e.target)
    //     //console.log(name)
    //     this.setState({
    //         [name]:value
    //     })
    // }


    changeHandler = (e) => {
        let { value } = e.target;
        this.setState({
            value: value
        })
    }
    changeHandlerDate = (e) => {
        let { value } = e.target;
        //console.log(name)
        this.setState({
            dateN: value
        })
    }
    render() {
        return (
            <div className="Cpage">
                <div className="container">
                    <h1>Train Running Status</h1>

                    {/* <div className="pnrBox">
                        <form onSubmit={this.onSubmit} id="myForm">
                            <input type="text" name="val" onChange={(e)=>this.changeHandler(e,'value')} value ={this.state.value} placeholder="enter Train number"  title="10 characters minimum" maxLength="10" minLength="10" />
                            <br/>
                        <input type="date" name="date" onChange={(e)=>this.changeHandler(e, 'dateN')} value ={this.state.dateN} /> 
                            <button type="submit" value="submit">Get status</button>  
                        </form>                 
                    </div>   */}


                    <div className="pnrBox">
                        <form onSubmit={this.onSubmit} id="myForm">
                            <input type="number" name="val" className="no-spin" onChange={this.changeHandler} value={this.state.value} placeholder="Enter train number" 
                            title="5 characters only" maxLength="5" minLength="5" />
                            <br />
                            <div className="dateBox">
                                <input type="date" name="date" onChange={this.changeHandlerDate} value={this.state.dateN} className="no-spin" />
                                <button type="submit" value="submit">Get status</button>
                            </div>
                        </form>
                    </div>

                    {this.state.allData &&
                        <div>
                            <h3>{this.state.allData.train.name}</h3>
                            <div className="currentSS">
                                <p><strong>Current station at :</strong>   <span>{this.state.allData.current_station.name}</span></p>
                                <br />
                                <p><strong>Current status :</strong> <span>{this.state.allData.position}</span></p>
                            </div>
                            <br />
                            <ul>
                                {this.state.allData.route.map((data, index) => {

                                    return (
                                        <li className={" " + (data.has_arrived ? 'arrived' : 'Nreached')}>
                                            <p className="box box1">
                                                <span className="stationName">  <strong> Station Name :</strong> {data.station.name} </span>
                                                <span className="Sarrival"> <strong> Schedule Arrival :</strong>  {data.scharr} </span>
                                                <span className="Sdeparture"> <strong> Schedule Departure :</strong>  {data.schdep}  </span>

                                            </p>
                                            <p className="box box2">
                                                <span className="delay"> <strong> Delay :</strong>  {data.status} </span>
                                                <span className="Exdeparture"> <strong> Expected Departure :</strong>  {data.actdep} </span>
                                                {/* <span> <strong> Has arrived :</strong>  {data.has_arrived} </span>   */}
                                                {/* <span>  </span>  
                                                  <span>  </span>  
                                                  <span>  </span>  */}
                                            </p>

                                        </li>
                                    )
                                })
                                }

                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


export default TrainRunning;
