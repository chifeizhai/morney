import React,{useState} from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
const Button =styled.button`
  font-size:18px;
  border:none;
  padding:8px 12px;
  background:#767676;
  border-radius:4px;
  color:#fff;
`;
const Space=styled.div`
  padding-top:36px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;
function Tags() {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
    return (
      <Layout>
        <TagList>
          {tags.map(tag =>
            <li key={tag}>
              <Link to={'/tags/'+tag}>
                <span className="oneLine">{tag}</span>
                <svg className="icon">
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