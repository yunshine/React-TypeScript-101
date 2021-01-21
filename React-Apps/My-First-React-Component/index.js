class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello and welcome!</h1>
				<h1>I'm Yun!</h1>
				<h1>Though simple, this is my first React component... everyone's gotta start somewhere!</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
