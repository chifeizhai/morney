import styled from 'styled-components'

const CategorySection = styled.section`
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

export {CategorySection};