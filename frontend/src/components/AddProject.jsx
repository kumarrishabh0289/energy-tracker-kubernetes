import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from '../Constants'
import { Link } from 'react-router-dom'

class AddProject extends Component {


    constructor(props) {
        super(props)


        this.state = {
            faculty_email: sessionStorage.authenticatedUser,
            name: "",
            project_name: "",
            base_start_date: "",
            showSuccessMessage: false,
            status: "",
            conservation_start:"",
            conservation_end:""
        }
        this.submitSignUp = this.submitSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    submitSignUp = (e) => {


        e.preventDefault();
        const data = {
            name: this.state.name,
            department: this.state.department,
            term: this.state.term,
            faculty_email: sessionStorage.authenticatedUser
        }
        console.log("data is", data)

        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(API_URL + '/project', data)
            .then((response) => {
                console.log("Status Code : ", response.status);
                if (response.status === 201) {

                    console.log(response.data);
                    this.setState({ showSuccessMessage: true, status: response.data.message })
                } else {
                    console.log(response.data.error);
                    this.setState({ showSuccessMessage: true, status: response.data.message })
                }
            }).catch(() => {
                this.setState({ showSuccessMessage: false })

            })
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    render() {
        var  i = ['hey','you']
        return (
            <div className="container" class="leftPadding180">
                <br />
                <div class="" style={{ "padding-left": "30px", backgroundColor: "white", opacity: .9, filter: "Alpha(opacity=50)", borderRadius: '10px' }}>
                    <div>
                        <br />
                        <h4>Add Project</h4>
                        <form onSubmit={this.submitSignUp}>

                            <div className="row" >

                                <div className="col-sm-12 col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Course Name</h6></label>

                                    </div>

                                </div>
                                <div className="col-sm-12 col-md-6">

                                    <div className="form-group">

                                        <p>{sessionStorage.coursename}</p>
                                    </div>

                                </div>

                            </div>

                            <div className="row" >

                                <div className="col-sm-8 col-md-8">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Project Name</h6></label>
                                        <input type="text" className="form-control" name="project_name" id="project_name" placeholder="Project Name" required value={this.state.project_name} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>

                            
                            
                           {
                               ()=>{
                                   return(
                                       <div>
                                           Hello
                                       </div>
                                   )
                               }
                           }
                            
                            


                            <div className="row" >

                                <div className="col-sm-7 col-md-7">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6> Base Period Start Date </h6></label>
                                        <input type="date" className="form-control" name="base_start_date" id="base_start_date" placeholder="Base Period Start Date" required value={this.state.base_start_date} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>
                            
                            
                        
                           
                            <div className="row" >

                                <div className="col-sm-7 col-md-7">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6>Conservation Period Start Date </h6></label>
                                        <input type="date" className="form-control" name="conservation_start" id="conservation_start" placeholder="Conservation Period Start Date" required value={this.state.conservation_start} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>
                            <div className="row" >

                                <div className="col-sm-7 col-md-7">

                                    <div className="form-group">
                                        <label htmlFor="where"><h6> Conservation Period End Date </h6></label>
                                        <input type="date" className="form-control" name="conservation_end" id="conservation_end" placeholder="Conservation Period End Date" required value={this.state.conservation_end} onChange={this.handleChange} />

                                    </div>

                                </div>

                            </div>
                            <div className="row" >


                                <div className="row" >

                                    <div className="col-sm-12 col-md-12">
                                        <div className="form-group">

                                            <br />
                                            <input type="submit" className="form-control btn btn-danger" />
                                            <br />
                                        </div>
                                    </div>
                                    <br />
                                    <Link to="/teacherdashboard"><button class="btn btn-success">Go to Dashboard</button></Link>

                                    &nbsp;&nbsp;


                                    {this.state.showSuccessMessage && <div className="alert alert-warning">{this.state.status}</div>}
                                    <br />

                                </div>

                            </div>
                        </form>

                    </div>
                </div>
                
            </div>
        )
    }

}

export default AddProject