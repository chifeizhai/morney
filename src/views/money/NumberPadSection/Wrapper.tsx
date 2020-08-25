import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  flex-direction:column;
  > .output{
    background:#fff;
    font-size:36px;
    line-height:72px;
    text-align:right;
    padding:0 16px;
    box-shadow:inset 0 -5px 5px -5px rgba(70,111,227,1),
               inset 0 5px 5px -5px rgba(70,111,227,1);
  }
  > .pad{
    > button{
      font-size:18px;
      border:none;
      float:left;
      width:25%;
      height:64px;
      &.ok{
        height:128px;
        float:right;
      }
      &.zero{
        width:50%;
      }
      &:nth-child(1){
      }
      &:nth-child(2),
      &:nth-child(5){
        background:rgba(176,196,222,0.2);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background:rgba(176,196,222,0.4);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background:rgba(176,196,222,0.6);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background:rgba(176,196,222,0.8);
      }
      &:nth-child(12){
        background:rgba(159,182,205);
      }
      &:nth-child(14){
        background:rgba(176,196,222,1);
      }
    } 
    @media (max-height:570px){
        >button{
          height:45px;
          &.ok{
            height:90px;
          }
        }
      }
  }
`;

export{Wrapper};