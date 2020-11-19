// import React, { Component } from "react";
// import axios from 'axios';



// class News extends Component {
//     state = {
//       articles: [],
//     };
  
//     componentDidMount(){
//         axios.get(`https://newsapi.org/v2/everything?q=Australian+visa&apiKey=`)
//             .then(res => {
//                 this.setState({ articles: res.data.items })
//             })

//     }
  
  
//     render() {
//       return (
//         <ul>
//             { this.state.articles.map(articles => <li>{articles.author}</li>)}
//         </ul>
//         )
//     }
// }

// export default News;