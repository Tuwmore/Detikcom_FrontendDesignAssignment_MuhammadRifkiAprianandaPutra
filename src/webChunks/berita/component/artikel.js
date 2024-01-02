import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBerita from './cardBerita';
import Foto1 from "../../../assets/images/galeri1G.png"

const Artikel = () => {
  const cardData = [
    {
        imageUrl: Foto1,
        title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya',
        description: 'Sabtu, 25 Nov 2023 20:00 WIB',
    },

    {
        imageUrl: Foto1,
        title: 'Edukasi Lingkungan Hidup Bonus Sehat di Misi Lestari 2023: See Nature',
        description: 'Selasa, 28 Nov 2023 07:42 WIB',
    },

    {
        imageUrl: Foto1,
        title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023',
        description: 'Minggu, 26 Nov 2023 13:04 WIB',
    },

    {
        imageUrl: Foto1,
        title: 'Kelar Lari di CT Arsa Charity Fun Run, Recharge Energi Nonton Maliq & D essentials',
        description: 'Sabtu, 18 Nov 2023 17:39 WIB',
    },

    {
        imageUrl: Foto1,
        title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
        description: 'Kamis, 16 Nov 2023 16:34 WIB',
    },

    {
        imageUrl: Foto1,
        title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
        description: 'Minggu, 12 Nov 2023 11:55 WIB',
    },
  ];

  return (
    <Container>
      <Row xs={1} md={3} xl={3} >
        {cardData.map((card, index) => (
          <Col key={index} style={{marginBottom:20}}>
            <CardBerita {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Artikel;