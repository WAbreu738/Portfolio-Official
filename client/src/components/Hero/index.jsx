import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect'
import resume from '../../assets/about/Wesley Abreu Resume.pdf'
import { Link } from 'react-scroll';


// Styled component for the hero section
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
`;

// Keyframes for the star animation
const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

// Styled component for the stars container
const StarsContainer = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: transparent;
  box-shadow: ${({ shadows }) => shadows};
  animation: ${animStar} ${({ animationDuration }) => animationDuration}s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: transparent;
    box-shadow: ${({ shadows }) => shadows};
    animation: ${animStar} ${({ animationDuration }) => animationDuration}s linear infinite;
  }
`;


// Styled component for the title
const Title = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Button = styled.a`
  /* Button styles */
  display: inline-block;
  background-color: #38495a;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 12px;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 10px;
`;

const Hero = () => {
  // Function to generate random box shadows for stars
  const generateShadows = (n) => {
    let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    for (let i = 2; i <= n; i++) {
      value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    }
    return value;
  };

  // Create multiple layers of stars with different sizes
  const stars = [
    { size: 1, shadowCount: 700, animationDuration: 50 },
    { size: 2, shadowCount: 200, animationDuration: 100 },
    { size: 3, shadowCount: 100, animationDuration: 150 }
  ].map(({ size, shadowCount, animationDuration }) => (
    <StarsContainer
      key={`stars${size}`}
      size={size}
      shadows={generateShadows(shadowCount)}
      animationDuration={animationDuration}
    />
  ));

  return (
    <HeroSection id="hero">
      {stars}
      <Title>
        <span><Typewriter
          options={{
            strings: ['HELLO I AM WESLEY'],
            autoStart: true,
            loop: true,
          }}
        /></span>
        <span>A FULL-STACK DEVELOPER</span>
        <br />
        <Button href={resume} download="WesleyResume.pdf">
          DOWNLOAD CV
        </Button>
        <br />
        <Link to="about" smooth={true} duration={500}>
          <span className='cursor-pointer'>↓</span>
        </Link>
      </Title>
    </HeroSection>
  );
};

export default Hero;
