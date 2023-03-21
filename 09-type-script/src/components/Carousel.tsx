/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";
interface IProps {
  images: string[];
}
class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              src={image}
              alt="animal thumbnail"
              key={image}
              className={index === active ? "active" : ""}
              onClick={() => {
                this.setState({ active: index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
