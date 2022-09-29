import logo from './logo.svg';
import './App.css';
import { 
  useQuery, 
  gql 
} from "@apollo/client"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
      </header>

      <GetPeople />
    </div>
  );
}

const PEOPLE = gql`
  query GetPeople {
    getPeople() {
      name, height, mass, gender, homeworld
    }
  }
`;

function GetPeople() {

  const { loading, error, data } = useQuery(PEOPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.map(({ name, height, mass, gender, homeworld }) => (
    <table>
      <tr key={name}>
        <td>{name}</td>
        <td>{height}</td>
        <td>{mass}</td>
        <td>{gender}</td>
        <td>{homeworld}</td>
      </tr>
    </table>
  ));
}

export default App;
