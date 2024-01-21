import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card  style={{marginTop:'30px'}} className="bg-dark text-white">
      <Card.Img id='about' src="https://www.ioverserve.com/images/2-New-F1/Boot_Logo.gif" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1>About Us</h1></Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi quasi iste quidem nesciunt sint voluptates error cum! Sint modi labore nulla neque nam! Nisi architecto et soluta quasi. Quasi ducimus recusandae dolore illo quo, repellendus unde voluptatum aliquid dicta repudiandae, tenetur esse, dolorem laudantium soluta nulla ullam nisi quibusdam ipsum vero fugiat doloremque minima neque sint libero. Quis, ex quas placeat tenetur architecto, sunt quod minima, excepturi rerum dicta cupiditate dolor corporis
          
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default About;