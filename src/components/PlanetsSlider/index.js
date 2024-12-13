import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

class PlanetsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {planetsList} = this.props
    return (
      <div data-testid="planets">
        <h1>PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem details={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default PlanetsSlider
