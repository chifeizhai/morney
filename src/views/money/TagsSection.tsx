import styled from 'styled-components'

const TagsSection = styled.section`
  flex:1;
  display:flex;
  flex-direction:column;
  background:#FFFFFF;
  justify-content:flex-end;
  align-items:flex-start;
  padding:12px 16px;
  > ol {
    margin:0 -12px;
    > li{
      background:#D9D9D9;
      border-radius:18px;
      display:inline-block;
      padding:3px 18px;
      font-size:14px;
      margin:8px 12px;
    }
  }
  > button {
    background:none;
    border:none;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#666;
    margin-top:8px;
  }
`;

export {TagsSection};