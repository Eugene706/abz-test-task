import { useState } from 'react';
import { Header, Hero, Acquaintance, Container, Users, Registration, Footer } from 'components';

import SmoothScroll from 'smooth-scroll';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const scroll = new SmoothScroll('a[href*="#"]');

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Container>
          <Acquaintance />
          <Users openModal={openModal} />
          <Registration setOpenModal={setOpenModal} openModal={openModal} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
