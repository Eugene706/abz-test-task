import { useState } from 'react';
import { Header, Hero, Acquaintance, Container, Users, Registration, Footer } from 'components';

function App() {
  const [openModal, setOpenModal] = useState(false);

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
