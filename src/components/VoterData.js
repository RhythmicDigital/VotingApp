import React, { createContext, Component} from "react";
import axios from "axios";
export const VoterContext = createContext();

class VoterData extends Component {
  constructor(){
    super();
  }
  state = {
    loading: true,
    error: "",
    voterData: null,
    voted: false
  };
  loadData = () => {
    this.setState({ loading: true });
    return axios
      .get(
        `https://musicallyreclined.com/php-voting-api/read-voter.php/`
      )
      .then(result => {
        console.log("SALUTATIONS", result.data);
        this.setState({
          voterData: result.data,
          loading: false,
          error: false
        });
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
  };
  setVotedState = (set) => {
      this.setState({voted:set})
  }

  componentDidMount() {
    this.loadData();
  }
  render() {
    const { loading, error, voterData } = this.state;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return (
        <p>
          There was an error loading the repos.{" "}
          <button onClick={this.loadData}>Try again</button>
        </p>
      );
    }
    const contextValue= {
      joemamba:this.state,
      setVotedState: this.setVotedState,
    }
    return ( 
      <VoterContext.Provider value={contextValue}>
        {this.props.children}
      </VoterContext.Provider>
    )
  }
}

export default VoterData;
