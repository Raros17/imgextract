
import styled from 'styled-components';

interface TextSectionProps {
    colorData: string[];
  }

export const PlaceholderImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: #1b1a1a; 
  margin-top: 20px;
`

export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 20px;
`

export const ColorDownBtn = styled.button`
  height: 50px;
  border-radius: 20px;
  border: none;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  background-color: #262626;
  color: #fff;
  padding: 0 1rem;
  font-family: 'TheJamsil5Bold';
  &:hover {
    background-color: #101010;
  }
  @media (max-width: 800px) {
  width: 70px;
  font-size: 15px;
}
`


export const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100%;
`


export const TextSection = styled.section<TextSectionProps>`
  width: 80%;
  background: ${({ colorData }) =>
    getBackgroundGradient(colorData, '#212121')};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  font-family : 'HSSanTokki20-Regular';
`

export const MainSection = styled.section<TextSectionProps>`
  width: 100vw;
  min-height: 100vh; 
  background: ${({ colorData }) =>
    getBackgroundGradient(colorData, '#444444')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const getBackgroundGradient = (colorData: string[], fallbackColor: string) => {
  if (colorData.length > 1) {
    return `linear-gradient(to right, ${colorData[0]}, ${colorData[1]})`;
  }
  return fallbackColor;
};

export const ShowSpoidColor = styled.div`
  margin-top: 20px;
  width: 50%;
  height: 30px;
  border-radius: 10px;
`

export const SpoidButton = styled.button<{ isSpoidActive: boolean }>`
  background-color: ${({ isSpoidActive }) => (isSpoidActive ? "#BF3471" : '#666')};
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')}; 
  margin-top: 10px;
  border-radius: 50%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; 
  &:hover {
    transition: all 0.2s ease;
    background-color: ${({ isSpoidActive }) => (isSpoidActive ? '#A22D66' : '#555')};
  }
`;