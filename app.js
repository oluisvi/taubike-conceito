(() => {
  const app = document.querySelector('#app');
  const isElite = document.body.dataset.lead === 'elite';
  const brand = isElite ? 'ELITE MOGI' : 'TAUBIKE';
  const instagram = isElite ? 'https://www.instagram.com/elite.mogi/' : 'https://www.instagram.com/taubike/';
  const whatsapp = 'https://wa.me/5511955029757';
  const contactUrl = isElite ? whatsapp : instagram;
  const city = isElite ? 'MOGI DAS CRUZES · SP' : 'TAUBATÉ · SP';
  const directions = isElite ? ['01 · EDITORIAL', '02 · PULSE', '03 · ESSENCIAL'] : ['01 · ROTA', '02 · CAMPO', '03 · EDITORIAL'];
  const title = isElite ? 'Elétrica.\nFeita para\no seu ritmo.' : 'Uma cidade\ninteira pela\nfrente.';
  const intro = isElite
    ? 'Um espaço claro para conhecer as bikes elétricas e continuar a conversa com a equipe.'
    : 'Uma ideia de espaço próprio para conhecer a Taubike e explorar as bicicletas da loja.';
  const products = isElite ? [
    { id:'falcon-pro', name:'Falcon Pro', family:'Linha Falcon', image:'assets/catalogo/falcon-pro.jpg', type:'BIKE ELÉTRICA · OFF-ROAD', price:'R$ 39.990', power:'5.000 W', speed:'95 km/h', range:'Até 120 km', battery:'72V · 35Ah', details:'No catálogo enviado: display HD multifunção, freios a disco hidráulicos, NFC, proteção IP67 e recarga informada de 3 a 4 horas.', page:'04' },
    { id:'v29-pro', name:'V29 Pro', family:'Linha V', image:'assets/catalogo/v29-pro.jpg', type:'BIKE ELÉTRICA · ARO 20 × 4', price:'R$ 9.790', power:'1.000 W', speed:'32 km/h', range:'Até 120 km', battery:'Dupla · 48V · 15,6Ah cada', details:'No catálogo enviado: display colorido, freios a disco hidráulicos, câmbio Shimano de 7 marchas e recarga informada de 5 a 8 horas.', page:'06' },
    { id:'v9-max-s', name:'V9 Max S', family:'Linha V', image:'assets/catalogo/v9-max-s.jpg', type:'BIKE ELÉTRICA · ARO 20 × 4', price:'R$ 9.790', power:'1.000 W', speed:'32 km/h', range:'Até 120 km', battery:'Dupla · 48V · 20Ah', details:'No catálogo enviado: display colorido, freios duplos hidráulicos, app Android/iOS, cartão NFC, alarme e cadeado.', page:'13' },
    { id:'y16', name:'Y16', family:'Outros modelos', image:'assets/catalogo/y16.jpg', type:'BIKE ELÉTRICA · ARO 16 × 4', price:'R$ 8.290', power:'750 W', speed:'25 km/h', range:'Até 84 km', battery:'Lítio · 15Ah', details:'No catálogo enviado: display LCD multifuncional, freios hidráulicos a óleo, cesto central, farol LED e proteção IP54.', page:'23' }
  ] : [
    { id:'bike-01', name:'Bicicleta 01', family:'Bicicletas', type:'EXEMPLO VISUAL', price:'A confirmar', power:'A confirmar', speed:'A confirmar', range:'A confirmar', battery:'A confirmar', details:'Cartão demonstrativo. Nome, imagem e características devem vir do catálogo real da Taubike.', page:'—' },
    { id:'bike-02', name:'Bicicleta 02', family:'Bicicletas', type:'EXEMPLO VISUAL', price:'A confirmar', power:'A confirmar', speed:'A confirmar', range:'A confirmar', battery:'A confirmar', details:'Cartão demonstrativo. Nome, imagem e características devem vir do catálogo real da Taubike.', page:'—' },
    { id:'bike-03', name:'Bicicleta 03', family:'Bicicletas', type:'EXEMPLO VISUAL', price:'A confirmar', power:'A confirmar', speed:'A confirmar', range:'A confirmar', battery:'A confirmar', details:'Cartão demonstrativo. Nome, imagem e características devem vir do catálogo real da Taubike.', page:'—' }
  ];
  const familyFilters = isElite
    ? [['all','Todos'],['Linha Falcon','Linha Falcon'],['Linha V','Linha V'],['Outros modelos','Outros']]
    : [['all','Todas'],['Bicicletas','Bicicletas']];
  const filterButtons = familyFilters.map(([value,label], index) => `<button type="button" class="filter${index===0?' active':''}" data-filter="${value}" aria-pressed="${index===0}">${label}</button>`).join('');
  const cards = products.map((product,index) => `<article class="product-card" data-id="${product.id}" data-family="${product.family}" data-search="${`${product.name} ${product.family} ${product.type}`.toLocaleLowerCase('pt-BR')}">
    <div class="product-visual ${product.image?'has-image':''}">${product.image?`<img src="${product.image}" alt="${product.name}, imagem do catálogo enviado pela Elite Mogi" loading="lazy">`:`<svg viewBox="0 0 420 250" aria-hidden="true"><path class="orbit" d="M22 201C83 55 221 37 385 120"/><circle cx="118" cy="161" r="56"/><circle cx="310" cy="161" r="56"/><path class="frame" d="m118 161 54-84 58 84H118l73-52h72l47 52m-155-84h-39m72 0h29"/><path class="detail" d="m250 109 14-34h42"/></svg>`}<span class="art-label">${product.image?'FOTO DO CATÁLOGO':'ILUSTRAÇÃO · EXEMPLO'}</span><span class="product-number">0${index+1}</span><button class="favorite" type="button" aria-label="Favoritar ${product.name}" aria-pressed="false">♡</button></div>
    <div class="product-info"><div class="product-meta"><span>${product.type}</span><span>${product.image?'CATÁLOGO · PÁG. '+product.page:'A CONFIRMAR'}</span></div><h3>${product.name}</h3><div class="quick-specs"><span><small>POTÊNCIA</small><b>${product.power}</b></span><span><small>AUTONOMIA*</small><b>${product.range}</b></span></div><div class="product-bottom"><div><small>PREÇO NO CATÁLOGO</small><strong>${product.price}</strong></div><button type="button" class="detail-button" aria-label="Ver detalhes de ${product.name}">Ver detalhes ↗</button></div><button type="button" class="compare-check" aria-pressed="false">＋ Comparar</button></div>
  </article>`).join('');

  app.innerHTML = `
    <div class="concept-bar"><span><i></i> CONCEITO VISUAL · NÃO É SITE OFICIAL</span><div class="directions" role="group" aria-label="Escolher direção visual">${directions.map((d,i)=>`<button type="button" data-theme="${i}" aria-pressed="${i===0}">${d}</button>`).join('')}</div></div>
    <div class="concept-note"><strong>PRÉVIA DEMONSTRATIVA</strong><span>${isElite?'Fotos e informações transcritas do catálogo enviado · preço e estoque a confirmar':'Produtos e características são exemplos · conteúdo real a confirmar com a loja'}</span></div>
    <header class="site-header"><a href="#top" class="wordmark">${brand}<sup>®</sup></a><nav aria-label="Navegação"><a href="#modelos">${isElite?'Modelos':'Bicicletas'}</a><a href="#ideia">A ideia</a><a href="#contato">Contato</a></nav><a class="social-link" href="${instagram}" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><button class="menu-button" aria-label="Abrir menu" aria-expanded="false">☰</button></header>
    <main id="top">
      <section class="hero"><div class="hero-copy"><div class="hero-kicker"><span>UMA PÁGINA PRÓPRIA</span><span>${city}</span></div><p class="eyebrow">${isElite?'MOBILIDADE ELÉTRICA':'BICICLETARIA'}</p><h1>${title.replaceAll('\n','<br>')}</h1><p class="hero-intro">${intro}</p><div class="hero-actions"><a href="#modelos" class="button dark">${isElite?'Explorar modelos':'Explorar bicicletas'} <span>↘</span></a><a href="${instagram}" class="button outline" target="_blank" rel="noreferrer">Acessar Instagram <span>↗</span></a></div><div class="hero-caption"><span>✳</span><span>${isElite?'A equipe ajuda a comparar e confirmar cada modelo.':'Instagram e Facebook seguem ligados ao atendimento da loja.'}</span></div></div>
        <div class="hero-scene"><div class="scene-frame"><svg viewBox="0 0 760 550" role="img" aria-label="Ilustração conceitual de uma bicicleta"><defs><linearGradient id="backdrop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--scene-a)"/><stop offset="1" stop-color="var(--scene-b)"/></linearGradient></defs><rect width="760" height="550" fill="url(#backdrop)"/><circle class="sun" cx="574" cy="118" r="55"/><path class="hills" d="M0 373c130-96 222-111 339-36 104-98 216-114 303-55 47-31 83-37 118-28v296H0Z"/><path class="ground" d="M0 453c161-55 397-47 760 17v80H0Z"/><g class="bike"><circle cx="245" cy="363" r="88"/><circle cx="559" cy="363" r="88"/><path d="m245 363 109-170 113 170H245l135-111h113l66 111m-277-170h-69m164 0h45"/><path class="bike-accent" d="m452 244 18-47h55"/></g><text x="43" y="62" class="scene-label">${isElite?'ELITE · 01':'TAUBIKE · 01'}</text><text x="43" y="510" class="scene-sub">${city}</text></svg><span class="scene-index">FIG. 01 · ILUSTRAÇÃO DE CONCEITO</span></div><div class="roundel"><small>${isElite?'CATÁLOGO':'BICICLETAS'}</small><b>${isElite?'ESCOLHA\nCOM CALMA':'NOVOS\nCAMINHOS'}</b><small>CONCEITO · 2026</small></div></div></section>
      <div class="ticker" aria-hidden="true">${isElite?'DESCOBRIR ✳ COMPARAR ✳ CONVERSAR ✳ ':'PEDALAR ✳ DESCOBRIR ✳ EXPLORAR ✳ '.repeat(2)}</div>
      <section class="models" id="modelos"><div class="section-top"><div><p class="eyebrow">${isElite?'A PARTIR DO CATÁLOGO COMPARTILHADO':'UMA IDEIA PARA A TAUBIKE'}</p><h2>${isElite?'Apresentar. Comparar. Perguntar.':'Conhecer melhor cada opção.'}</h2></div><p>${isElite?'Explore modelos do material enviado e prepare uma consulta mais objetiva com a equipe.':'Um espaço para a loja reunir o que oferece e orientar o próximo passo.'}</p></div><div class="factual-note"><span>✳</span><p>${isElite?'Imagens e dados desta seleção foram transcritos do catálogo PDF recebido em 27/10/2026. Preços e condições constam da edição identificada como novembro de 2026; confirme com a equipe antes de divulgar como oferta atual.':'Você confirmou que a Taubike vende bicicletas e informou que hoje usa Instagram e Facebook. A seleção abaixo é apenas demonstrativa, sem modelos ou preços inventados.'}</p></div><div class="catalog-tools"><label class="search"><span aria-hidden="true">⌕</span><input type="search" id="search" placeholder="Buscar por modelo ou família" aria-label="Buscar modelos"><kbd>/</kbd></label><div class="filters" role="group" aria-label="Filtrar por família">${filterButtons}</div><button type="button" class="compare-open" id="compare-open">Comparar <span id="compare-count">0</span></button></div><div class="product-grid" id="product-grid">${cards}</div><p class="fine-print">${isElite?'*Autonomia indicada no catálogo; alcance real varia com condições de uso. Confirme preço, versão, estoque e condições com a loja.':'Os cartões são exemplos de estrutura, não representam modelos reais da Taubike.'}</p></section>
      <section class="story" id="ideia"><div class="story-inner"><div class="story-mark">${isElite?'E':'T'}</div><div class="story-copy"><p class="eyebrow">COMPLEMENTA OS CANAIS ATUAIS</p><h2>${isElite?'A página ajuda na descoberta. A equipe segue junto na decisão.':'Instagram e Facebook continuam fazendo parte da experiência.'}</h2><p>${isElite?'Uma apresentação própria pode organizar os modelos e encaminhar uma consulta contextualizada, preservando o atendimento da equipe.':'A proposta é criar um ponto central para apresentar a loja e conduzir o visitante aos canais que vocês já utilizam.'}</p><a href="${instagram}" target="_blank" rel="noreferrer">Ver Instagram <span>↗</span></a></div><div class="steps"><div><b>01</b><span>Descobrir a loja</span></div><div><b>02</b><span>Explorar opções</span></div><div><b>03</b><span>Continuar a conversa</span></div></div></div></section>
      <section class="contact" id="contato"><div><p class="eyebrow">UM ESPAÇO PRÓPRIO, LIGADO À LOJA</p><h2>O próximo passo fica simples.</h2><p>${isElite?'Escolha opções e fale com a equipe para confirmar os detalhes.':'Conheça a ideia e siga pelo Instagram da Taubike.'}</p></div><div class="contact-card"><span>${city}</span><h3>${brand}</h3><p>${isElite?'Catálogo recebido; confirmar modelos, preços e disponibilidade com a equipe.':'Conceito preparado a partir da confirmação de que a Taubike vende bicicletas.'}</p><a class="button dark" href="${isElite?whatsapp:instagram}" target="_blank" rel="noreferrer">${isElite?'Consultar pelo WhatsApp':'Continuar no Instagram'} <span>↗</span></a><small>${isElite?'Número de WhatsApp publicado no catálogo; envio da mensagem depende da pessoa.':'Perfil informado na conversa.'}</small></div></section>
    </main>
    <footer class="footer"><a class="wordmark" href="#top">${brand}<sup>®</sup></a><span>CONCEITO VISUAL · NÃO OFICIAL</span><a href="${instagram}" target="_blank" rel="noreferrer">Instagram ↗</a></footer>
    <div class="compare-dock" id="compare-dock" hidden><span><b id="dock-count">0</b> selecionados para comparar</span><button type="button" id="dock-view">Ver comparação</button><button type="button" id="dock-clear" aria-label="Limpar seleção">×</button></div>
    <div class="compare-shade" id="compare-shade" hidden></div><aside class="compare-panel" id="compare-panel" aria-label="Comparação de modelos" aria-hidden="true"><div class="panel-head"><div><small>SELEÇÃO DE MODELOS</small><h2>Compare com calma.</h2></div><button type="button" id="panel-close" aria-label="Fechar comparação">×</button></div><div class="compare-content" id="compare-content"></div><div class="panel-bottom"><p>${isElite?'Os dados vieram do catálogo recebido; confirme disponibilidade e condições com a equipe.':'Os exemplos serão substituídos por produtos reais após confirmação da loja.'}</p><a class="button dark" id="selection-contact" href="${contactUrl}" target="_blank" rel="noreferrer">${isElite?'Consultar seleção pelo WhatsApp':'Falar pelo Instagram'} <span>↗</span></a></div></aside>
    <dialog class="detail-dialog" id="detail-dialog"><button class="dialog-close" type="button" aria-label="Fechar detalhes">×</button><div id="dialog-content"></div></dialog>`;

  const themeNames = ['editorial','pulse','essential'];
  const queryTheme = themeNames.indexOf(new URLSearchParams(location.search).get('theme'));
  document.body.dataset.theme = queryTheme < 0 ? (isElite ? '1' : '0') : String(queryTheme);
  document.querySelectorAll('[data-theme]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.theme === document.body.dataset.theme));
    button.addEventListener('click', () => {
      document.body.dataset.theme = button.dataset.theme;
      document.querySelectorAll('[data-theme]').forEach(x => x.setAttribute('aria-pressed', String(x === button)));
    });
  });
  const search = document.querySelector('#search');
  const cardsList = [...document.querySelectorAll('.product-card')];
  let activeFamily = 'all';
  const applyFilters = () => {
    const term = search.value.trim().toLocaleLowerCase('pt-BR');
    cardsList.forEach(card => {
      card.hidden = !(card.dataset.search.includes(term) && (activeFamily === 'all' || card.dataset.family === activeFamily));
    });
  };
  search.addEventListener('input', applyFilters);
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    activeFamily = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    applyFilters();
  }));
  const selected = new Set();
  const compareDock = document.querySelector('#compare-dock');
  const updateSelection = () => {
    const count = selected.size;
    compareDock.hidden = count === 0;
    document.querySelector('#compare-count').textContent = count;
    document.querySelector('#dock-count').textContent = count;
    document.querySelectorAll('.compare-check').forEach(button => {
      const card = button.closest('.product-card');
      const chosen = selected.has(card.dataset.id);
      button.classList.toggle('selected', chosen);
      button.setAttribute('aria-pressed', String(chosen));
      button.textContent = chosen ? '✓ Na comparação' : '＋ Comparar';
    });
    const chosenProducts = products.filter(product => selected.has(product.id));
    document.querySelector('#compare-content').innerHTML = chosenProducts.length ? `<div class="compare-table"><div class="compare-row compare-head-row"><b>MODELO</b>${chosenProducts.map(product=>`<b>${product.name}</b>`).join('')}</div>${[['PREÇO','price'],['POTÊNCIA','power'],['VELOCIDADE INDICADA','speed'],['AUTONOMIA INDICADA','range'],['BATERIA','battery']].map(([label,key])=>`<div class="compare-row"><span>${label}</span>${chosenProducts.map(product=>`<span>${product[key]}</span>`).join('')}</div>`).join('')}</div>` : '<p class="empty-compare">Escolha até três modelos no catálogo para comparar.</p>';
    const message = isElite ? `Olá! Gostaria de tirar uma dúvida sobre ${chosenProducts.map(product=>product.name).join(', ') || 'os modelos do catálogo'}.` : '';
    document.querySelector('#selection-contact').href = isElite ? `${whatsapp}?text=${encodeURIComponent(message)}` : instagram;
  };
  document.querySelectorAll('.compare-check').forEach(button => button.addEventListener('click', () => {
    const id = button.closest('.product-card').dataset.id;
    if (selected.has(id)) selected.delete(id);
    else if (selected.size < 3) selected.add(id);
    else { button.textContent = 'Máx. 3 opções'; window.setTimeout(updateSelection, 900); return; }
    updateSelection();
  }));
  document.querySelectorAll('.favorite').forEach(button => button.addEventListener('click', () => {
    const active = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!active));
    button.textContent = active ? '♡' : '♥';
  }));
  const panel = document.querySelector('#compare-panel');
  const shade = document.querySelector('#compare-shade');
  const setPanel = open => { panel.classList.toggle('open', open); panel.setAttribute('aria-hidden', String(!open)); shade.hidden = !open; if (open) document.querySelector('#panel-close').focus(); else document.querySelector('#compare-open').focus(); };
  document.querySelector('#compare-open').addEventListener('click', () => setPanel(true));
  document.querySelector('#dock-view').addEventListener('click', () => setPanel(true));
  document.querySelector('#panel-close').addEventListener('click', () => setPanel(false));
  shade.addEventListener('click', () => setPanel(false));
  document.querySelector('#dock-clear').addEventListener('click', () => { selected.clear(); updateSelection(); });
  const dialog = document.querySelector('#detail-dialog');
  const dialogContent = document.querySelector('#dialog-content');
  document.querySelectorAll('.detail-button').forEach(button => button.addEventListener('click', () => {
    const product = products.find(item => item.id === button.closest('.product-card').dataset.id);
    const imageMarkup = product.image ? `<img class="dialog-product-image" src="${product.image}" alt="${product.name}, foto do catálogo Elite Mogi">` : `<div class="dialog-illustration">BICICLETA · EXEMPLO VISUAL</div>`;
    dialogContent.innerHTML = `<div class="dialog-layout">${imageMarkup}<div><p class="eyebrow">${product.type}</p><h2>${product.name}</h2><p class="dialog-price">${product.price}<small>${isElite?'valor indicado no catálogo · confirmar':'a confirmar com a loja'}</small></p><div class="dialog-specs"><div><span>Potência</span><b>${product.power}</b></div><div><span>Velocidade indicada</span><b>${product.speed}</b></div><div><span>Autonomia indicada</span><b>${product.range}</b></div><div><span>Bateria</span><b>${product.battery}</b></div></div><p class="dialog-description">${product.details}</p><p class="dialog-source">${isElite?`Fonte: catálogo enviado pela equipe, página ${product.page}. Confirme versão, preço, estoque e condições diretamente com a loja.`:'Exemplo demonstrativo; os dados reais precisam ser confirmados com a Taubike.'}</p><a class="button dark" href="${isElite?`${whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${product.name}.`)}`:instagram}" target="_blank" rel="noreferrer">${isElite?'Perguntar sobre este modelo':'Acessar Instagram'} <span>↗</span></a></div></div>`;
    dialog.showModal();
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
    if (event.key === 'Escape') { document.querySelector('.menu-button').setAttribute('aria-expanded','false'); document.querySelector('.site-header nav').classList.remove('open'); }
  });
  const menu = document.querySelector('.menu-button');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    document.querySelector('.site-header nav').classList.toggle('open', !open);
  });
  updateSelection();
})();
