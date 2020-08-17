import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import React from 'react'
require('icons/money.svg')
require('icons/chart.svg')
require('icons/tag.svg')

const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  background:#fff;
  > ul {
    display:flex;
    >li {
      width:33.3333%;
      text-align:center;
      >a{
        padding:4px 0;
        display:flex;
        flex-direction:column;
        align-items:center;
        &.selected{
          color:rgb(0,176,234);
          .icon{
            fill:rgb(0,176,234);
          }
        }
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <svg className="icon">
              <use xlinkHref="#tag" />
            </svg>
              标签页
              </NavLink>
        </li>

        <li>
          <NavLink to="/money" activeClassName="selected">
            <svg className="icon">
              <use xlinkHref="#money" />
            </svg>
              记账页
              </NavLink>
        </li>

        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <svg className="icon">
              <use xlinkHref="#chart" />
            </svg>
              统计页
              </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;