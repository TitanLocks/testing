import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, AppRegistry } from 'react-native';

export default class apiTest extends Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            error: null
        }
    }
    baseURL = 'https://api.ttlock.com.cn/oauth2/token';
    
    getData = (ev)=>{
        this.setState({loaded:false, error: null});
        let url = this.baseURL + '/comments';
        let h = new Headers();
        h.append('Content-Type', 'application/x-www-form-urlencoded')
        h.append('Accept', 'application/json');
        
        let details = {
            'client_id': 'c54850a0d7f146288d18dc773d9846f6',
            'client_secret': '83051eea763c98bb268c322c05e2ba17',
            'grant_type': 'password',
            'username': '+16148869905',
            'password': '09eddce415b054e44bfd68695a34750e',
            'redirect_uri': 'http://titanlocks.co',
        };
        
        formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        let req = new Request(url, {
            headers: h,
            method: 'POST',
            body: formBody,
        });
        
        fetch(req)
        .then(response=>response.json())
        .then(this.showData)
        .catch(this.badStuff)
    }
    showData = (data)=>{
        this.setState({loaded:true, data});
        console.log(data);
    }
    badStuff = (err) => {
        this.setState({loaded: true, error: err.message});
    }
    componentDidMount(){
        //this.getData();
        //geolocation -> fetch
    }
    render() {
        return (
            <ScrollView >
                { !this.state.loaded && (
                    <Text>LOADING</Text>
                )}
                <Text style={styles.txt}>Gimme some data!</Text>
                <Button title="Get Data"
                    onPress={this.getData} />
                { this.state.error && (
                    <Text style={styles.err}>{this.state.error}</Text>
                )}
                { this.state.data && this.state.data.length > 0 && (
                    this.state.data.map( comment => (
                        <Text key={comment.id} style={styles.txt}>
                           { comment.email }    
                        </Text>
                    ))
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 24,
        color: '#333'
    },
    err:{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
AppRegistry.registerComponent('apiTest', () => apiTest)