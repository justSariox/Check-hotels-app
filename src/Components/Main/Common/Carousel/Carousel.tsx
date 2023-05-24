import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import First from '../../../../assets/1.png';
import Second from '../../../../assets/2.png';
import Third from '../../../../assets/3.png';
import Four from '../../../../assets/4.png';

export const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
    };

    return (
        <div className={'carousel'}>
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}

                // removeArrowOnDeviceType={["tablet", "mobile",'desktop']}
            >
                <div>
                    <img src={First} alt='' />
                </div>
                <div>
                    <img src={Second} alt='' />
                </div>
                <div>
                    <img src={Third} alt='' />
                </div>
                <div>
                    <img src={Four} alt='' />
                </div>
                <div>
                    <img src={First} alt='' />
                </div>
                <div>
                    <img src={Second} alt='' />
                </div>
                <div>
                    <img src={Third} alt='' />
                </div>
                <div>
                    <img src={Four} alt='' />
                </div>
            </Carousel>
        </div>
    );
};
