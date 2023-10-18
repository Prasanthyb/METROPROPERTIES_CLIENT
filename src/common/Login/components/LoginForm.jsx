import styles from './ModalForms.module.css';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LoginForm(props) {
    const navigate = useNavigate();
    // Now that I've set up some login logic - I have had the database return the name and ID of the logged in user.
    // I ***SHOULD*** be able to lift this state later on so we can have site wide log in but I'm unsure currently
    // how to properly use this information.
    // const [currentUser, setCurrentUser] = useState(); <---- STATE LIFTED TO APP.JS, HOPEFULLY
    function handleUserChange(newId, newType) {
        props.updateCurrentUser(newId, newType);
    }
    // 08/10/23
    // Currently there is a minor issue where if you login on one form, then the other it cannot clear the response message
    // from the other form. Once (if ever) user sign in is properly handled with a redirect, this probably won't be an issue
    // except when a failed log in is present on both forms. You would probably need to lift state to fix this, but given
    // it is handled with props.calledFrom that would probably be more trouble than it is worth for now.
    function handleLoginSubmit(e) {
        e.preventDefault();
        // Going to try handling this without useState first since it feels more efficient to not have to
        // constantly update something with useless information. I can instead select the values only on form submission.
        const emailLogin = document.getElementById(`${props.calledFrom}Email`).value;
        const passwordLogin = document.getElementById(`${props.calledFrom}Password`).value;
        // const reqTable = props.calledFrom;
        const serverResponseEL = document.getElementById(`${props.calledFrom}ServerResponse`);
        //On recommendation from chatGPT:
        // I need access to the status sent from the server but AFTER I process the results into an array
        // Therefore we declare status and then update it as necessary, assigning it the value from the server response
        let status;
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                reqTable: props.calledFrom,
                email: emailLogin,
                password: passwordLogin
            })
        })
        .then((response)=>{
            // console.log(response); Took a bit but realized it was returning a Promise.
            console.log(response.status);
            status = response.status;
            if(status===404){
                serverResponseEL.innerHTML = (`<h5 style='color: red'>Incorrect user or password</h5>`);
                return;
            }
            return response.json();
        })
        .then((response)=>{
            if(status===200){
                console.log(response);
                const id = response[0][`${props.calledFrom}_id`];
                handleUserChange(id, props.calledFrom);
                serverResponseEL.innerHTML = (`<h5 style='color: green'>Welcome, ${response[0].name}</h5>`);
            }
        });
    }

    useEffect(()=>{
        console.log(`${props.currentUser.id}, ${props.currentUser.type}`);
        if(props.currentUser.id>-1) {
            setTimeout(navigate(`${props.currentUser.type}/${props.currentUser.id}`), 5000);
        }
    }, [props.currentUser]);

    return(
        <div>
            <form className={styles.modalForm} onSubmit={handleLoginSubmit}>
                {/* Didn't realize the pain that could be caused by loading a component twice and using an ID.
                    Saved myself quickly by using my calledFrom prop and applying ID as a template string literal */}
                <input type='email' placeholder='Email' id={`${props.calledFrom}Email`} required></input>
                <input type='password' placeholder='Password' id={`${props.calledFrom}Password`} required></input>
                {/* Really wish this pink button was a common CSS or something now */}
                <button type='submit' className={styles.pinkButton}>LOG IN</button>
            </form>
            {/* Oh boy this sure is causing some headaches. I would have preferred my message be outside the two
            login components, but I would need to lift state again. At the very least I want it underneath the correct
            form, so we gotta use calledFrom again */}
            <div id={`${props.calledFrom}ServerResponse`}>

            </div>
        </div>
    );
}