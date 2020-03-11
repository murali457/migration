import React from 'react'
import { Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import './stylle.css';
const cookies = new Cookies();
class Userlist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            getlist : []
        }
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_NODE_URL+"/getlist")
        .then(response => response.json())
        .then(res => {
            const getlist = res.result;
            console.log(getlist)
            this.setState({ getlist });
        })
     }
    close = ()=>{
        cookies.remove('name');
        this.props.history.push('/start');
    }
    render(){
        setTimeout(myFunction, 30 * 60 * 1000);
            function myFunction(){
                cookies.remove('name');
            }
        if(cookies.get('name') === undefined) {
            return <Redirect to="/start" />
        }
        return(
                <div className ="container"><br />
                    <button className="btn btn-danger" onClick={this.close}>Close</button>
                    <table className="table table-striped table-bordered" id="example">
                        <thead className="table table-dark">
                            <tr>
                                <th>S.no</th>
                                <th>Source Email</th>
                                <th>Destination Email</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody className="table table-active">
                            { this.state.getlist.map(getlist => 
                            <tr>
                                <td>.</td>
                                <td>{getlist.source_email}</td>
                                <td>{getlist.destination_email}</td>
                                <td>{getlist.name}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default Userlist;