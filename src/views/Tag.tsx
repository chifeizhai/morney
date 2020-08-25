import React from 'react';
import { useTags } from 'components/useTags';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import { Button } from 'components/Botton';
import styled from 'styled-components';
import { Space } from 'components/Space';
require('icons/left.svg');

const Topbar = styled.header`
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
type Props = {
  value: any;
  onChange: (value: any) => void;
}
const Laber: React.FunctionComponent<Props> = (props) => {
  const note = props.value
  return (
    <Wrapper>
      <label>
        <span>标签名</span>
        <input type="text" placeholder="在这里输入标签"
          value={note} onChange={(e) => props.onChange(e)}
        />
      </label>
    </Wrapper>
  )
};

const Tag: React.FunctionComponent = () => {
  const { findTag, updateTag, deleteTag } = useTags()
  let { id } = useParams();
  const tag = findTag(parseInt(id))
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <Laber value={tag.name}
        onChange={(e) => {
          updateTag(tag.id, { name: e.target.value });
        }} />
      <Space>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Space>
    </div>
  )
  const onClickBack = () => {
    window.history.back()
  }
  return (
    <Layout>
      <Topbar>
        <svg className="icon" onClick={onClickBack}>
          <use xlinkHref="#left" />
        </svg>
        <span>编辑标签</span>
        <svg className="icon">
          <use xlinkHref="#undefined" />
        </svg>
      </Topbar>
      {tag ? tagContent(tag) : <div>标签删除成功！</div>}
    </Layout>
  );

};

export { Tag };