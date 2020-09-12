import styled, { css } from 'styled-components';


export const Container = styled.div`
    width: 100%;
    margin-bottom: 28px;

    h2 {
        margin-left: 56px;
        font-size: 20px;
        font-weight: 400;
    }

    &:hover {
        .left,
        .right{
            
            svg {
                opacity: 1;
            }
        } 
    }

    .listarea{
        overflow-x: hidden;
        padding: 0 36px;

    }

    .list{
        transition: all ease 0.5s;
    }

    .item{
        display: inline-block;
        height: 308px;
        width: 180px;
        cursor: pointer;

        img{
            width: 96%;
            margin-top: 20px;
            transition: all ease 0.3s;
            border-radius: 5px;

            &:hover{
                transform: scale(1.10); 
            }
        }
    }


    .left,
    .right{
        position: absolute;
        margin-top: 20px;
        width: 56px;
        height: 266px;
        background: linear-gradient(180deg, transparent 5%, rgba(0, 0, 0, 0.9), transparent 95%);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0.5;
        transition: all ease 0.5s;

        svg {
            opacity: 0;
            font-size: 36px;
            transition: all ease 0.3s;
        }


        &:hover{
            opacity: 1;

            svg {
                opacity: 1;
                font-size: 46px;
            }
        }
    }

    .left{
        left: 0;
    }

    .right{
        right: 0;
    }

    .movieRow:hover .left,
    .movieRow:hover .right{
        opacity: 1;
    }

    @media (max-width:760px){
        .left,
        .right{
            opacity: 1;
        }
    }

`;