import React, {useState, useEffect, Fragment} from 'react';
import { CardColumns ,Card } from 'react-bootstrap';

import love from './img/love_1920x1080.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

var News = function(){
    var url = "http://newsapi.org/v2/top-headlines?country=ua&apiKey=a1c27f854baf41838defd4d085422e3c";
    const [getRequest, setRequest] = useState([]);

     useEffect(() =>{
        fetch(url)
            .then(responce => responce.json())
            .then(data1 =>{
                setRequest(data1.articles);
            })
    });
    
    return (
      <Fragment>
        <img className="image-main" src={love} />
          <div className="container">
            <CardColumns>
              {getRequest.map(req => (
                <Card>
                  <Card.Img className="img" variant="top" src={req.urlToImage} />
                  <Card.Body>
                    <Card.Title className="title"><a href={req.url}>{req.title}</a></Card.Title>
                  </Card.Body>
                </Card>
              ))}                
            </CardColumns>
          </div>
      </Fragment>
    );
}
export {News};