const businesses = [

  // === FARMACIAS ===
  {
    name: "Drogaria Economica De Volta Grande",
    category: "Farmácias",
    address: "Rua Elias Bouhid, 11",
    phone: "(32) 3463-1829",
    hours: "Segunda a Domingo, 07:30h às 19:00h",
    description: "Medicamentos, perfumaria, aferição de pressão e orientação farmacêutica."
  },
  {
    name: "Drogaria Inova Volta Grande",
    category: "Farmácias",
    address: "Rua Elias Bouhid, 45",
    phone: "(32) 99826-9370",
    hours: "Segunda a sábado, 08:00h às 20:00h",
    description: "Atendimento rápido, genéricos, dermocosméticos e entrega por WhatsApp."
  },
  {
    name: "Droga'S Voga",
    category: "Farmácias",
    address: "Rua Bernardino Rocha, 114",
    phone: "(32) 3463-1207",
    hours: "Segunda a sábado, 08:00h às 20:00h",
    description: "Atendimento rápido, genéricos, dermocosméticos e entrega por WhatsApp."
  },

  // === MERCADOS ===
  {
    name: "Mercearia Trevo",
    category: "Mercados",
    address: "Rua Cineasta Humberto Mauro, 455",
    phone: "(32) 3463-1344",
    hours: "Segunda a sábado, 07:00h às 18:30h, domingo, 07:30h às 11:30h",
    description: "Mercado de bairro com hortifruti, açougue, padaria e entrega local."
  },
  {
    name: "Super Feirão",
    category: "Mercados",
    address: "Avenida Artur Pedras, 95",
    phone: "(32) 3463-1185",
    hours: "Segunda a sábado, 08:00h às 19:00h",
    description: "Produtos alimentícios, limpeza, bebidas e promoções semanais."
  },

  // === RESTAURANTES ===
  {
    name: "Restaurante Varandão",
    category: "Restaurantes",
    address: "Volta Grande, MG, 36720-000",
    phone: "",
    hours: "Segunda a domingo, 06:00h às 00:00h",
    description: "Comida mineira, marmitex, pratos executivos e sobremesas caseiras."
  },
  {
    name: "Restaurante Terrazo",
    category: "Restaurantes",
    address: "Rua Cineasta Humberto Mauro, 427",
    phone: "(32) 99913-8305",
    hours: "Segunda a domingo, 11:00h às 15:00h",
    description: "Comida caseira, pratos executivos, marmitex e opções vegetarianas."
  },
  {
    name: "Restaurante Fundo de Quintal",
    category: "Restaurantes",
    address: "Rua Cineasta Humberto Mauro, 427",
    phone: "(32) 99913-8305",
    hours: "segunda a sexta, 09:00h às 16:00h; sábado, 09:00h às 22:00h; domingo, 10:00h às 17:00h",
    description: "Comida caseira, pratos executivos, marmitex e opções vegetarianas."
  },

  // === LOJAS ===
  {
    name: "HP Indústria de Papéis Eireli",
    category: "Lojas",
    address: "Rua Prudente Arino dos Reis Junqueira - Bonsucesso, Volta Grande - MG, 36720-000",
    phone: "(32) 99805-6573",
    hours: "Segunda a sexta, 07:00h às 17:00h; sábado, 07:00h às 11:00h",
    description: "Fabricação e venda de papéis especiais, papel cartão, papel kraft e papel reciclado."
  },

  // === SAÚDE ===
  {
    name: "Fisionmed",
    category: "Saúde",
    address: "Rua Elias Bouhid, Nº 18 - Centro, Volta Grande - MG, 36720-000",
    phone: "(32) 99819-9731",
    hours: "Segunda a sexta, 08:00h às 18:00h",
    description: "Atendimento fisioterapêutico, reabilitação motora, pilates e terapias manuais."
  },

  // === EDUCAÇÃO ===
  {
    name: "Prefeitura Municipal de Volta Grande",
    category: "Educação",
    address: "Avenida Artur Pedras, 120 - Volta Grande, MG, 36720-000",
    phone: "(32) 3463-1232",
    hours: "Segunda a sexta, 09:00h às 17:00h",
    description: "Coordenação de programas educacionais, cursos de capacitação e apoio a escolas municipais."
  },
  {
    name: "Escola Estadual Nossa Senhora do Rosario",
    category: "Educação",
    address: "Volta Grande, MG, 36720-000",
    phone: "",
    hours: "",
    description: "Ensino fundamental e médio, atividades extracurriculares, projetos culturais e esportivos."
  },
  {
    name: "Secretaria Municipal de Educação de Volta Grande",
    category: "Educação",
    address: "Alameda Padre Sebastião Carlos Poggianella, 38 - Volta Grande, MG, 36720-000",
    phone: "(32) 3463-1435",
    hours: "",
    description: "Coordenação de programas educacionais, cursos de capacitação e apoio a escolas municipais."
  },
  {
    name: "Escola Estadual Capitão Godoy",
    category: "Educação",
    address: "Rua Cineasta Humberto Mauro, 186 - Centro, Volta Grande - MG, 36720-000",
    phone: "(32) 3463-1110",
    hours: "Segunda a sexta, 06:50h às 22:40h",
    description: "Ensino fundamental e médio, atividades extracurriculares, projetos culturais e esportivos."
  }
];

const events = [
  { name: "Feira do Produtor Rural", date: "10/08/2026", place: "Praça São Sebastião", description: "Barracas com hortaliças, queijos, doces, artesanato e música ao vivo." },
  { name: "Circuito Cultural de Inverno", date: "24/08/2026", place: "Centro Cultural Municipal", description: "Apresentações de dança, teatro estudantil e exposição de artistas locais." },
  { name: "Campanha Saúde na Praça", date: "05/09/2026", place: "Praça São Sebastião", description: "Aferição de pressão, orientação nutricional e atividades de prevenção." },
  { name: "Torneio Municipal de Futsal", date: "19/09/2026", place: "Ginásio Poliesportivo", description: "Competição entre equipes de bairros e comunidades rurais." },
  { name: "Encontro de Empreendedores Locais", date: "02/10/2026", place: "Escola Municipal", description: "Palestras sobre vendas, atendimento, redes sociais e formalização." },
  { name: "Festival Gastronômico VG", date: "18/10/2026", place: "Avenida Minas Gerais", description: "Pratos típicos, food trucks regionais e votação popular dos melhores sabores." }
];

const news = [
  { title: "Comércio local prepara campanha de valorização das compras na cidade", date: "15/07/2026", description: "Ação fictícia incentiva moradores a conhecerem lojas, mercados e prestadores locais." },
  { title: "Feira comunitária ganha nova organização visual e espaço para artesãos", date: "28/07/2026", description: "A iniciativa busca ampliar a participação de pequenos produtores e melhorar a experiência dos visitantes." },
  { title: "Escolas simulam projeto de tecnologia para mapear informações do município", date: "06/08/2026", description: "Alunos participam de atividade prática sobre cidadania digital e programação web." },
  { title: "Campanha de saúde orienta população sobre prevenção e atendimento básico", date: "21/08/2026", description: "Conteúdo fictício destaca ações de informação, cuidado preventivo e participação comunitária." }
];

const businessGrid = document.querySelector("#businessGrid");
const businessSearch = document.querySelector("#businessSearch");
const categoryFilter = document.querySelector("#categoryFilter");
const businessCount = document.querySelector("#businessCount");
const eventsGrid = document.querySelector("#eventsGrid");
const newsGrid = document.querySelector("#newsGrid");
const navLinks = document.querySelector("#navLinks");
const menuToggle = document.querySelector("#menuToggle");
const backToTop = document.querySelector("#backToTop");
const currentDateTime = document.querySelector("#currentDateTime");

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function fillCategoryFilter() {
  const categories = [...new Set(businesses.map((business) => business.category))].sort();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderBusinesses() {
  const searchTerm = normalizeText(businessSearch.value.trim());
  const selectedCategory = categoryFilter.value;

  const filtered = businesses.filter((business) => {
    const matchesName = normalizeText(business.name).includes(searchTerm);
    const matchesCategory = selectedCategory === "Todas" || business.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  businessCount.textContent = `${filtered.length} comércio(s) encontrado(s)`;

  if (filtered.length === 0) {
    businessGrid.innerHTML = '<p class="empty-state">Nenhum comércio encontrado com os filtros informados.</p>';
    return;
  }

  businessGrid.innerHTML = filtered.map((business) => `
    <article class="data-card reveal is-visible">
      <span class="tag">${business.category}</span>
      <h3>${business.name}</h3>
      <p><strong>Endereço:</strong> ${business.address}</p>
      <p><strong>Telefone:</strong> ${business.phone}</p>
      <p><strong>Horário:</strong> ${business.hours}</p>
      <p>${business.description}</p>
      <button class="btn btn-secondary" type="button" data-business="${business.name}">Ver detalhes</button>
    </article>
  `).join("");
}

function renderEvents() {
  eventsGrid.innerHTML = events.map((event, index) => `
    <article class="data-card reveal">
      <img class="card-image" src="assets/img/evento${index + 1}.webp" alt="Imagem ilustrativa do evento ${event.name}" onerror="this.remove()">
      <span class="tag">${event.date}</span>
      <h3>${event.name}</h3>
      <p><strong>Local:</strong> ${event.place}</p>
      <p>${event.description}</p>
    </article>
  `).join("");
}

function renderNews() {
  newsGrid.innerHTML = news.map((item, index) => `
    <article class="news-card reveal">
      <img class="card-image" src="assets/img/noticia${index + 1}.webp" alt="Imagem ilustrativa da notícia ${item.title}" onerror="this.remove()">
      <span class="card-meta">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function setupForms() {
  const contactForm = document.querySelector("#contactForm");
  const contactMessage = document.querySelector("#contactFormMessage");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactMessage.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
    contactForm.reset();
  });
}

function setupMenu() {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupBackToTop() {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupDateTime() {
  function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    });
    const time = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    currentDateTime.textContent = `${date} - ${time}`;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
}

function setupNavigationSearch() {
  const navSearch = document.querySelector("#navSearch");
  const navSearchButton = document.querySelector("#navSearchButton");

  function searchFromNavigation() {
    businessSearch.value = navSearch.value;
    categoryFilter.value = "Todas";
    renderBusinesses();
    document.querySelector("#comercios").scrollIntoView({ behavior: "smooth" });
  }

  navSearchButton.addEventListener("click", searchFromNavigation);
  navSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchFromNavigation();
    }
  });
}

function setupDetailsButton() {
  businessGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-business]");
    if (!button) return;

    const business = businesses.find((item) => item.name === button.dataset.business);
    if (business) {
      const mapQuery = encodeURIComponent(`${business.name}, ${business.address}, Volta Grande, MG`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${mapQuery}`, "_blank", "noopener,noreferrer");
    }
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  fillCategoryFilter();
  renderBusinesses();
  renderEvents();
  renderNews();
  setupForms();
  setupMenu();
  setupBackToTop();
  setupDateTime();
  setupNavigationSearch();
  setupDetailsButton();
  setupRevealAnimation();

  businessSearch.addEventListener("input", renderBusinesses);
  categoryFilter.addEventListener("change", renderBusinesses);
}

document.addEventListener("DOMContentLoaded", init);
