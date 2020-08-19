import React,{useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
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
      &.selected{
        background:rgba(176,196,222,0.8);
      }
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

const TagsSection: React.FunctionComponent = () => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const [selectedTags,setSelectedTags] =useState<String[]>([])
  const onAddTag = () =>{
    const tagName =window.prompt('新标签的名称为？')
    if(tagName!==null){
      setTags([...tags,tagName])
    }
  };
  const onToggleTag=(tag:string)=>{
    const index = selectedTags.indexOf(tag)
    if(index>=0){
      setSelectedTags(selectedTags.filter(t=>t!==tag))
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  };

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
           <li key={tag} onClick={
             ()=>{onToggleTag(tag);}
             } className={selectedTags.indexOf(tag)>=0 ? 'selected' : ''}>
             {tag}
           </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};