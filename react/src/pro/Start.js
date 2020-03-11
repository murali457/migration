import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import './stylle.css';
import { Redirect } from 'react-router-dom';
const cookies = new Cookies(); 
class Start extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            source:'',
            source_url:'',
            destination:'',
            destination_url:'',
        });
        this.onch1 = this.onch1.bind(this)
        this.onch2 = this.onch2.bind(this)
        this.onch3 = this.onch3.bind(this)
        this.onch4 = this.onch4.bind(this)
        this.onsub = this.onsub.bind(this)
     }
    onch1=(event)=>{
        this.setState({
            source:event.target.value
        })
    }
    onch2=(event)=>{
        this.setState({
        source_url:event.target.value
        })
    }
    onch3=(event)=>{
        this.setState({
            destination:event.target.value
        })
    }
    onch4=(event)=>{
        this.setState({
        destination_url:event.target.value
        })
    }
    onsub=()=>{
        let data = {
            source: this.state.source,
            source_url: this.state.source_url,
            destination: this.state.destination,
            destination_url: this.state.destination_url,
        }
        const dbname=this.state.source+this.state.source_url+this.state.destination+this.state.destination_url       
        let url = process.env.REACT_APP_NODE_URL+'/userlist '
        axios.post(url,data)
            .then(response=>console.log(response.data))
            .then(data => this.setState({ data }))
            .catch(e=>console.log(e));
        if(dbname === "O_core365migration__O_gsuites" ||  dbname === "O_NETORG5915570__O_piloto365"){ 
            cookies.set("name",dbname);
            this.props.history.push('/userlist');
        }
        else{
            alert('please enter correct details');
        }
    }
    render(){    
        if(cookies.get('name') !== undefined) {
            return <Redirect to="/userlist" />
        }
        return(
            <div className="container" class="body"><br />
                <a className="btn btn-success" href="/">Dashboard</a>
                <form action="" method="post" onSubmit={this.onsub} className="form" ><br/>
                    <label><b>Source</b></label>
                    <select name="source" onChange={this.onch1} >
                        <option value="">-Select-</option>
                        <option value="O_">Gsuite</option>
                        <option value="O_">0365</option>
                    </select>
                    <input type="text" name="source_url" placeholder="enter url" onChange={this.onch2} required/>&nbsp;
                    <label><b>Destination</b></label>
                    <select name="destination" onChange={this.onch3} >
                        <option value="">-Select-</option>
                        <option value="__O_">Gsuite</option>
                        <option value="__O_">0365</option>
                    </select>
                    <input type="text" name="destination_url" placeholder="enter url" onChange={this.onch4} required/><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success"> View</button>
                </form>
             </div>   
        );
    }
}
export default Start;
