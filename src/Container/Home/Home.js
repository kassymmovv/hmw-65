import React, {Component} from 'react';
import axios from 'axios'
import NavBar from "../../Component/NavBar/NavBar";
import './Home.css'
class Home extends Component {

    state = {
        contents: [

        ],
    };

    async componentDidMount() {
        this.getContent()
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.getContent()
        }
    }

    getContent = async () => {
        const key = this.props.match.params.id;
        const request = await axios.get(`https://ayan-content.firebaseio.com/pages/${key}.json`);
        let contents = [];
        contents.push({
            title: request.data.title,
            content: request.data.content,
            id: key
        });

        this.setState({contents});

    };
    render() {
        return (
            <div>
                <NavBar/>
                {this.state.contents.map(content => {
                    return(
                        <div style={{border: '1px solid #ccc'}} key={content.id}>
                            <p>title:{content.title}</p>
                            <p>content:{content.content}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Home;