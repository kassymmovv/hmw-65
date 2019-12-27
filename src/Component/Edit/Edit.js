import React, {Component} from 'react';
import axios from 'axios'
class Edit extends Component {
    state={
        category:'',
        title: '',
        content: '',
        data:[],
    };
   async componentDidMount() {
        const request =  await axios.get(`https://ayan-content.firebaseio.com/pages.json`);
       let data = [];
       for (let key in request.data){
           data.push({
               title: key,


           });
       }
       this.setState({data});
    }
    changeHandler = async (event) => {
        const {value} = event.target;

        const request =  await axios.get(`https://ayan-content.firebaseio.com/pages/${value}.json`);
        this.setState({title:request.data.title,content:request.data.content,category:value});
    };
   changeHand = (event) => {
       this.setState({
           title: event.target.value
       });
   };
    changeContent = event => {
        this.setState({
             content: event.target.value
        })
    };

    editMessage = async (event) => {
        event.preventDefault();
        const patch = {
            title: this.state.title,
            content: this.state.content,
        };
        await axios.put(`https://ayan-content.firebaseio.com/pages/${this.state.category}.json`, patch);
        this.props.history.push(`/pages/${this.state.category}`)
    };
    render() {
        return (
            <div>
                <input type="text"  list="category" onChange={this.changeHandler}/>
                <datalist id="category">
                    {this.state.data.map(e => {
                        return(
                            <option value={e.title} key={e.title}>{e.title}</option>
                        )
                    })}
                </datalist>
                <input onChange={this.changeHand} type="text" value={this.state.title} name="title"/>
                <textarea onChange={this.changeContent} name='content' cols="30" rows="10" value={this.state.content}></textarea>
                <button onClick={this.editMessage}>Save</button>
            </div>
        );
    }
}

export default Edit;