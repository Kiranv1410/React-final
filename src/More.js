import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function MoreProduct() {
  return (
    <div><h2 id='Card' style={{marginLeft:'30%',marginTop:'40px'}} >More related Products</h2>
    <CardGroup  style={{marginTop:'40px'}}>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1644308414850-893551d6d4c3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>MacBook Air 13</Card.Title>
          <Card.Text>
          The most affordable Mac laptop to get things done on the go.
          From <h3>₹99,900.00</h3> 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgHnna_ASytVZsiAY0DFPix2Kfy-TG6ckocuMpBgeO2xv4A-_kJxNyYRBeC5cr8IWuSc&usqp=CAU" />
        <Card.Body>
          <Card.Title>MacBook Air 13 and 15</Card.Title>
          <Card.Text>
          Strikingly thin and fast so you can work, play or create anywhere.
          From <h3>₹1,14,900.00</h3> 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/0b/5f/c8/0b5fc864c174f4bea7e93892e5eeb00a.jpg" />
        <Card.Body>
          <Card.Title>MacBook Pro 14 and 16</Card.Title>
          <Card.Text>
          The most advanced Mac laptops for demanding workflows.
          From <h3>₹1,69,900.00</h3> 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default MoreProduct;