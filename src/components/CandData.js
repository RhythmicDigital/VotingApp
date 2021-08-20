import React, { createContext, Component} from "react";
import axios from "axios";
export const JoeContext = createContext();

class CandData extends Component {
  constructor(){
    super();
  }
  state = {
    loading: true,
    error: "",
    data: null
  };
  loadData = () => {
    this.setState({ loading: true });
    return axios
      .get(
        `https://musicallyreclined.com/php-voting-api/read-candidate.php/`
      )
      .then(result => {
        console.log("SALUTATIONS", result.data);
        this.setState({
          data: result.data,
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
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { loading, error, data } = this.state;
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
      obama:this.state
    }
    return ( 
      <JoeContext.Provider value={contextValue}>
        {this.props.children}
      </JoeContext.Provider>
    )
  }
}

export default CandData;
