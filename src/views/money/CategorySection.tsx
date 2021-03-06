import styled from 'styled-components'
import React, { useState } from 'react'

const Wrapper = styled.section`
  font-size:24px;
  > ul{
    display:flex;
    > li{
      box-shadow:inset 2px 2px 2px 1px rgba(255,255,255,0.3);
      width:50%;
      text-align:center;
      padding:16px 0;
      position: relative;
      &.selected::after{
        content:'';
        display:block;
        height:3px;
        background:#6C7B8B;
        position:absolute;
        width:100%;
        bottom:0;
        left:0;
      }
    }
  }
`;

type Props={
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void;
}

const CategorySection: React.FunctionComponent<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' };
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const category=props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} 
              className={category === c ? 'selected' : ''}
              onClick={() => { props.onChange(c); }}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};