import styled from 'styled-components';

export const CategoryContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
@media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
column-gap: 20px;
row-gap: 50px;
`;

export const CategoryTitle = styled.div`
font-size: 38px;
margin-bottom: 25px;
text-align: center;
`