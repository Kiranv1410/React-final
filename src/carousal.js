import Carousel from 'react-bootstrap/Carousel';

function Carousal() {
  return (
    <Carousel  data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{height:''}}
          className="d-block w-100" 
          src={"https://images.macrumors.com/t/GWPqM6T-2wCXaVKRPEDIxJBfemc=/1600x0/article-new/2022/07/MacBook-Air-M2-Chip-Purple-Feature.jpg"}
          alt="First slide"
        />
        <Carousel.Caption >
          <h5 style={{color:'whitesmoke'}} >APPLE 2020 Macbook Air M1</h5>
          <p style={{color:'whitesmoke'}} >Starts from ₹112490</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:''}}
          className="d-block w-100"
          src={"https://9to5mac.com/wp-content/uploads/sites/6/2022/01/16-14-macbook-pro.jpg?quality=82&strip=all"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{color:'whitesmoke'}} >APPLE MacBook Pro Core i5 8th Gen</h5>
          <p style={{color:'whitesmoke'}} >Starts from ₹162990</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:''}}
          className="d-block w-100"
          src={"https://images.macrumors.com/t/FFxfkIdbbWx_RXML7XJpJdxoh70=/1600x0/article-new/2023/01/Apple-MacBook-Pro-M2-Feature-Blue-Green.jpg"}
          alt="Laptop"
        />
        <Carousel.Caption>
          <h5 style={{color:'whitesmoke'}} >Apple 2022 MacBook Pro M2</h5>
          <p style={{color:'whitesmoke'}} >
            Starts from ₹1,09,990
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;