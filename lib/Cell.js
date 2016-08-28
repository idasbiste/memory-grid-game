class Cell extends React.component {
	render() {
		return (
			<div className="cell">
				{this.props.id}
			</div>
		);
	}
}

export default Cell;