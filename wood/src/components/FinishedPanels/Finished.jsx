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


export default function Finished() {
    const [MelamineShow, setMelamineShow] = useState(false);
    const [PaperShow, setPaperShow] = useState(false);
    const [VeneeredShow, setVeneeredShow] = useState(false);
    const [HighShow, setrHighShow] = useState(false);
    const [MouldedShow, setrMouldedShow] = useState(false);
    const [PolyesterShow, setrPolyesterShow] = useState(false);
    const [FilmShow, setrFilmShow] = useState(false);


    return (
        <>
            <div className="mb-2" >
                {[DropdownButton].map((DropdownType, idx) => (
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
                ))}
                {
                    MelamineShow === true ? <div className="img"> <h3>Melamine</h3>  <img src={Melamine} alt='1' /> </div> : ""

                }
                {
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

                }


            </div>

        </>
    )
}