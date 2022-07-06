import React, { Component } from 'react';
import './style.css';
// import { Button } from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Form } from 'react-bootstrap';
// import { Link} from 'react-dom'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: " ", data: []
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
    }
    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleChangeNumber(e) {
        this.setState({ number: e.target.value });
    }

    handleChangeGender(e){
        this.setState({gender:e.target.value});
    }

    addPost(e) {
        e.preventDefault();
        console.log(this.state);
        this.state.data.push(this.state)
        this.setState({
            data: this.state.data,
            name: '',
            email: '',
            password: '',
            number: '',
            gender: ''
        })
        console.log(this.state.data)
    }

    editPost(id) {

        const user = this.state.data[id];
        console.log(user);
        this.setState
            ({
                name: user.name,
                email: user.email,
                password: user.password,
                number: user.number,
                gender : user.gender,
                data: this.state.data

            })

        //  console.log("updatePost")
        //   const newpost=this.state.data.find((id)=>data.id==id)
        //    newpost.title=newtitle
        //    const data=this.state.post.map((oldpost)=>{
        //      if(data.id==id)
        //      return newpost
        //      else
        //      return oldpost
        //    })
        //    this.setState({post:data})

    }

    //  editPost = (id)=>{
    //  } 

    deletePost = (id) => {
        let data = this.state.data;
        data.splice(id, 1);
        this.setState({
            data: data
        });
    }
    UpdatePost = (id) => {
        const data1 = this.state.data
        data1[id].name = this.state.name
        data1[id].email = this.state.email
        data1[id].password = this.state.password
        data1[id].number = this.state.number
        data1[id].gender = this.state.gender

        this.setState({
            data: data1,
            name: '',
            email: '',
            password: '',
            number: '',
            gender : ''
        })
        console.log("Successfully Data Update!!");
    }
    // deletePost(id,data){
    // this.e.target.parentNode.parentNode.parentNode.deleteRow(id)
    // document.getElementById(this.deletePost()).deleteRow(id)
    // this.data =  data.pop((value)=>{className="form__input"



    render() {
        return (
            <div >
                <div className="form">
                    <div className="form-body">
                        <div className="username">
                            <label className="form__label" htmlFor="name">Name</label>
                            <input className="form__input" required="required" type="text" id="name" placeholder="full Name" value={this.state.name} onChange={this.handleChangeName} />
                        </div>
                        <div className="email">
                            <label className="form__label" controlId="formBasicEmail" htmlFor="email">Email </label>
                            <input type="email" id="email" className="form__input" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} />
                        </div>
                        <div className="password">
                            <label className="form__label" htmlFor="password">Password </label>
                            <input className="form__input" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
                        </div>
                        <div className="Contact">
                            <label className="form__label" htmlFor="Number">Contact </label>
                            <input className="form__input" type="number" id="number" placeholder="Enter Number" value={this.state.number} onChange={this.handleChangeNumber} />
                        </div>
                        <div value={this.state.gender} onChange={this.handleChangeGender}>
                             <label className="form__label">Gender</label>
                            <input className="form__input" value="Male" type="radio"  name="gender" /> Male
                            <input className="form__input" value="Female" type="radio"  name="gender" /> Female
                            <input className="form__input" value="Other" type="radio"  name="gender" /> Other
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn btn-success" onClick={(e) => { this.addPost(e) }}>Register</button>
                    </div>
                </div>
                <center>
                    <div className='center'>
                        <h1>Users Details</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Gender</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state?.data?.map((item, id) =>
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.number}</td>
                                            <td>{item.gender}</td>
                                            <td><button className="btn btn-primary"
                                                onClick={() => { this.editPost(id) }}>Edit</button></td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => { this.deletePost(id) }} >Delete</button>
                                            </td>
                                            <td>
                                                <button className='btn btn-warning' onClick={() => { this.UpdatePost(id) }} >Update</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </center>
            </div>
        );
    }
}

export default Register;