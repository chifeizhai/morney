import React ,{useState} from 'react';
import { useTags } from 'components/useTags';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import {Button} from 'components/Botton';
import styled from 'styled-components';
import {Space} from 'components/Space';
require('icons/left.svg');

const Topbar =styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  line-height:20px;
  padding:14px;
  background:#fff;
`
const Wrapper = styled.section`
  padding:0 16px;
  font-size:14px;
  margin-top:16px;
  background:#fff;
  > label{
    display:flex;
    align-items:center;
    > span{
      margin-right:16px;
      white-space:nowrap;
    }
    > input {
      width:100%;
      height:44px;
      background:none;
      border:none;
    }
  }
`;
type Props={
  value:string;
  onChange:(value:string)=>void;
}
const Laber:React.FunctionComponent<Props>= (props)=>{
  const note=props.value
  return(
    <Wrapper>
    <label>
      <span>备注</span>
      <input type="text" placeholder="在这里添加备注"
       value={note} onChange={(e)=>props.onChange(e.target.value)}
      />
    </label>
  </Wrapper>
  )
};

const Tag:React.FunctionComponent=()=>{
    const[selected,setSelected]=useState({note:''})
    const {findTag}=useTags()
    let{id}=useParams();
    const tag=findTag(id)
    return (
        <Layout>
            <Topbar>
                <svg className="icon">
                    <use xlinkHref="#left" />
                </svg>
                <span>编辑标签</span>
                <svg className="icon">
                    <use xlinkHref="#undefined"/>
                </svg>
            </Topbar>
            <div>
                <Laber value={selected.note}
                     onChange={(note)=>{setSelected({...selected,note:note});
                     }}/>
            </div>
            <Space>
                <Button>删除标签</Button>
            </Space>
        </Layout>
    );
};

export{Tag};