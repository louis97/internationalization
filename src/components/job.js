import React from 'react';
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';

export default class Job extends React.Component {

	render() {
		var plural;
		if (navigator.language.startsWith("en")) {
			this.plural = <FormattedPlural value={this.props.offer.salary} one="Million" other="Millions" />
		} else {
			this.plural = <FormattedPlural value={this.props.offer.salary} one="Millon" other="Millones" />
		}
		return (
			<tr>
				<th scope="row">{this.props.offer.id}</th>
				<td><FormattedMessage
					id="app.name"
					description="user's name"
					defaultMessage="{name}"
					values={{
						name: this.props.offer.name,
					}}
				/></td>
				<td><FormattedMessage
					id="app.company"
					description="user's company"
					defaultMessage="{company}"
					values={{
						company: this.props.offer.company,
					}}
				/></td>
				<td>
					{this.props.offer.salary}{this.plural}
				</td>
				<td><FormattedNumber
					value={this.props.offer.visits}
				/></td>
				<td>{this.props.offer.city}</td>
				<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
				</td>
			</tr>
		);
	}
}