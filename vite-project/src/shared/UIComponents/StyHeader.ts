import styled from 'styled-components';

export const HeaderContentMain = styled.header`
width: 100%;
height: 100%;
background-color: #444;
display: flex;
justify-content: center;

nav{
    width: 100%;
    max-width: 1280px;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
}
.logo{
    width: 100%;
    height: 100%;
}
.logo h2{
    color: white;
}

ul{
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
}

ul li{
 font-family: Georgia, 'Times New Roman', Times, serif;
 font-size: 20px;
 list-style: none;
}

`