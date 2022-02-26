import '../../App'
import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class sidebar{
    render(){
        return(
            <Menu>
        <a href='' />
        <a className="menu-item" href="/登記鎖櫃">
            登記鎖櫃
        </a>
        <a className="menu-item" href="/中籤查詢">
            中籤查詢
        </a>
        </Menu>
        )
    }
}