import { gql, useQuery } from '@apollo/client';
import { Container, Row } from 'react-bootstrap'

function History ({ id, onReturnToHistories }) {

  const HistoryQuery = gql`         
          query history($historyId: ID!) {
                    history(id: $historyId) {
                      details
                      event_date_unix
                      flight {
                        rocket {
                          rocket_name
                        }
                        launch_date_utc
                        launch_site {
                          site_name
                        }
                        launch_success
                      }
                      event_date_utc
                    }
                  }
                `;

  const { loading, error, data } = useQuery(HistoryQuery, { variables: { historyId: id }, });

  if (loading) {
    return (
      <Container>
        <img src="https://media1.tenor.com/images/3f1d85ab9951d0db65e797c7f40e89cc/tenor.gif"></img>
      </Container>);
  }
  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return (<div>error</div>);
  }
  else {

    var successLabel;

    if (data.history.flight && data.history.flight.launch_success) {
      successLabel = <span className="text-success">Success!</span>
    }
    else {
      successLabel = <span className="text-danger"> Failed ):</span>
    }

    return (
      <Container>
        <Row>
          <div className="col-lg-3">
            <button className="btn btn-primary" onClick={() => onReturnToHistories()}>Return</button>
          </div>
        </Row>

        <Row>
          <div className="col-lg-3">
            Launch Time UTC:
          </div>
          <div className="col-lg-3">
            {data.history.event_date_utc}
          </div>
          <div className="col-lg-3 text-right">
            Success?
           </div>
          <div className="col-lg-3">
            {successLabel}
          </div>
        </Row>
        <Row>
          <div className="col-lg-3">
            Launch Site:
          </div>
          <div className="col-lg-3">
            {data.history.flight ? data.history.flight.launch_site.site_name : 'unnamed'}
          </div>
        </Row>
        <Row>
          <div className="col-lg-3">
            Rocket Name:
          </div>
          <div className="col-lg-3">
            {data.history.flight ? data.history.flight.rocket.rocket_name : 'unnamed'}
          </div>
        </Row>
        <Row>
          <div className="col-lg-3">
            Details:
          </div>
        </Row>
        <Row>
          <div className="col-lg-12">
            {data.history.details}
          </div>
        </Row>
      </Container>
    )
  }
}

export default History;