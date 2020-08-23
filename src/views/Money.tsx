import React, { useState } from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPadSection';
import { useRecords } from 'components/useUpdate';

const MyLayout =styled(Layout)`
  display:flex;
  flex-direction:column;
`
const defaultFormDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as '-' | '+',
  amount: 0
}

function Money() {
  const[selected,setSelected]=useState(defaultFormDate);
  const {addRecord}=useRecords();
  const submit=()=>{
    if(addRecord(selected)){
      alert('保存成功！')
      setSelected(defaultFormDate);
    }
  };
    return (
      <MyLayout>
        <TagsSection value={selected.tagIds}
                     onChange={(tagIds)=>{setSelected({...selected,tagIds:tagIds});
                     }}/>
        <NoteSection value={selected.note}
                     onChange={(note)=>{setSelected({...selected,note:note});
                     }}/>
        <CategorySection value={selected.category}
                         onChange={(category)=>{
                           setSelected({...selected,category:category});
                         }}/>          
        <NumberPadSection value={selected.amount}
                          onChange={(amount)=>{setSelected({...selected,amount:amount});
                          }}
                          onOK={submit}/>          
      </MyLayout>
    );
};

export default Money;