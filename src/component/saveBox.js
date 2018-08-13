
export default class Save extends React.Component {
    render() {

        return (
            <form onSubmit={this.props.saveCustomer}>
                Name: <input type="text" value={this.state.name} onChange={this.captureName.bind(this)}></input> <br />
                Age : <input type="number" value={this.state.age} onChange={this.captureAge.bind(this)} /><br />
                Salary : <input type="number" value={this.state.salary} onChange={this.captureSalary.bind(this)} /><br />
                <button type="submit">Add Friend</button>
            </form>
        )
    }

}