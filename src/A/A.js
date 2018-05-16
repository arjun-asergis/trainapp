import React, { Component } from 'react';
//import {Bootstrap, Grid, Row, Col, Table,Form} from 'react-bootstrap';
// import A from './A.css'


// const PnrNum = "";
//const arr2=[];
class PnrStatus extends Component {
    constructor(props) {
        super();
        this.state = {
            allData: null,
            value: ""
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        var inputValue = this.state.value;
        if (inputValue.length === 10) {
            const API = `https://api.railwayapi.com/v2/pnr-status/pnr/${inputValue}/apikey/0847mkcje2/`

            fetch(API)
                .then((Response) => Response.json())
                .then((findResponse) => {
                    // console.log(findResponse)
                    this.setState({
                        allData: findResponse,
                        //  allDataTrain:findResponse.train.days,        
                    })
                    //console.log(this.state.allData.train.number)                
                })
        } else {
            alert("enter valid PNR");
        }

    }

    changeHandler = (e) => {
        let { value } = e.target;
        //console.log(name)
        this.setState({
            value: value
        })
    }

    render() {
        //        var data = this.state.allData
        return (


            <div className="homepage">
                <div className="container">
                    <h1>Welcome to train PNR status</h1>
                    <div className="pnrBox">
                        <form onSubmit={this.onSubmit} id="myForm">
                            <input type="text" name="val" onChange={this.changeHandler} value={this.state.value} placeholder="Enter PNR" title="10 characters minimum" />
                            <button type="submit" value="submit">Get status</button>
                        </form>
                    </div>

                    <br />
                    {this.state.allData &&
                        (this.state.allData.pnr ? 
                        <div>
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>train number</th>
                                        <th>train name</th>
                                        {/* <th>pnr</th> */}
                                        <th>Boarding Date</th>
                                        <th>from station</th>
                                        <th>To station</th>
                                        <th>boarding point</th>
                                        <th>reservation upto</th>
                                        <th>journey class</th>
                                        <th>number of passengers</th>

                                        {/* <th>boarding point code</th> */}
                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        <tr>
                                            <td>{this.state.allData.train.number}</td>
                                            <td>{this.state.allData.train.name}</td>
                                            {/* <td>{this.state.allData.pnr}</td> */}
                                            <td>{this.state.allData.doj}</td>
                                            <td>{this.state.allData.from_station.name}</td>
                                            <td>{this.state.allData.to_station.name}</td>
                                            <td>{this.state.allData.boarding_point.name}</td>
                                            <td>{this.state.allData.reservation_upto.name}</td>

                                            <td>{this.state.allData.journey_class.code}</td>
                                            {/* <td>{this.state.allData.debit}</td>  */}
                                            <td>{this.state.allData.total_passengers}</td>

                                            {/* <td>{this.state.allData.boarding_point.code}</td>  */}

                                        </tr>
                                    }
                                </tbody>

                            </table>

                            <br /><br />

                            <table className="table table-striped table-dark" >
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Booking Status (Coach No , Berth No., Quota)</th>
                                        <th>*Current Status (Coach No , Berth No.)</th>

                                    </tr>
                                </thead>


                                <tbody>

                                    {this.state.allData.passengers.map((data, index) => {
                                        return (
                                            <tr>

                                                <td>{data.no}</td>
                                                <td>{data.booking_status}</td>
                                                <td>{data.current_status}</td>

                                            </tr>
                                        )
                                    })
                                    }

                                </tbody>

                            </table>

                            {/* <table className="table table-striped table-dark" >
                                <thead>
                                    <tr>
                                        <th>Total Fare</th>
                                        <th>Charting Status</th>
                                        <th>Remarks if any</th>
                                        <th>Train Status</th>

                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        <tr>

                                            <td>{this.state.allData.passengers.no}</td>
                                            <td>{this.state.allData.chart_prepared}</td>
                                            <td>{this.state.allData.passengers.current_status}</td>
                                            <td>{this.state.allData.passengers.current_status}</td>

                                        </tr>
                                    }
                                </tbody>

                            </table> */}
                        </div> : <div className="enterV">Please Enter valid PNR</div>)}
                    <br />

                </div>


            </div>
        )
    }
}

export default PnrStatus;
