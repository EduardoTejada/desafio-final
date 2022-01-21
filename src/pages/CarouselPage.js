import HeaderCarousel from '../components/layout/HeaderCarousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import cardCarousel from '../imgs/cardCarousel.png';
import classes from '../components/layout/CarouselPage.module.css';

function CarouselPage() {
    return (
        <div>
            <HeaderCarousel />
            <div className={classes.texto}>
                <h1>Vamos começar a aprender?</h1>
            </div>

            <div className={classes.container}>
                <div>
                    <h3>Cursos</h3>
                    <div className={classes.line} />
                    <div className={classes.bullet}/>
                </div>
                <Carousel
                    centerMode={true}
                    centerSlidePercentage={33.4}

                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}

                    infiniteLoop={true}

                    emulateTouch={true}
                    swipeable={true}
                    useKeyboardArrows={true}
                    width={1150}
                >

                    <div>
                        <img src={cardCarousel} alt="img teste" className={classes.imgCarousel}/>
                    </div>
                    <div>
                        <img src={cardCarousel} alt="img teste" />
                    </div>
                    <div>
                        <img src={cardCarousel} alt="img teste" />
                    </div>
                    <div>
                        <img src={cardCarousel} alt="img teste" />
                    </div>
                    <div>
                        <img src={cardCarousel} alt="img teste" />
                    </div>
                    <div>
                        <img src={cardCarousel} alt="img teste" />
                    </div>
                    <div>
                        <img src={cardCarousel} alt="img teste" />
                    </div>


                </Carousel>
            </div>

        </div>
    );
};

export default CarouselPage;