import { gql, useQuery } from '@apollo/client';

import { Container } from 'react-bootstrap'

function Histories ({ onHistorySelected }) {

    const HistoriesQuery = gql`{
            histories {
              id
              details
              links {
                article
              }
              flight {
                id
                mission_name
              }
            }
          }`;

    const { loading, error, data } = useQuery(HistoriesQuery);

    if (loading) {

        return (<Container>
            <img src="https://media1.tenor.com/images/3f1d85ab9951d0db65e797c7f40e89cc/tenor.gif"></img>
        </Container>);
    }
    else {
        return (
            <Container>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Mission Name</th>
                            <th>Details</th>
                            <th>Article</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.histories.map((history, i) => {
                            return <tr key={i}>
                                <td><a href="#" onClick={() => onHistorySelected(history.id)}>{history.flight == null ? "Unnamed" : history.flight.mission_name}</a> </td>
                                <td>{history.details}</td>
                                <td><a href={history.links.article} target="_blank" rel="noreferer">Read Article</a></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Container>
        )
    }
}

export default Histories;