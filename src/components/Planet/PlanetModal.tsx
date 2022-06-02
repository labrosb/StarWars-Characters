import React from 'react';
import PlanetImage from '../../assets/planet.png';
import Modal from '../Common/Modal';
import { TopContainer, Title, Text, Image } from './PlanetModal.UI';
import type { PlanetState } from '../../state/slices/planetsSlice';

type Props = {
  planet: PlanetState;
  isOpen: boolean;
  onClose: () => void;
}

const PlanetModal: React.FC<Props> = ({ planet, isOpen, onClose }) => {
  console.log(planet.climate)
  return (
    <Modal {...{ isOpen, onClose }}>
      <TopContainer>
        <Image src={PlanetImage} />
        <Title>{planet.name}</Title>
      </TopContainer>
      <Text>Diameter: {planet.diameter}</Text>
      <Text>Climate: {planet.climate}</Text>
      <Text>Population: {planet.population}</Text>
    </Modal>
  );
}

export default PlanetModal;
