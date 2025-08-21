import { useState } from 'react'
import visualLogo from './logo/Visual.png'
import './App.css'
import React from 'react'

const TABS = {
  QUEM_SOMOS: 'Quem Somos?',
  SERVICOS: 'Serviços',
  ORCAMENTOS: 'Orçamentos',
  TECNICO: 'Técnico',
  PLANOS: 'Nossos Planos',
}

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const quemSomosTexto = `A VisualTech é uma empresa fundada em 2024 por Erick Finger, dedicada a oferecer soluções completas e inovadoras em tecnologia e computação. Atuamos desde a montagem e manutenção de computadores até o desenvolvimento de sistemas personalizados e tecnologias próprias, sempre com foco em qualidade, confiança e excelência no atendimento.`

function App() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [showWelcome, setShowWelcome] = useState(true)
  const [tab, setTab] = useState(TABS.QUEM_SOMOS)
  const [detectedMobile, setDetectedMobile] = useState(false)

  React.useEffect(() => {
    setDetectedMobile(isMobileDevice())
    const timer = setTimeout(() => setShowWelcome(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/5549920014159?text=Olá! Meu nome é ${form.nome}. Email: ${form.email}. Telefone: ${form.telefone}. Mensagem: ${form.mensagem}`)
  }

  if (showWelcome) {
    return (
      <div className="tela-boasvindas tela-boasvindas-animada tela-boasvindas-centralizada">
        <img src={visualLogo} alt="Logo Visual Tech" className="logo-visualtech-bemvindo" />
        <div className="icones-dispositivo">
          {detectedMobile && (
            <span className="icone-device" title="Acesso via Celular">📱</span>
          )}
        </div>
        <h1 className="titulo-bemvindo">Bem-vindo ao site da Visual Tech</h1>
        <p className="subtitulo-bemvindo">
          Sua parceira em negócios de tecnologia<br/>
          {detectedMobile && (
            <span className="msg-device">Você está acessando pelo celular!</span>
          )}
        </p>
        <div className="barra-progresso">
          <div className="progresso"></div>
        </div>
        <button className="btn-entrar" onClick={() => setShowWelcome(false)}>Entrar</button>
      </div>
    )
  }

  return (
    <div className="layout-visualtech">
      <header className="header-visualtech-central">
        <img src={visualLogo} alt="Logo Visual Tech" className="logo-central" />
        <nav className="menu-central">
          <button className={tab === TABS.QUEM_SOMOS ? 'active' : ''} onClick={() => setTab(TABS.QUEM_SOMOS)}>{TABS.QUEM_SOMOS}</button>
          <button className={tab === TABS.SERVICOS ? 'active' : ''} onClick={() => setTab(TABS.SERVICOS)}>{TABS.SERVICOS}</button>
          <button className={tab === TABS.ORCAMENTOS ? 'active' : ''} onClick={() => setTab(TABS.ORCAMENTOS)}>{TABS.ORCAMENTOS}</button>
          <button className={tab === TABS.PLANOS ? 'active' : ''} onClick={() => setTab(TABS.PLANOS)}>{TABS.PLANOS}</button>
          <button className={tab === TABS.TECNICO ? 'active' : ''} onClick={() => setTab(TABS.TECNICO)}>{TABS.TECNICO}</button>
        </nav>
      </header>
      <main className="main-visualtech">
        {tab === TABS.QUEM_SOMOS && (
          <section className="tela-inicial-visualtech">
            <div className="card-inicial">
              <img src={visualLogo} alt="Logo VisualTech" className="logo-inicial" />
              <h1>Bem-vindo à <span className="destaque-amarelo">VisualTech</span></h1>
              <h2 className="slogan-inicial">Soluções em tecnologia para o seu negócio crescer!</h2>
              <p className="apresentacao-inicial">
                Sites modernos, rápidos e personalizados.<br/>
                Suporte especializado e atendimento humanizado.<br/>
                Transforme sua presença digital com a VisualTech!
              </p>
              <div className="botoes-iniciais">
                <a className="cta-btn" href="#orcamento">Solicite um Orçamento</a>
                <a className="whatsapp-btn" href="https://wa.me/5549920014159" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a className="instagram-btn" href="https://instagram.com/visualtechgba" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
            <section className="diferenciais-section">
              <h2>Diferenciais VisualTech</h2>
              <div className="diferenciais-lista">
                <div className="diferencial-card">
                  <span role="img" aria-label="rocket">🚀</span> Performance máxima
                </div>
                <div className="diferencial-card">
                  <span role="img" aria-label="shield">🛡️</span> Segurança e confiança
                </div>
                <div className="diferencial-card">
                  <span role="img" aria-label="support">🤝</span> Suporte humanizado
                </div>
              </div>
            </section>
          </section>
        )}
        {tab === TABS.QUEM_SOMOS && (
          <section className="quem-somos-section">
            <div className="card-sobre-mim">
              <h2>Quem Somos?</h2>
              <p className="quem-somos-texto">{quemSomosTexto}</p>
            </div>
          </section>
        )}
        {tab === TABS.SERVICOS && (
          <section className="servicos-section">
            <div className="card-sobre-mim">
              <h2>Serviços</h2>
              <ul className="servicos-lista">
                <li><strong>Formatação Windows 10 (PRESENCIAL)</strong> — R$ 180,00</li>
                <li><strong>Formatação Windows 11 (PRESENCIAL)</strong> — R$ 200,00</li>
                <li><strong>Clonagem de Windows para outro computador ou disco (PRESENCIAL)</strong> — R$ 250,00</li>
                <li><strong>Montagem de Computador (PRESENCIAL)</strong> — R$ 350,00</li>
                <li><strong>Limpeza de computador + Otimização (PRESENCIAL)</strong> — R$ 200,00</li>
                <li><strong>Otimização completa de sistema (REMOTO)</strong> — R$ 50,00</li>
                <li><strong>Otimização Windows (REMOTO)</strong> — R$ 20,00</li>
                <li><strong>Otimização Windows + Jogos (REMOTO)</strong> — R$ 35,00</li>
                <li><strong>Otimização Windows + Redução de Input Lag + Jogos (REMOTO)</strong> — R$ 50,00</li>
                <li><strong>Aluguel do aplicativo de Otimização (desenvolvimento próprio) (REMOTO)</strong> — R$ 10,00/mês</li>
              </ul>
            </div>
          </section>
        )}
        {tab === TABS.ORCAMENTOS && (
          <section className="orcamentos-section">
            <div className="card-sobre-mim">
              <h2>Solicite um Orçamento</h2>
              <form className="form-orcamento" onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Seu nome" value={form.nome} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Seu e-mail" value={form.email} onChange={handleChange} required />
                <input type="tel" name="telefone" placeholder="Seu telefone" value={form.telefone} onChange={handleChange} required />
                <textarea name="mensagem" placeholder="Descreva sua necessidade" value={form.mensagem} onChange={handleChange} required />
                <button type="submit">Solicitar Orçamento via WhatsApp</button>
              </form>
            </div>
          </section>
        )}
        {tab === TABS.PLANOS && (
          <section className="planos-section">
            <div className="card-sobre-mim">
              <h2>Nossos Planos</h2>
              <div className="plano-card">
                <h3>Plano Mensalidade - Sistema de Otimização</h3>
                <p>Tenha acesso ao nosso sistema de otimização exclusivo para Windows, com suporte e atualizações mensais.</p>
                <div className="preco-plano">R$ 10,00/mês</div>
                <a href="https://wa.me/5549920014159?text=Tenho interesse no Plano Mensalidade de Sistema de Otimização" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Assinar via WhatsApp</a>
              </div>
            </div>
          </section>
        )}
        {tab === TABS.TECNICO && (
          <section className="tecnica-section">
            <div className="card-sobre-mim">
              <h2>Erick Finger</h2>
              <span className="subtitulo-sobre-mim">Entusiasta de Tecnologia</span>
              <p>
                Desde a infância, guiado por familiares da área, sempre fui apaixonado por tecnologia, especialmente computação, hardware e software.<br/><br/>
                Graduando em Engenharia da Computação, com diversos cursos na área, já atuei como professor e palestrante em tecnologia.<br/><br/>
                Há mais de 4 anos, foco minha carreira em programação, buscando sempre inovar e compartilhar conhecimento.
              </p>
            </div>
          </section>
        )}
      </main>
      <footer className="footer-discreto">2025 - Todos os direitos reservados a VisualTech</footer>
    </div>
  )
}


export default App 




