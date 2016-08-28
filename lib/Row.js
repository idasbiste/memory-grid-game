class Row extends Render.Component {
	render() {
		return (
			<div className="row">
				{this.props.children}
			</div>
		);
	}
}

export default Row;