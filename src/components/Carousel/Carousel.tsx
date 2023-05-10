import React from 'react'
import { CarouselProps } from './types';
import { CarouselContainer, CarouselThumbnails, CarouselWrapper, CurrentImgContainer, ThumbnailImg } from './styles';

const Carousel: React.FC<CarouselProps> = ({
    images
}) => {
    const [currentImage, setCurrentImage] = React.useState<string>(images[0]);
    
    const handleImageChange = (image: string) => {
        setCurrentImage(image);
    }
    return (
        <CarouselContainer>
            <CarouselWrapper>
                <CurrentImgContainer src={currentImage} alt="" />
            </CarouselWrapper>
            <CarouselThumbnails>
                {images.map((image, index) => (
                    <ThumbnailImg
                        key = {index}
                        src = {image}
                        alt = {`Image ${index}`}
                        onClick={() => handleImageChange(image)}
                    />
                ))}
            </CarouselThumbnails>
        </CarouselContainer>
    )
}

export default Carousel;