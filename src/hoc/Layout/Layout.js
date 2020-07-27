import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import './Layout.css';

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler= () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.SideDrawerClosedHandler}/>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;
