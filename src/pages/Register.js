import React, { Fragment, useState,useEffect } from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import 'bulma/css/bulma.css';

export default function Register() {

    let [userData, setUserData] = useState({});
    let [error, setError] = useState(null);
    let [loading,setLoading]=useState(false);
    const history = useHistory();
  
    
    function getData(e) {
        let id = e.target.id;
        let data = e.target.value;
        setUserData({ ...userData, [id]: data });
    }

    function comparePassword(e) {
        let data = e.target.value;
        if (data != userData.password) {
            return false;
        }
        return true;
    }

    async function submit(e) {
        setLoading(true);
        e.preventDefault();
        if (error) {
            return false
        }
        else {
            try {
              await Axios.post('http://localhost:5000/auth/register', userData);
              history.push('/login');
            }
            catch (e) {
             setError(e.response.data.message);
            }
        }
        setLoading(false);
    }

    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="field" style={{ flex: 1 }}>
                <h1 style={{ textAlign: "center" }}>Register Page</h1>
                    <form style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }} onSubmit={(e) => submit(e)}>
                        <label className="label">Username :</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Username" id="username" onChange={(e) => getData(e)} required />
                        </div>
                        {error ? <h5  style={{ color: 'red' }}>{error} </h5> : <Fragment />}
                        <br />
                        <label className="label">Nama :</label>
                        <div className="control">
                            <input id="nama" className="input" type="text" placeholder="Nama" onChange={(e) => getData(e)} required />
                        </div>
                        <br />
                        <label className="label">Password :</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" id="password" onChange={(e) => getData(e)} required />
                        </div>
                        {error ? <h5  style={{ color: 'red' }}>{error} </h5> : <Fragment />}
                        <br />
                        <label className="label">Re-Type Password :</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Re-Type Password" id="re-password" onChange={(e) => {
                                if (comparePassword(e)) {
                                    setError(null);
                                }
                                else {
                                    setError("Password Tidak Cocok");
                                }
                            }} required />
                            {error ? <h5  style={{ color: 'red' }}>{error} </h5> : <Fragment />}    
                        </div>

                        <br />
                        <div className="control">
                            <button className="button is-success" type={"submit"}>{loading?"Loading..":"Submit"}</button>
                        </div>
                    </form>
                </div>

            </div>
        </Fragment>
    )
}
