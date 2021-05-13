import { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {values:[], owners:[]};
        this.names = ['Andrew', 'Adit', 'Jeffrey', 'Nicole', 'Vanessa'];
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
        return this.state.values.map((el, i) => 
            <div key={i}>
               <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)}/>
               <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/><br/>
               <label>Andrew</label>
               <input type="checkbox" defaultChecked="true" key={i*10+1} onChange={this.toggleCheckbox.bind(this, i, 0)}/>
               <label>Jeffrey</label>
               <input type="checkbox" defaultChecked="true" key={i*10+2} onChange={this.toggleCheckbox.bind(this, i, 1)}/>
               <label>Adit</label>
               <input type="checkbox" defaultChecked="true" key={i*10+3} onChange={this.toggleCheckbox.bind(this, i, 2)}/>
               <label>Nicole</label>
               <input type="checkbox" defaultChecked="true" key={i*10+4} onChange={this.toggleCheckbox.bind(this, i, 3)}/>
               <label>Vanessa</label>
               <input type="checkbox" defaultChecked="true" key={i*10+5} onChange={this.toggleCheckbox.bind(this, i, 4)}/>
            </div>          
        )
     }

     toggleCheckbox(i, n, e) {
         let owners = [...this.state.owners];
         console.log(i, n);
        owners[i][n] = !owners[i][n];
        this.setState({ owners });
     }
     
     handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
     }
     
     addClick(){
       this.setState(prevState => ({ values: [...prevState.values, ''], owners: [...prevState.owners, [true,true,true,true,true]]}));
     }
     
     removeClick(i){
        let values = [...this.state.values];
        let owners = [...this.state.owners];
        values.splice(i,1);
        owners.splice(i,1);
        this.setState({ values, owners });
     }
     
     handleSubmit(event) {
       for (let i=0; i < this.state.values.length(); i++) {
            
       }
       alert('A name was submitted: ' + this.state.values.join(', '));
       event.preventDefault();
     }
   
     render() {
       return (
         <form onSubmit={this.handleSubmit}>
             {this.createUI()}       
             <br/> 
             <input type='button' value='Add Expense' onClick={this.addClick.bind(this)}/>
             <input type="submit" value="Submit" />
         </form>
       );
     }
}

