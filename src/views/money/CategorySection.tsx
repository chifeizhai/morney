import styled from 'styled-components'
import React, { useState } from 'react'
const Wrapper = styled.section`
  font-size:24px;
  > ul{
    display:flex;
    background:rgba(176,196,222,0.8);
    > li{
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

const CategorySection: React.FunctionComponent = () => {
  const categoryMap = { '-': '支出', '+': '收入' };
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const [category, setCategory] = useState('-')
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} 
              className={category == c ? 'selected' : ''}
              onClick={() => { setCategory(c); }}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};