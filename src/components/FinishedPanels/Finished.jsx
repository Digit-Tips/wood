import React, { useState } from "react";
import './Finished.css'
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import Melamine from '../../assets/15.png'
import Paper from '../../assets/13.png'
import Veneered from '../../assets/14.png'
import High from '../../assets/16.png'
import Moulded from '../../assets/18.png'
import Polyester from '../../assets/17.png'
import Film from '../../assets/19.png'


// export default function Finished() {
//     const [MelamineShow, showMelamineShow] = useState(false);
//     const [PaperShow, setPaperShow] = useState(false);
//     const [VeneeredShow, setVeneeredShow] = useState(false);
//     const [HighShow, setrHighShow] = useState(false);
//     const [MouldedShow, setrMouldedShow] = useState(false);
//     const [PolyesterShow, setrPolyesterShow] = useState(false);
//     const [FilmShow, setrFilmShow] = useState(false);




//     return (
//         <>
//             <div className="mb-2" >


//                 <ul className="uls">
//                     <div className="hoverImg">
//                         <button
//                             onMouseEnter={() => showMelamineShow(true)}
//                             // onMouseLeave={() => showMelamineShow(false)}
//                             >
//                             <img src={Melamine} alt='1' />
//                         </button>
//                     </div>
//                     <div className="hoverImg">
//                         <button
//                             onMouseEnter={() => setPaperShow(true)}
//                             // onMouseLeave={() => setPaperShow(false)}
//                             >
//                             <img src={Paper} alt='2' />
//                         </button>
//                     </div>
//                     <div className="hoverImg">
//                         <button
//                             onMouseEnter={() => setVeneeredShow(true)}
//                             // onMouseLeave={() => setVeneeredShow(false)}
//                             >
//                             <img src={Veneered} alt='3' />
//                         </button>
//                     </div>
//                     <div className="hoverImg">
//                         <button
//                             onMouseEnter={() => setrHighShow(true)}
//                             // onMouseLeave={() => setrHighShow(false)}
//                             >
//                             <img src={High} alt='4' />
//                         </button>
//                     </div>
//                     <div  className="hoverImg">
//                         <button
//                             onMouseEnter={() => setrMouldedShow(true)}
//                             // onMouseLeave={() => setrMouldedShow(false)}
//                             >
//                             <img src={Moulded} alt='5' />
//                         </button>
//                     </div>
//                     <div className="hoverImg">
//                         <button
//                             onMouseEnter={() => setrPolyesterShow(true)}
//                             // onMouseLeave={() => setrPolyesterShow(false)}
//                             >
//                             <img src={Polyester} alt='6' />
//                         </button>
//                     </div>
//                     <div className="hoverImg">
//                         <button>
//                             <img src={Film} alt='7' />
//                         </button>
//                     </div>
//                 </ul>
//                 {MelamineShow && (
//                     <ul>

//                         <div className="hoverImg">
//                             <img src="https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png" alt='1' />
//                         </div>
//                     </ul>
//                 )}
//                 {PaperShow && (
//                     <ul>

//                         <div className="hoverImg">
//                             <img src="https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png" alt='2' />
//                         </div>
//                     </ul>
//                 )}
//                 {VeneeredShow && (
//                     <ul>

//                         <div className="hoverImg">
//                             <img src="https://wood.digit-tips.com/wp-content/uploads/2022/09/3.png" alt='3' />
//                         </div>
//                     </ul>
//                 )}

//                 {HighShow && (
//                     <ul>

//                         <div className="hoverImg">
//                             <img src="https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png" alt='4' />
//                         </div>
//                     </ul>
//                 )}
//                 {MouldedShow && (
//                     <ul>

//                         <div className="hoverImg">
//                             <img src="https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png" alt='5' />
//                         </div>
//                     </ul>
//                 )}
//                 {PolyesterShow && (
//                     <ul>

//                         <div className="hoverImg">
//                             <img src="https://wood.digit-tips.com/wp-content/uploads/2022/09/6.png" alt='6' />
//                         </div>
//                     </ul>
//                 )}
//             </div>

//         </>
//     )
// }







function Image({ src, alt, details }) {
    const [showDetails, setShowDetails] = React.useState(false);
  
    return (
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <img src={src} alt={alt} />
        {showDetails && <div><img src={details} alt={alt} /></div>}
      </div>
    );
  }
  
  // Parent component
  function ImageGallery() {
    const images = [
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/1-img.png',
        alt: 'image 1',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2-img.png',
        alt: 'image 2',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/3-img.png',
        alt: 'image 3',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/3.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/4-img.png',
        alt: 'image 4',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5-img.png',
        alt: 'image 5',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/6-img.png',
        alt: 'image 6',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/6.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/7.png',
        alt: 'Film faced plywood',
        // details: 'Image 2 details'
      },
      // Add more images here
    ];
  
    return (
      <div className="hoverImg" >
        {images.map(image => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            details={image.details}
          />
        ))}
      </div>
    );
  }
  export default ImageGallery;






























{/* {
                    MelamineShow === true ? <div onTouchMove={Melamine} className="img"> <h3>Melamine</h3>  <img src={Melamine} alt='1' /> </div> : ""

                } */}
{/* {
                    PaperShow === true ? <div className="img"> <h3>Paper over laid</h3>  <img src={Paper} alt='1' /> </div> : ""

                }
                {
                    VeneeredShow === true ? <div className="img"> <h3>Veneered</h3>  <img src={Veneered} alt='1' /> </div> : ""

                }
                {
                    HighShow === true ? <div className="img"> <h3>High glass + super matt</h3>  <img src={High} alt='1' /> </div> : ""

                }
                {
                    MouldedShow === true ? <div className="img"> <h3>Moulded door skin</h3>  <img src={Moulded} alt='1' /> </div> : ""

                }
                {
                    PolyesterShow === true ? <div className="img"> <h3>Polyester faced panel</h3>  <img src={Polyester} alt='1' /> </div> : ""

                }
                {
                    FilmShow === true ? <div className="img"> <h3>Film faced plywood</h3>  <img src={Film} alt='1' /> </div> : ""

                } */}


{/* {[DropdownButton].map((DropdownType, idx) => (
                    <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="lg"
                        title="Select"
                    >
                        <Dropdown.Item eventKey="1"
                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(true);
                                setPaperShow(false);
                                setVeneeredShow(false);
                                setrHighShow(false);
                                setrMouldedShow(false);
                                setrPolyesterShow(false);
                                setrFilmShow(false);

                            }}


                        >Melamine</Dropdown.Item>
                        <Dropdown.Item eventKey="2"
                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(false);
                                setPaperShow(true);
                                setVeneeredShow(false);
                                setrHighShow(false);
                                setrMouldedShow(false);
                                setrPolyesterShow(false);
                                setrFilmShow(false);

                            }}
                        >Paper over laid</Dropdown.Item>
                        <Dropdown.Item eventKey="3"
                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(false);
                                setPaperShow(false);
                                setVeneeredShow(true);
                                setrHighShow(false);
                                setrMouldedShow(false);
                                setrPolyesterShow(false);
                                setrFilmShow(false);

                            }}
                        >Veneered</Dropdown.Item>
                        <Dropdown.Item eventKey="4"
                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(false);
                                setPaperShow(false);
                                setVeneeredShow(false);
                                setrHighShow(true);
                                setrMouldedShow(false);
                                setrPolyesterShow(false);
                                setrFilmShow(false);

                            }}
                        >High glass + super matt</Dropdown.Item>
                        <Dropdown.Item eventKey="5"

                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(false);
                                setPaperShow(false);
                                setVeneeredShow(false);
                                setrHighShow(false);
                                setrMouldedShow(true);
                                setrPolyesterShow(false);
                                setrFilmShow(false);

                            }}>Moulded door skin</Dropdown.Item>
                        <Dropdown.Item eventKey="6"

                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(false);
                                setPaperShow(false);
                                setVeneeredShow(false);
                                setrHighShow(false);
                                setrMouldedShow(false);
                                setrPolyesterShow(true);
                                setrFilmShow(false);

                            }}>Polyester faced panel</Dropdown.Item>
                        <Dropdown.Item eventKey="7"

                            onClick={(e) => {
                                e.preventDefault();
                                setMelamineShow(false);
                                setPaperShow(false);
                                setVeneeredShow(false);
                                setrHighShow(false);
                                setrMouldedShow(false);
                                setrPolyesterShow(false);
                                setrFilmShow(true);

                            }}>Film faced plywood</Dropdown.Item>

                    </DropdownType>
                ))} */}