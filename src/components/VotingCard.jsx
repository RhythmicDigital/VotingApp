import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from 'axios'

// Define the base URL
const Axios = axios.create({
    baseURL: 'https://musicallyreclined.com/php-voting-api/',
});

function VotingCard(props) {
  let { team,voteid, set, get,votecount,remove,unvoteid, add, subtract, setCand, name, check, addActvButn, getData} = props;
  function vote() {
    set(unvoteid);
    add(team.id);
    addActvButn(voteid);
    getData();


  };
  function unVote() {
    subtract(team.id);
    addActvButn(unvoteid);
    set(team.id);
    getData();
    remove();
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${team.picture}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button id={voteid} variant="success" disabled={check(voteid)} onClick={() => vote()}>
          Vote
        </Button>
        <Button id={unvoteid} variant="success" disabled={check(unvoteid)} onClick={() => unVote()}>
          Unvote
        </Button>

      </Card.Body>
      <Card.Footer>Vote count: {votecount}</Card.Footer>
    </Card>
  );
}
export default VotingCard;
