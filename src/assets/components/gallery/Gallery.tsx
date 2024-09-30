import { useCallback, useEffect, useState } from "react";
import Modal from "../modal/Modal";
import style from "./Gallery.module.scss";

interface GalleryInterface {
galleryData: string[]
}

const Gallery: React.FC<GalleryInterface> = ({ galleryData }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    //modal management
    
    function openModal(index: number) {
        setIsModalOpen(true);
        setCurrentIndex(index);
    }

    function closeModal(){
        setIsModalOpen(false);
        setCurrentIndex(null);
    }

    const prevSlide = useCallback(() => {
        if (currentIndex !== null) {
          const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
          setCurrentIndex(prevIndex);
        }
    }, [currentIndex, galleryData.length]);
    

    const nextSlide = useCallback(() => {
        if (currentIndex !== null) {
            const nextIndex = (currentIndex + 1) % galleryData.length;
            setCurrentIndex(nextIndex);
        }
    }, [currentIndex, galleryData.length]);

    useEffect(() => {

        const handleKeyDown = (event: KeyboardEvent) => {
          if (isModalOpen && currentIndex !== null) {
            if (event.key === "ArrowLeft") {
              prevSlide();
            } else if (event.key === "ArrowRight") {
              nextSlide();
            } else if (event.key === "Escape") {
              closeModal();
            }
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [isModalOpen, currentIndex, prevSlide, nextSlide]);


    return (
    <section className={style.galleryContainer}>
        {galleryData.map((image, index) => (
            <div key={`image-gallery${index}`}className={style.galleryDiv}>
                <img key={`image-${index}`} src={image} alt={`Gallery ${index}`} className={style.galleryImg} onClick={(e) => {
                    e.stopPropagation();
                    openModal(index);
                }} />           
            </div>))
        }

    {isModalOpen && currentIndex !== null && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <img key={`modal-image-${currentIndex}`} src={galleryData[currentIndex]} alt={`Gallery image selected`} className={style.selectedImg}/>


            <div className={style.navigationModal}>
                <button className={`${style.arrow} ${style.leftArrow}`} onClick={prevSlide}>
                &#8592;
                </button>

                <button className={`${style.arrow} ${style.rightArrow}`} onClick={nextSlide}>
                &#8594;
                </button>
            </div>

            <button className={style.btnModal} onClick={closeModal}>&times;</button>
        </Modal>
    )}

    </section>
    )
  };

export default Gallery;
