import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './seedly-logo.png';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '1824067337899800',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.12'
            });
            window.FB.XFBML.parse();

        };



        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

        render() {
            return (
                <div className="Seedly">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="seedly-logo"/>
                        <h1 className="App-title">Seedly Facebook Feed</h1>
                    </header>
                    <div class="fb-page" data-href="https://www.facebook.com/seedlysg/" data-tabs="timeline"
                         data-width="1000"
                         data-height="1000" data-small-header="true" data-adapt-container-width="true"
                         data-hide-cover="true"
                         data-show-facepile="false">
                        <blockquote cite="https://www.facebook.com/seedlysg/" class="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/seedlysg/">Seedly</a></blockquote>
                    </div>
                    <background/>
                </div>
            )
        }

}



export default App;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();