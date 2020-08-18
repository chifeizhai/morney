import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';

const TagsSection = styled.section`
  background:#FFFFFF;
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
const NotesSection = styled.section`
  padding:0 16px;
  font-size:14px;
  > label{
    display:flex;
    align-items:center;
    > span{
      margin-right:16px;
      white-space:nowrap;
    }
    > input {
      width:100%;
      height:72px;
      background:none;
      border:none;
    }
  }
`
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
`
const NumberPadSection = styled.section`
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
  }
`
const TagList = styled.ol`

`

function Money() {
    return (
      <Layout>
        <TagsSection className="tags">
            <ol>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol>
            <button>新增标签</button>
        </TagsSection>

        <NotesSection>
          <label>
            <span>备注</span>
            <input type="text" placeholder="在这里添加备注"/>
          </label>
        </NotesSection>

        <CategorySection>
          <ul>
            <li className="selected">支出</li>
            <li>收入</li>
          </ul>
        </CategorySection>
        
        <NumberPadSection>
          <div className="output">
            100
          </div>
          <div className="pad clearfix">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="ok">OK</button>
            <button className="zero">0</button>
            <button>.</button>
          </div>
        </NumberPadSection>
      </Layout>
    );
}

export default Money;