import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class CarouselTask extends Component {
  state = {
    slides: [],
  };

  addSlide = () => {
    const newSlide = {
      id: this.state.slides.length + 1,
      text: `Slide ${this.state.slides.length + 1}`,
    };
    this.setState((prevState) => ({
      slides: [...prevState.slides, newSlide],
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.addSlide}>Add Slide</button>
        <UncontrolledExample slides={this.state.slides} />
      </>
    );
  }
}

export default CarouselTask;

export function UncontrolledExample({ slides }) {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <ExampleCarouselImage text={slide.text} />
          <Carousel.Caption>
            <h3>{slide.text}</h3>
            <p>Slide {slide.id}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export function ExampleCarouselImage({ text }) {
  return (
    <img
      className="d-block w-100 m-auto"
      src="http://pluspng.com/img-png/sunset-png-hd-sunset-sun-holiday-nature-tree-isolated-scenic-960.png"
      alt={text}
    />
  );
}
