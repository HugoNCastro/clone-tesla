/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

interface UniqueOverlayProps {
  children: ReactNode;
}

function UniqueOverlay({ children }: UniqueOverlayProps) {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);


  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>

          <li>
            <a href="#">made with 💚</a>
          </li>

          <li>
            <a href="#">by Hugo N. Castro</a>
          </li>
        </ul>
      </Footer>
      {children}
    </Container>
  );
};

export default UniqueOverlay;
