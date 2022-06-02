import React from 'react';
import styled from 'styled-components';
import Spinner from '../../assets/loading-spinner.svg';
import Wave from '../../assets/loading-wave.svg';

type Props = { type?: string; $height?: number, $marginTop?: number }

export const Image = styled.img<Props>`
  height: ${({ $height }) => $height ? `${$height}px` : undefined};
  margin-top: ${({ $marginTop }) => $marginTop ? `${$marginTop}px` : undefined};
`;

const Loader: React.FC<Props> = ({ type, $height, $marginTop }) => (
  <Image 
    src={type === 'wave' ? Wave : Spinner}
    {... { $height, $marginTop }}
  />
);

export default Loader;