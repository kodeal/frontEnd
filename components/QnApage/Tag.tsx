import styled from 'styled-components';

const TagBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.6rem;
`;

const SubTag = styled.div`
  border-radius: 5px;
  padding: 8px;
  color: white;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  &:active {
    background-color: 'red';
  }
`;

interface tagProps {
  handleLanguage: Function;
}

const Tag = (props: tagProps) => {
  return (
    <TagBox>
      <SubTag color="#3776AB">Python</SubTag>

      <SubTag style={{ backgroundColor: '#F7DF1E', color: 'black' }}>
        Javascript
      </SubTag>
    </TagBox>
  );
};

export default Tag;
