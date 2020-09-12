import styled from 'styled-components';


export const Container = styled.div`

    .lists {
        margin-top: -156px;
    }

    footer{
        width: 100%;
        padding-left: 56px;
        display: flex;
        flex-direction: column;
        align-items: left;
        padding-bottom: 48px; 
       
        h4{
            font-size: 16px; 
            font-weight: 500;
            color: #9f9f9f;
        }

        a {
            text-decoration: none;
            color: inherit; 
            transition: color .2s;

            &:hover{
                color: #46d369;
            }
        }

        div {
            width: 80%;
            margin-top: 36px;
            display: flex;
            flex-direction: column;
            align-items: left;

            span {
                font-size: 14px;
                color: #9f9f9f;
                margin-bottom: 8px; 
            }
        }
    }

    .loading{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;