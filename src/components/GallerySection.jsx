import { useState } from "react";

import { Container } from "./custom-styled-components/Container";
import { ImageItem } from "./ImageItem";
import { ImagesList } from "./ImagesList";
import { Modal } from "./Modal";

import { images } from "../img/gallery/images";
import { Paragraph } from "./custom-styled-components/Paragraph";
import { Title } from "./custom-styled-components/Title";
import { Section } from "./custom-styled-components/Section";

export const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Section bg="primaryBgColor">
      <Container pt="68px">
        <Title
          align="center"
          textColor="thirdTextColor"
          font="primary"
          fs="36px"
          weight="light"
          lh="0.77"
          ls="-0.72px"
        >
          Zainspiruj się <b>naszymi realizacjami</b>
        </Title>
        <Paragraph
          mt="25px"
          mb="52px"
          align="center"
          textColor="secondaryTextColor"
          font="primary"
          fs="19px"
          weight="light"
          lh="1.47"
          ls="-0.38px"
        >
          Wybierz model i kolor okien RGB idealnie dopasowanych do projektu
          Twojego wymarzonego domu.
          <br /> Poznaj również szeroki asortyment rolet okiennych.
        </Paragraph>
      </Container>
      <ImagesList>
        {images.map((i) => (
          <ImageItem
            key={i.id}
            item={i}
            showModal={toggleModal}
            setModalImg={setModalImg}
          />
        ))}
      </ImagesList>
      {showModal && <Modal onClose={toggleModal} modalImg={modalImg} />}
    </Section>
  );
};
