import React, { createContext,Component, useEffect, useState } from "react";
import axios from 'axios'
export const VoteContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'https://musicallyreclined.com/php-voting-api/',
});

class VotingContextProvider extends Component{
    constructor(){
        super();
    }
    state = {
        cand_data: null
    };
    
    readCand = async (id) => {
        return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`).then(result => {
            this.setState({cand_data:result.data.items});
        })
        .catch(error => {
            console.error("error: ", error);
            this.setState({
              // objects cannot be used as a react child
              // -> <p>{error}</p> would throw otherwise
              error: `${error}`,
              loading: false
            });
          });
    }   
    
    addVote(canId) {

        const fetchData = () => {
            return Axios.post("add-one-vote.php", {
                id:canId
                })
                .then(function (response) {
                    console.log(response);
                    return 'lolol';
                  })
                  .catch(function (error) {
                    console.log(error);
                 });
            }

        return fetchData;

    }   
    componentDidMount () {
        this.readCand();
    }
    render(){
        const contextValue = {
            voteState:this.state,
            addVote:this.addVote,
            readCand:this.readCand
        }
        return(
            <VoteContext.Provider value={contextValue}>
                {this.props.children}
            </VoteContext.Provider>
        )
    }
}

export default VotingContextProvider;
