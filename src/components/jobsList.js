import React from 'react';
import Job from "./job";
import { FormattedMessage } from 'react-intl';

export default class JobsList extends React.Component {

  state = {
    "offers": [
      {
        "id": "0001",
        "name": "Manager",
        "company": "Schneider Electric",
        "salary": 4.5,
        "visits": 45679,
        "city": "Bogotá, Colombia",
        "date": "2019-03-26"
      },
      {
        "id": "0002",
        "name": "Software Engineer",
        "company": "Google Inc.",
        "salary": 20,
        "visits": 789123,
        "city": "Palo Alto, CA, USA",
        "date": "2019-03-27"
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "Clínica La Aurora",
        "salary": 1,
        "visits": 12378,
        "city": "Cali, Colombia",
        "date": "2019-03-28"
      }
    ]
  };

  render() {
    let cabeza = navigator.language.startsWith("en") ? "thead-dark": "thead-light";

    return (
      <div>
        <table className="table">
          <thead className={cabeza}>
            <tr>
              <th><FormattedMessage
                id="app.hashtag"
                description="hashtag"
                defaultMessage="{hashtag}"
                values={{
                  hashtag: "#",
                }}
              /></th>
              <th scope="col">
                <FormattedMessage id="Position" />
              </th>
              <th scope="col">
                <FormattedMessage id="Company" />
              </th>
              <th scope="col">
                <FormattedMessage id="Salary" />
              </th>
              <th scope="col">
                <FormattedMessage id="Views" />
              </th>
              <th scope="col">
                <FormattedMessage id="City" />
              </th>
              <th scope="col">
                <FormattedMessage id="PublicationDate" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.offers.map((e, i) => <Job key={i} offer={e} />)}
          </tbody>
        </table>
      </div>
    );
  }
}