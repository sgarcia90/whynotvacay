import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './NavMenu.css';

const NavMenu = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <header className="header-position">
            <NavbarBrand className="logoFont-emily logo-margin" tag={Link} to="/">WhyNotVacay...we do!</NavbarBrand>
            <header className="banner-background">
                <header className="justify-self-bottom bottomBorder">
                    <Nav tabs className="navbar-expand-sm navbar-toggleable-sm link-height">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                                tag={Link} className="text-light" to="/" active
                            >
                                HomeStay
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                                tag={Link} className="text-light" to="/About"
                            >
                                ContactWay
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                                tag={Link} className="text-light" to="/Questionnaire"
                            >
                                QuestionsForYourStay
                            </NavLink>
                        </NavItem>
                    </Nav>
                </header>
            </header>
        </header>
    );
   
}

export default NavMenu;