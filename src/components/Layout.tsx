import Nav from './Nav'
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background:#f5f5f5;
  min-height:100vh;
  max-height:100vh;
  display:flex;
  flex-direction:column;
`
const Main = styled.div`
  flex:1;
  flex-shrink:1;
  overflow:auto;
  &::-webkit-scrollbar{
    display:none;
  }  
`
const Layout = (props: any) => {
    return (
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav />
        </Wrapper>
    );
};

export default Layout;