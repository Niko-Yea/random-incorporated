import styled from "styled-components";

const Image = styled.img`
  width: 341.5px;
  height: 341.5px;
  object-fit: cover;
  cursor: pointer;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

export const ImageItem = ({ item, showModal, setModalImg }) => {
  const onImgClick = (img) => {
    showModal();
    setModalImg(img);
  };

  return (
    <ListItem onClick={() => onImgClick(item.img)}>
      <Image src={item.preview} alt={item.alt} />
    </ListItem>
  );
};
