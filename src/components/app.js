import React, {useState, useEffect, Fragment} from 'react';


import love from './img/love_1920x1080.jpg';

import './css/medie-queries.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// var api_key1 ="5a6690b4d4a04bd4bb0a8b463891495a";
var api_key ="a1c27f854baf41838defd4d085422e3c";
// var api_key2 ="07cbc7b02e004230afc48712bca6c54c";

var News = function(){

    var url = "http://newsapi.org/v2/top-headlines?country=ua&apiKey="+api_key;
    const [getRequest, setRequest] = useState([]);

    useEffect(() =>{
        fetch(url)
            .then(responce => responce.json())
            .then(data1 =>{
              setRequest(data1.articles);
            });  
    });
        
    return (
      
      <Fragment>
           <div className="container">
            <img className="image-main" src={love} alt=""/>
            <div className="card-columns">
                    
              {getRequest.map(req => (
                <div className="card">
                  <img className="card-img-top" src={`${req.urlToImage}`} alt=""/>
                  <div className="card-body">
                    <p className="card-text"><a href={req.url}>{req.title}</a></p>
                  </div>
              </div>            
              ))}
            </div>
           </div>
      </Fragment>
          
    );
}
export {News};