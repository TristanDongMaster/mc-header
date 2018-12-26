import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'

function getUrl(url) {
    if (!url) {
        return 'javascript:void(0)'
    }
    let path_url = url
    // 兼容主流程页面跳转，自动追加/dist/pages/，坑坑坑
    if (path_url === 'index') {
        path_url = '/dist/pages/'
    } else if (path_url.indexOf('http') === -1 && path_url.indexOf('//') === -1) {
        path_url = `/dist/pages/${path_url}`
    }
    return path_url
}

// 获取下拉菜单数据
function getMenus(subMenus) {
    let menus = subMenus.map((item) => (
        <Menu.Item key={item.id}>
            <a rel="noopener noreferrer" href={getUrl(item.url)}>{item.name}</a>
        </Menu.Item>
    ))
    return (<Menu>{menus}</Menu>)
}

export default (props) => {
    const { menuList, checkActive } = props
    return menuList.map((item, index) => {
        let classNames = ''
        if (checkActive) {
            classNames = checkActive(item) ? 'active' : ''
        }
        if (!item.name) {
            return null
        } if (item.subMenuList && item.subMenuList.length) {
            let currentSubMenus = item.subMenuList
            let menus = getMenus(currentSubMenus)
            // 排除"帮助与反馈"
            if (item.id === 11 || item.name === '帮助与反馈') {
                return (<a href={getUrl(item.url)}
                    className={classNames}
                    key={item.id}
                >{item.name}</a>)
            }
            return (
                <Dropdown
                    overlay={menus}
                    placement="bottomCenter"
                    key={item.id}
                    overlayClassName="drop-down-customer-header-item">
                    <a className={`ant-dropdown-link ${classNames}`}
                        href="javascript:void(0)" >
                        {item.name} <Icon type="caret-down" />
                    </a>
                </Dropdown>
            )
        }
        return (
            <a href={getUrl(item.url)}
                className={classNames}
                key={item.id}
            >{item.name}</a>
        )
    })
} 