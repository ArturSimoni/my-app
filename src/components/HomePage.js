import React from 'react';
import './HomePage.css'; // Importa o CSS específico para a homepage
// Removendo imports de imagens locais e usando URLs de placeholder diretas
// import logoVidaMais from '../assets/vida-mais-logo.png';
// import heroImage from '../assets/hero-home.jpg';
// import quemSomosImage from '../assets/quem-somos.jpg';
// import exameImage from '../assets/exame.jpg';
// import consultaImage from '../assets/consulta.jpg';
// import tratamentoImage from '../assets/tratamento.jpg';

export default function HomePage() {
  // URLs de imagens de placeholder para download e uso
  // Sugestão de nomes para a pasta assets:
  const logoVidaMaisUrl = "https://placehold.co/120x40/5b87a9/ffffff?text=VIDA+MAIS"; // Nome sugerido: vida-mais-logo.png
  const heroImageUrl = "https://placehold.co/1200x400/a7d9c6/ffffff?text=Consultorio"; // Nome sugerido: hero-home.jpg
  const quemSomosImageUrl = "https://placehold.co/450x300/436e8b/ffffff?text=Equipe+Medica"; // Nome sugerido: quem-somos.jpg
  const exameImageUrl = "https://placehold.co/280x200/5b87a9/ffffff?text=Exame"; // Nome sugerido: exame.jpg
  const consultaImageUrl = "https://placehold.co/280x200/5b87a9/ffffff?text=Consulta"; // Nome sugerido: consulta.jpg
  const tratamentoImageUrl = "https://placehold.co/280x200/5b87a9/ffffff?text=Tratamento"; // Nome sugerido: tratamento.jpg

  return (
    <div className="homepage-container">
      {/* Cabeçalho */}
      <header className="homepage-header">
        <div className="homepage-logo-section">
          <img src={logoVidaMaisUrl} alt="Vida Mais Logo" className="homepage-logo" />
        </div>
        <button className="homepage-login-btn">Login</button>
      </header>

      {/* Seção Principal (Hero) */}
      <section className="homepage-hero-section" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="homepage-hero-overlay">
          <h1 className="homepage-hero-title">Saúde é viver mais.</h1>
          <h1 className="homepage-hero-subtitle">Saúde é viver melhor.</h1>
          <button className="homepage-agendamento-btn">Efetue agora o seu agendamento</button>
        </div>
      </section>

      {/* Seção de Cards de Serviços */}
      <section className="homepage-service-cards">
        <div className="homepage-card">
          <img src="https://placehold.co/60x60/2f8d60/ffffff?text=Unidades" alt="Ícone Unidades" className="homepage-card-icon" />
          <span className="homepage-card-text">Unidades</span>
        </div>
        <div className="homepage-card">
          <img src="https://placehold.co/60x60/2f8d60/ffffff?text=App" alt="Ícone Aplicativo" className="homepage-card-icon" />
          <span className="homepage-card-text">Aplicativo</span>
        </div>
        <div className="homepage-card">
          <img src="https://placehold.co/60x60/2f8d60/ffffff?text=Lab" alt="Ícone Laboratório" className="homepage-card-icon" />
          <span className="homepage-card-text">Laboratório e exames</span>
        </div>
      </section>

      {/* Seção "Quem Somos?" */}
      <section className="homepage-quem-somos-section">
        <div className="homepage-quem-somos-image-container">
          <img src={quemSomosImageUrl} alt="Quem somos?" className="homepage-quem-somos-image" />
        </div>
        <div className="homepage-quem-somos-content">
          <h2 className="homepage-quem-somos-title">Quem somos?</h2>
          <p className="homepage-quem-somos-text">
            Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Interagi no mé, cursus quis, vehicula ac nisi. Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent.
          </p>
        </div>
      </section>

      {/* Seção de Imagens Inferiores */}
      <section className="homepage-bottom-images-section">
        <div className="homepage-bottom-image-card">
          <img src={exameImageUrl} alt="Exame" className="homepage-bottom-image" />
          <span className="homepage-bottom-image-caption">Exame</span>
        </div>
        <div className="homepage-bottom-image-card">
          <img src={consultaImageUrl} alt="Consulta" className="homepage-bottom-image" />
          <span className="homepage-bottom-image-caption">Consulta</span>
        </div>
        <div className="homepage-bottom-image-card">
          <img src={tratamentoImageUrl} alt="Tratamento" className="homepage-bottom-image" />
          <span className="homepage-bottom-image-caption">Tratamento</span>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="homepage-footer">
        <img src={logoVidaMaisUrl} alt="Vida Mais Logo" className="homepage-footer-logo" />
        {/* Adicionar links de rodapé se necessário */}
      </footer>
    </div>
  );
}