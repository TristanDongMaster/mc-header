import React, { Component } from 'react'
import { Icon } from 'antd'
import SubMenus from './SubMenus'
import './style.less'
export default class Header extends Component {
  render() {
    const { data, loginout, logoUrl, indexUrl } = this.props
    let menuList = data.menuList || []
    return (
      <div className="layout-header-bg">
        <div className="layout-header">
          <div className="header-logo">
            <a href={indexUrl}>
              <img src={logoUrl} />
            </a>
          </div>
          <div className="header-content">
            <SubMenus menuList={menuList} />
          </div>
          <div className="header-right">
            <span className="header-name">
              <Icon type="user" style={{ fontSize: 20, margin: '10px' }} />
              {data.erpName} | {data.erp}
            </span>
            <a className="header-out" onClick={loginout} href="javascript:void()">退出</a>
          </div>
        </div>
      </div>
    )
  }
}