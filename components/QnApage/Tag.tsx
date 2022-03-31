import styled from 'styled-components';
import { useRef } from 'react';

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
  handleLanguage: any;
}

const Tag = (props: tagProps) => {
  const tags = useRef<HTMLDivElement[] | null>([]);

  const handleTag = (e: any): void => {
    tags.current.forEach((tag) => {
      tag.style.filter =
        e.target === tag ? 'brightness(70%)' : 'brightness(100%)';
    });
  };

  return (
    <TagBox>
      <SubTag
        ref={(el) => (tags.current[0] = el)}
        onClick={(e) => {
          props.handleLanguage(e);
          handleTag(e);
        }}
        color="#3776AB"
      >
        Python
      </SubTag>

      <SubTag
        ref={(el) => (tags.current[1] = el)}
        onClick={(e) => {
          props.handleLanguage(e);
          handleTag(e);
        }}
        style={{ backgroundColor: '#F7DF1E', color: 'black' }}
      >
        Javascript
      </SubTag>
    </TagBox>
  );
};

export default Tag;
