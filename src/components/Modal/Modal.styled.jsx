import styled from '@emotion/styled';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;   

    width: 100vw;
    height: 100vh;
    
    background-color: rgba(255, 255, 255, 0.5);
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    padding: 10px;
    width: 100%;
    max-width: 500px;
    height: 400px;

    border: 3px solid #f00;
    border-radius: 10px;
    color: #fff;
    background-color: #fff;
`;