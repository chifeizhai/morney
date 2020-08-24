import React, { useState } from 'react';
import Layout from 'components/Layout';
import { CategorySection } from './money/CategorySection';
import styled from 'styled-components';
import { useRecords, RecordItem } from 'components/useUpdate';
import { useTags } from 'components/useTags';
import day from 'dayjs';


const Item = styled.div`
  display:flex;
  justify-content:space-between;
  background:#fff;
  font-size:18px;
  line-height:20px;
  padding:10px 16px;
  >.tags{
    >.tag{
      margin-right:8px;
    }
  }
  >.note{
    margin-right:auto;
    margin-left:16px;
    color:#999;
  }
`;

const Background = styled.div`
  background:#fff;
`;
const Header =styled.h3`
  font-size:18px;
  line-height:20px;
  padding:10px 16px;
`
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { getName } = useTags()
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRedcords = records.filter(r => r.category == category);

  selectedRedcords.map(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] == b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <Background>
        <CategorySection value={category}
          onChange={value => {
            setCategory(value);
          }} />
      </Background>
      {array.map(x =>
        <div>
          <Header>
            {x[0]}
          </Header>
          <div>
            {x[1].map(r => {
              return <Item>
                <div className='tags oneLine'>
                  {r.tagIds.map(tagId => <span className='tag' key={tagId}>{getName(tagId)}</span>)}
                </div>
                {r.note ? <div className='note oneLine'>
                  {r.note}
                </div> : null}
                <div className='amount'>
                  ¥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Statistics;