import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'
require('icons/money.svg')
require('icons/chart.svg')
require('icons/tag.svg')

const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
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
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <svg className="icon">
              <use xlinkHref="#tag" />
            </svg>
              标签页
              </Link>
        </li>

        <li>
          <Link to="/money">
            <svg className="icon">
              <use xlinkHref="#money" />
            </svg>
              记账页
              </Link>
        </li>

        <li>
          <Link to="/statistics">
            <svg className="icon">
              <use xlinkHref="#chart" />
            </svg>
              统计页
              </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;