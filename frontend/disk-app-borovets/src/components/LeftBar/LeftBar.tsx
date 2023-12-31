import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalDiv from "../Other/ModalDiv";


import style from './LeftBar.module.css'
import {addFile, API_URL} from "../../http/api";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../pages/Body/Body";
import {useParams} from "react-router-dom";




function LeftBar() {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.navigation}`}>
                <Nav.Link className={`${style.navigationButton}`} href="/fs">Мой диск</Nav.Link>
                <Nav.Link className={`${style.navigationButton}`} href="#action2">Общие файлы</Nav.Link>
                <Nav.Link className={`${style.navigationButton}`} href="#action3">Фото</Nav.Link>
                <Nav.Link className={`${style.navigationButton}`} href="#action4">Корзина</Nav.Link>
            </div>
        </div>
    );
}

export default LeftBar;
