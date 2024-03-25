import styled, { css } from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    min-height: 680px;
    background-size: cover;
    background-position: center;
  
    ${( {backgroundImage} ) => backgroundImage 
        && css` background-image: url(${backgroundImage}); ` 
    }

    content{
        width: inherit;
        height: inherit;

        h1 {
            font-size: 40px;
            font-weight: 400;
            margin-top: 15px;
        }

        span {
            display: inline-block;
            margin-right: 15px;
            font-size: 14px;
            font-weight: 300;
        }

        .points{
            color: #46d369;
        }

    }

    .featured--horizontal{
        width: inherit;
        height: 100vh;
        min-height: 680px;
        background: linear-gradient(to right, rgba(0,0,0,.6) 30%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 56px;
        padding-bottom: 136px;
        padding-top: 56px;
    }


    .featured--info{
        font-size: 16px;
        font-weight: 300;
        margin-top: 15px;
    }


    .featured--genres{
        margin-top: 16px;
        font-size: 16px;
    }

    .featured--description{
        margin-top: 16px;
        font-size: 18px;
        max-width: 35%;
        color: #dfdfdf;
    }

    .featured--buttons{
        margin-top: 16px;
    }

    a {
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        padding: 12px 36px;
        border-radius: 4px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.3s;

        svg {
            font-size: 16px;
            margin-right: 8px;
        }

        &:hover {
            opacity: 0.6;
        }
    }

    .featured--watchButton{
        background-color: #FFF;
        color: #000;
    }

    .featured--myListButton{
        opacity: 0.85;
        background-color: #333;
        color: #FFF;
    }


    @media (max-width:760px){
        .featured{
            height: 90vh;
        }

        .featured--name{
            font-size: 40px;
        }

        .featured--info{
            font-size: 16px;
        }

        .featured--description{
            font-size: 14px;
            max-width: 100%;
            margin-right: 30px;
        }
        .featured--myListButton,
        .featured--watchButton{
            font-size: 16px;
        }
        .featured--genres{
            font-size: 14px;
        }

    }

`;




