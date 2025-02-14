import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaHeart } from "react-icons/fa";
import useSound from "use-sound";
import music from "./assets/bossa.m4a";
import BounceCards from "./components/BounceCards";
import { LuCandy } from "react-icons/lu";
import img1 from "../src/assets/image1.jpg"
import img2 from "../src/assets/image2.jpg"
import img3 from "../src/assets/image3.jpg"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #69ff7d, #1495ff);
    min-height: 100dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    color: #068aa1;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 300px;
  }
`;

const Message = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #333;
  margin: 1rem 0;
  width: 100%;
  padding: 0 1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FloatingHeart = styled(FaHeart)`
  position: absolute;
  color: #22f107;
  animation: float ${(props) => props.duration}s linear infinite;
  left: ${(props) => props.left}%;
  font-size: ${(props) => props.size}px;
  opacity: 0.7;
  pointer-events: none;

  @keyframes float {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-100px);
    }
  }
`;

const images = [
  img1,
  img2,
  img3,
  img1,
  img2,
];

const transformStyles = [
  "rotate(5deg) translate(-50px)",
  "rotate(0deg) translate(-30px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(30px)",
  "rotate(-5deg) translate(50px)",
];

function App() {
  const [play] = useSound(music, { loop: true });

  useEffect(() => {
    play();
  }, [play]);

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 3 + Math.random() * 7,
    size: 10 + Math.random() * 20,
  }));

  return (
    <>
      <GlobalStyle />

      <Card>
        <h1>A special letter for you:))</h1>
        <BounceCards
          className="custom-class"
          images={images}
          containerWidth={300}
          containerHeight={300}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
        />
        <Message>
          You’re probably wondering what the heck this is. Well, if you’ve
          already forgotten, it’s February 14th—at least over there XD. And
          since I didn’t want you to just be a spectator watching all those
          annoying bastards on the street with their gifts, I wanted to make
          this for you because you’re really important to me :)). Besides, I’ve
          always wanted to do something like this at least once, haha.
        </Message>
        <Message>
          Oh, and no, I can’t add sweets or chocolates here, so I’m leaving
          these for you to imagine them and make you hungry—muahaha, I’m evil.
        </Message>
        <div style={{ display: "flex" }}>
          <LuCandy color="green" />
          <LuCandy color="green" />
          <LuCandy  color="green"/>
        </div>

        <Message>
        Anyway, to keep it short, always keep smiling because, to me and many
        others, you’re worth a lot!
        </Message>


        <Message>
        And yes, as you might guess, we don’t have any pictures together, so I’ll just add the ones of you that I liked the most, haha.
        </Message>

        <Message>
        Maraming pagmamahal mula sa malayo, Lucas. :3
</Message>

        {hearts.map((heart) => (
          <FloatingHeart
            key={heart.id}
            left={heart.left}
            duration={heart.duration}
            size={heart.size}
          />
        ))}
      </Card>
    </>
  );
}

export default App;
