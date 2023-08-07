import React, {useEffect} from 'react';
import logo from './logo.svg';
// import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileList from "../../components/Other/FileList";
import filesData from "../../components/Other/filesData";

import 'bootstrap/dist/css/bootstrap.min.css';


import style from './Body.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {handleLogin} from "../Authorization";
import {listFiles} from "../../http/api";
import {useDispatch, useSelector} from "react-redux";
import {FileInfo, setFileList} from "../../redux/store";
import {Dispatch} from "redux";



export const fetchData = async (cur_path_arr: string[], dispatch: Dispatch) => {
            try {
                const rp = await listFiles(cur_path_arr.join(''), 'ls');
                dispatch(setFileList(rp));
                console.log("bruh");
                console.log(rp);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };


function Body() {
    const dispatch = useDispatch();

    const cur_path_arr: any = useSelector<any>((state) => {
        console.log("body1111!");
        console.log(state);
        console.log(localStorage.getItem('token'));
        // console.log("\n\n\n");
        // console.log(typeof state.app.cur_path);
        // console.log("\n\n\n");
        return state.app.cur_path;
    });

    const file_list: any = useSelector<any>((state) => {
        console.log("body2222!");
        console.log(state);
        console.log(localStorage.getItem('token'));
        return state.app.file_list;
    });

    useEffect(() => {
        console.log('yyyyyyyyyy');

        fetchData(cur_path_arr, dispatch);
    }, [cur_path_arr]);

    return (
        <div className={`${style.mainbody}`}>
            <h4 className={`${style.path}`}>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Мой диск</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Андрей лох
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Хехех</Breadcrumb.Item>
            </Breadcrumb>
            </h4>
            {/*<h3 className={`${style.path}`}>Мой диск</h3>*/}
            <div className={`${style.filters}`}>
                <DropdownButton id="dropdown-basic-button" title="Тип">
                    <Dropdown.Item href="#/action-1">PDF</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Фото</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Папки</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Люди">
                    <Dropdown.Item href="#/action-1">Андрей</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Коля</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Мама</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Папа</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Изменено">
                    <Dropdown.Item href="#/action-1">Сегодня</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">За последние 7 дней</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">За последние 30 дней</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className={`${style.sortbuttons}`}>
                <Button as="input" type="button" value="Название" />{' '}
                <DropdownButton id="dropdown-basic-button" title="Владелец">
                    <Dropdown.Item href="#/action-1">Андрей</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Коля</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Мама</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Папа</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Изменено">
                    <Dropdown.Item href="#/action-1">По дате изменения</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">По дате моих изменений</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">По дате просмотра</Dropdown.Item>
                </DropdownButton>
                <Button as="input" type="button" value="Размер" />{' '}
                <div></div> {/*мне похуй, я ничего лучше не придумал, чем пустой div, чтобы все сдвинулось влево*/}

            </div>
            <div className={`${style.DivToScroll} ${style.DivWithScroll}`}>

                <FileList files={file_list} />

            </div>
        </div>
    );
}

export default Body;