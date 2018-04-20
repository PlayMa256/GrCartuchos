import React from 'react';
import PropTypes from 'prop-types';

class AsyncRoute extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		this.props.loading.then((module) => {
			this.component = module.default;
			this.setState({
				loaded: true
			});
		});
	}

	render() {
		if (this.state.loaded) {
			return <this.component {...this.props.routeProps} />;
		}
		return <h2>Loading....</h2>;
	}
}

AsyncRoute.propTypes = {
	routeProps: PropTypes.object,
	loading: PropTypes.any.isRequired
};

AsyncRoute.defaultProps = {
	routeProps: {}
};

if (module.hot) {
	module.hot.accept();
}

export default AsyncRoute;
