import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';
import './Slider.scss';
const ImageData = [
  {
    id: 1,
    src: '/Slider1.jpg',
  },
  {
    id: 2,
    src: '/Slider2.jpg',
  },
  {
    id: 3,
    src: '/Slider3.jpeg',
  },
];
const Slider = () => {

  const [currentSlide,setCurrentSlide] = useState(0)
  const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev -1 )
  }
  const nextSlide =()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1 )
  }
  // console.log(currentSlide)
  return (
    <div className="slider">
      <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="container" >
        {ImageData.map((img) => {
          return <img key={img.id} src={img.src} alt="" />;
        })}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
