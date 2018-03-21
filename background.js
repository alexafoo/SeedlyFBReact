import React, {Component} from 'react';
import "./index.css";
import axios from 'axios';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            feed:[],
        };
    }

    componentWillMount() {
        axios.get('https://graph.facebook.com/v2.12/460639650790741/feed?access_token=1824067337899800%7CZ20sfbjM5qD6kR9sCU_i9r4pLG8')
            .then(response => this.setState({comments:response.data.comments}));
        axios.get('https://graph.facebook.com/v2.12/460639650790741/feed?access_token=1824067337899800%7CZ20sfbjM5qD6kR9sCU_i9r4pLG8')
            .then(response => this.setState({feed:response.data.feed}));
    }

    render() {
        return {
                <div className="container1">
                    <p>{this.state.feed}</p>
                    <p>{this.state.comments}</p>s
                </div>
        }
    }
}