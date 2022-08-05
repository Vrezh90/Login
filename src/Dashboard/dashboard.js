import React, {useEffect} from 'react';
import {setLogout} from "../Store/Thunk-Creators/thunk-creators";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isAuthSelector} from "../Store/Selectors/selectors";
import 'rsuite/dist/rsuite.min.css'
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';



function Dashboard() {

    const styles = {
        width: 240,
        display: 'inline-table',
        marginRight: 10
    };

    const [activeKey, setActiveKey] = React.useState('1');
    const [openKeys, setOpenKeys] = React.useState(['3', '4']);
    const [expanded, setExpand] = React.useState(true);


    const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
        return (
            <div style={styles}>
                <Sidenav
                    appearance={appearance}
                    expanded={expanded}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                >
                    <Sidenav.Body>
                        <Nav {...navProps}>
                            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                User Group
                            </Nav.Item>
                            <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                                <Nav.Menu eventKey="4-5" title="Custom Action">
                                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                    <Sidenav.Toggle onToggle={onExpand} />
                </Sidenav>
            </div>
        );
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector);


    const onSignOut = () => {
        dispatch(setLogout());
    }

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    }, [isAuth]);

    return (
        <div>
            <CustomSidenav
                activeKey={activeKey}
                openKeys={openKeys}
                onSelect={setActiveKey}
                onOpenChange={setOpenKeys}
                expanded={expanded}
                onExpand={setExpand}
            />
            <CustomSidenav
                activeKey={activeKey}
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                onSelect={setActiveKey}
                expanded={expanded}
                onExpand={setExpand}
                appearance="inverse"
            />
            <CustomSidenav
                activeKey={activeKey}
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                onSelect={setActiveKey}
                expanded={expanded}
                onExpand={setExpand}
                appearance="subtle"
            />
            <button
                onClick={onSignOut}
                style={{margin:'50px',float:'right',color:'white',borderRadius:"5px",backgroundColor:'#1976d2',height:'40px',width:'150px'}}>
                SIGN OUT
            </button>
        </div>
    );
}

export default Dashboard;