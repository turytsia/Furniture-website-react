import React,{useState} from 'react'

import galleryImg1 from './img/galleryImg1.jpg'
import galleryImg2 from './img/galleryImg2.jpg'
import galleryImg3 from './img/galleryImg3.jpg'
import galleryImg4 from './img/galleryImg4.jpg'
import galleryImg5 from './img/galleryImg5.jpg'

export default function Gallery() {
    const [galleryFilter, setGalleryFilter] = useState('Bedroom furniture')
    return (
        <section className = "gallery">
            <section className="gallery">
                <div className="gallery-btn">
                    <button className={`${galleryFilter === 'Bedroom furniture' && 'gallery--active-btn'}`} onClick={(e) => { setGalleryFilter(e.target.textContent) }}>Bedroom furniture</button>
                    <button className={`${galleryFilter === 'Living room furniture' && 'gallery--active-btn'}`} onClick={(e) => { setGalleryFilter(e.target.textContent) }}>Living room furniture</button>
                    <button className={`${galleryFilter === 'Office furniture' && 'gallery--active-btn'}`} onClick={(e) => { setGalleryFilter(e.target.textContent) }}>Office furniture</button>
                    <button className={`${galleryFilter === 'Dining room futniture' && 'gallery--active-btn'}`} onClick={(e) => { setGalleryFilter(e.target.textContent) }}>Dining room futniture</button>
                    <button className={`${galleryFilter === 'Chair' && 'gallery--active-btn'}`} onClick={(e) => { setGalleryFilter(e.target.textContent) }}>Chair</button>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-img" style={{ backgroundImage: `url(${galleryImg1})` }}></div>
                    <div className="gallery-img" style={{ backgroundImage: `url(${galleryImg2})` }}></div>
                    <div className="gallery-img" style={{ backgroundImage: `url(${galleryImg3})` }}></div>
                    <div className="gallery-img" style={{ backgroundImage: `url(${galleryImg4})` }}></div>
                    <div className="gallery-img" style={{ backgroundImage: `url(${galleryImg5})` }}></div>
                </div>
            </section>
        </section>
    )
}
