import React,{useState} from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useTags } from 'components/useTags';
import {Button} from 'components/Botton';
import {Space} from 'components/Space';
require('icons/right.svg')

const TagList=styled.ol`
  font-size:16px;
  background:#fff;
  >li{
    border-bottom:1px solid #d5d5d9;
    line-height:20px;
    margin-left:16px;
    margin-right:16px;
    >a{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px 0;
    }    
  }
`;


function Tags() {
  const {tags}=useTags()
  const onclickBack=()=>{
    window.history.back();
  }
    return (
      <Layout>
        <TagList>
          {tags.map(tag =>
            <li key={tag.id}>
              <Link to={'/tags/'+tag.id}>
          <span className="oneLine">{tag.name}</span>
                <svg className="icon" onClick={onclickBack}>
                  <use xlinkHref="#right" />
                </svg>
              </Link>
            </li>
          )}
        </TagList>
        <Space>
          <Button>新建标签</Button>
        </Space>
      </Layout>
    );
}

export default Tags;