import React, { Fragment, useEffect, useState, useContext} from 'react'
import {MyContext} from '../contexts/MyContext'
import {JoeContext} from './CandData'
import {VoterContext} from './VoterData'

import {VoteContext} from '../contexts/Voting-Context'
import teamsJson from "../lib/teams.json";
import candsJson from "../lib/cands.json";

import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "../components/VotingCard.jsx";
import axios from 'axios'

// Importing the Login & Register Componet
import Login from './Login'
import Register from './Register'
import CandData from './CandData';

// Define the base URL
const Axios = axios.create({
    baseURL: 'https://musicallyreclined.com/php-voting-api/',
});
function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {obama} = useContext(JoeContext);
    const {joemamba, castVote, uncastVote} = useContext(VoterContext);

    const {loading, error, data} = obama;
    const {voterData, voted} = joemamba;

    const {voteState, addVote, readCand} = useContext(VoteContext);
    const {isAuth,theUser,showLogin} = rootState;
    const {cand_data} = voteState;
    let [teams, setTeams] = useState([]);
    let [activeButton, setButton] = useState("Default");
    const [buttonText, setButtonText] = useState("Default"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    const [buttonInactive, setButtonInactive] = useState(false); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    const [candStuff, setCands] = useState([]); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    const [hasVoted, setVoted] = useState(null); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    const changeText = (text) => setButtonText(text);
    const makeInactive = (state) => setButtonInactive(state);
    useEffect(() => {
      setTeams(teamsJson);
      setCands(data);
    }, []);

    function incrementVoteCount(teamId) {
        teams = teams.map((team) => {
            if (team._id === teamId) {
            team.votes = team.votes + 1;
            }
            return team;
        });
        setTeams(teams);
    }
    async function read(id) {
        try{
            return Axios.get("read-candidate.php?id="+id)
                .then(function(response) {
                    console.log("READING RAINBOW", response.data[0]);
                    return response.data;
                })
            } catch (error) {
            throw {
                
                };
            } 
    }   

    function add(canId) {
        const addVoteAndVoter = () => {
            return axios.all([
                Axios.post("add-one-vote.php", {
                    id:canId
                }).then(function(response) {
                    setVoted(true);

                }).catch(function(error) {
                    console.log("ADD VOTE ERROR", error)
                }),
                Axios.post("insert-voter.php", {
                    email:theUser.email,
                    voted_for:canId
                }).then(function(response) {
                    console.log(response);
                }).catch(function(error) {
                    console.log("INSERT ERROR", error)
                }),
            ]).then(function(response) {
                return response;
            }).catch(function(error) {
                console.log("CASTVOTE ERROR", error)
            })
        }
        const deleteVoteAndVoter = () => {
            return axios.all([
                Axios.post("remove-one-vote.php", {
                    id:canId
                    }),
                Axios.post("delete-voter.php", {
                id:theUser.id
                })
            ]).then(function(response) {
                return uncastVote;
            })
        }

        return addVoteAndVoter;
    }  

    function unvote(canId) {
        const deleteVoteAndVoter = () => {
            return axios.all([
                Axios.post("remove-one-vote.php", {
                    id:canId
                    }),
                Axios.post("delete-voter.php", {
                email:theUser.email
                }).then(function(response) {
                    setVoted(true);
                })
            ])
        }
        return deleteVoteAndVoter;
    }
    function addActiveButton(id){
        var splitId = id.split('-');
        var activeId = '';

        console.log("ADD");
        if (activeButton === id) {
            setButton("Joe");
        } 
        else {
            if (splitId[0] === 'v') {
                activeId = "u-" + splitId[1];
            } else if (splitId[0] === 'u') {
                activeId = "v-" + splitId[1];
            }   
            setButton(activeId);
        }
    }
    function disableButtons(id) {
        const actBtn = localStorage.getItem("activeId");

        console.log()
        var splitId = id.split('-');
        console.log("DISABLE");
        if (activeButton === "Joe") {
            if (splitId[0] === 'u') {
                console.log('bababaabaa');
                return true;
            }
            return false;
        }
        else if (activeButton === "Default") 
        {
            if (id === actBtn) {
                setButton(actBtn);
                console.log("Hey actbtn has a thing it's ", actBtn);
            }
            if (splitId[0] === 'u') {
                console.log('bababaabaa');
                return true;
            }
            return false;
        }
        else if (activeButton === id){
            return false;
        } 
        console.log("Uh oh", activeButton);
        return true;
    }
    function setCandsData() {
        setCands(data);  
    }
    function setActiveButton(id) {
        console.log("FUCK YOU SET");
        const actBtn = localStorage.setItem("activeId", id);
        const get = localStorage.getItem("activeId");
        console.log("Hello, ",get);
    }
    function getActiveButton() {
        const set = () => {
            const actBtn = localStorage.getItem("activeId");
        }
        return set;
    }
    function removeActiveButton() {
        const set = () => {
            const actBtn = localStorage.removeItem("activeId");
        }
        return set;
    }
    function getCandData () {
        const loadData = () => {
            return axios
              .get(
                `http://localhost/php-voting-api/read-candidate.php/`
              )
              .then(result => {
                console.log("YOYOGETCANDDATAYO", result.data);
                setCands(result.data);
              })
          };
        return loadData;
    }

    // If user Logged in
    if(isAuth)
    {
        return(
            <Fragment>
                <div className="userInfo">
                    <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                    <h1>{theUser.name}</h1>
                    <div className="_email"><span>{theUser.email}</span></div>
                    <button onClick={(boo)=>changeText(candStuff[1].votecount)}>{buttonText}Logout</button>
                </div>
                <Container className="app">
                    
                    <div> Yogaba <span>{data.map((thing) =>thing.picture)}</span></div>
                    <Row>
                    {candStuff.map((thing, index) => {
                        return (
                        <Col md={4}>
                            <VotingCard
                            team={thing}
                            add={add(thing.id)}
                            subtract={unvote(thing.id)}
                            setCand={(hi)=>setCandsData(hi)}
                            votes = {thing.votecount}
                            name = {thing.name}
                            voteid={'v-'+thing.id}
                            unvoteid={'u-'+thing.id}
                            check={(but)=>disableButtons(but)}
                            addActvButn={(but)=>addActiveButton(but)}
                            getData = {getCandData()}
                            set={(bla)=>setActiveButton(bla)}
                            get={(bla)=>getActiveButton(bla)}
                            remove={(bla)=>removeActiveButton(bla)}
                            votecount={candStuff[index].votecount}
                            />
                            <div>{candStuff[index].votecount}</div>
                        </Col>
                        );
                    })}
                    </Row>
                </Container>
            </Fragment>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;
