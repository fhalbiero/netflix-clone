import styled, { css } from 'styled-components';


export const Container = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 56px;
    background: linear-gradient(to bottom, rgba(0,0,0,.45) 30%, transparent 100%);
    transition: all ease 0.5s;

    ${({black}) => black && css` background-color: rgba( 0, 0, 0,.95); `}

    .header--logo{
        height: 40px;

        img {
            padding: 8px 0;
            height: 100%;
        }
    }

    .header--user{
        height: 50px;

        img {
            width: 40px;
            border-radius: 3px;
        }
    }

`;