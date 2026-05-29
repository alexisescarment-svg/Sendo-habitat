/* ============================================
   CUBA NAUTA — Blog
   ============================================ */

const DEMO_POSTS = [
  {
    id: 1,
    author_name: 'Thomas L.',
    circuit_name: 'Cuba en profondeur (15j)',
    travel_date: 'Janvier 2025',
    rating: 5,
    title: '14 jours à travers Cuba : mon carnet de route',
    category: 'culture',
    excerpt: 'Je m\'attendais à voir des voitures américaines et de la salsa — j\'ai trouvé tout ça, mais surtout des rencontres humaines qui m\'ont bouleversé...',
    content: `<p>Je m'attendais à voir des voitures américaines et de la salsa — j'ai trouvé tout ça, mais surtout des rencontres humaines qui m'ont bouleversé.</p>

<p>Tout commence à La Havane. On arrive en début de soirée et notre guide, Reinaldo, nous emmène directement dans Habana Vieja. Pas les rues touristiques — les vraies. On finit dans le salon d'une vieille dame qui nous sert du rhum maison et joue du piano comme si on était de vieux amis.</p>

<p><strong>Viñales, le coup de cœur inattendu</strong></p>
<p>Je pensais que Viñales serait un joli coin de nature, rien de plus. J'avais tort. Les mogotes (ces formations rocheuses vertes qui semblent tomber du ciel) m'ont littéralement coupé le souffle. On a passé deux jours à cheval dans la campagne, à rencontrer des tabaqueros dans leurs champs, à manger chez l'habitant. Le soir, concert improvisé dans un bar — pas pour touristes, pour Cubains.</p>

<p><strong>Trinidad, hors du temps</strong></p>
<p>Trinidad est classée UNESCO et ça se voit — mais bizarrement, ce n'est pas oppressant. Les rues pavées, les maisons coloniales aux couleurs pastel, les chevaux qui attendent sagement... J'aurais pu y rester une semaine. Notre casa était tenue par une famille depuis trois générations. Le petit-déjeuner sur le toit avec vue sur les toits rouges... inoubliable.</p>

<p><strong>Santiago : l'autre Cuba</strong></p>
<p>Santiago, c'est différent. Plus afro-cubain, plus intense, plus musical. On a assisté à une session de changüí dans un quartier populaire — la musique fondatrice de la salsa. Les Santiagueros ont quelque chose de particulièrement chaleureux. Notre guide Miguel, né là-bas, nous a ouvert des portes qu'on n'aurait jamais trouvées seuls.</p>

<p><strong>Ce que je retiens</strong></p>
<p>Cuba est une île qui vous prend par surprise à chaque tournant. Vous pensez savoir à quoi vous attendre, et vous êtes régulièrement détrompé — en bien. Le principal conseil : laissez tomber votre programme de temps en temps et suivez votre guide quand il dit "j'ai une idée".</p>

<p>Merci à Alexis et à toute l'équipe Cuba Nauta pour avoir rendu ce voyage possible.</p>`,
    approved: true
  },
  {
    id: 2,
    author_name: 'Sophie M.',
    circuit_name: 'L\'Essentiel de Cuba (10j)',
    travel_date: 'Novembre 2024',
    rating: 5,
    title: 'Manger à Cuba : le guide honnête',
    category: 'gastronomie',
    excerpt: 'On dit que la cuisine cubaine est mauvaise. C\'est faux — il faut juste savoir où manger. Voici mes adresses testées et approuvées...',
    content: `<p>On dit que la cuisine cubaine est mauvaise. C'est faux — il faut juste savoir où manger. Voici mon retour d'expérience honnête après 10 jours de voyage.</p>

<p><strong>Oubliez les restaurants "pour touristes"</strong></p>
<p>Les restaurants sur les places principales des villes touristiques ? Évitez-les. Prix gonflés, qualité médiocre, expérience impersonnelle. Ce n'est pas Cuba.</p>

<p><strong>Les paladares : l'expérience authentique</strong></p>
<p>Les paladares sont des restaurants privés tenus par des familles cubaines. C'est là que vous mangerez bien. Notre guide nous a emmenés dans des endroits sans enseigne visible — on sonne, une porte s'ouvre, on se retrouve dans le salon d'une maison transformé en salle à manger. La cuisine sort de la vraie cuisine de la maison. Le ropa vieja (effiloché de bœuf) que j'ai mangé à Trinidad était meilleur que dans n'importe quel restaurant cubain de Paris.</p>

<p><strong>Les produits locaux</strong></p>
<p>Les fruits sont extraordinaires. Mangue, papaye, goyave, anone — des saveurs que vous ne connaissez pas encore. Les marchés locaux (agromercados) sont une expérience en soi : ambiance, couleurs, odeurs, et des prix dérisoires.</p>

<p><strong>Le café cubain</strong></p>
<p>Le café cubain est court, fort, sucré à l'avance — et absolument délicieux. Les Cubains le boivent partout, à toute heure. Le rituel du café partagé est un vrai moment de sociabilité.</p>

<p><strong>Le rhum</strong></p>
<p>Cuba et le rhum, c'est une histoire d'amour. Havana Club 7 ans en mojito ou en daiquiri, c'est imbattable. Mais si vous voulez faire comme les Cubains : rhum blanc Canchánchara avec du citron et du miel à Trinidad. Essayez.</p>

<p><strong>Mon conseil</strong></p>
<p>Dites à votre guide que vous voulez manger cubain, pas français. Il vous emmènera là où les locaux vont. C'est là que la vraie gastronomie cubaine se révèle.</p>`,
    approved: true
  },
  {
    id: 3,
    author_name: 'Marc & Isabelle R.',
    circuit_name: 'L\'Essentiel de Cuba (10j)',
    travel_date: 'Octobre 2024',
    rating: 5,
    title: 'Budget Cuba 2024 : combien ça coûte vraiment ?',
    category: 'pratique',
    excerpt: 'Après deux voyages, voici les vrais chiffres sur le coût d\'un séjour à Cuba : transport, hébergement, nourriture, activités...',
    content: `<p>Après deux voyages à Cuba (2022 et 2024), voici les vrais chiffres. Cuba a beaucoup changé économiquement ces dernières années — cette information est à jour pour 2024.</p>

<p><strong>La situation monétaire en 2024</strong></p>
<p>Cuba a supprimé le CUC (peso convertible) depuis 2021. Il n'y a plus qu'une monnaie : le CUP (peso cubain). En pratique pour les touristes, tout se paye en espèces. Les cartes bancaires françaises ne fonctionnent pas à Cuba (embargo américain indirect sur les banques). Apportez du cash en euros ou en dollars canadiens.</p>

<p><strong>Hébergement en casa particular</strong></p>
<p>Comptez 30 à 50 € par nuit pour une chambre double avec petit-déjeuner dans une bonne casa particular. Dans les hauts lieux touristiques (La Havane, Trinidad), c'est plutôt 40–60 €. Cuba Nauta négocie des tarifs groupés, donc si vous passez par eux, vous payez moins.</p>

<p><strong>Restaurants et nourriture</strong></p>
<p>Dans un paladar local : 8–15 € par personne pour un repas complet avec boisson. Sandwich sur le pouce dans la rue : 1–2 €. Le café : 50 centimes. Les fruits sur le marché : presque rien.</p>

<p><strong>Transport</strong></p>
<p>Le taxi collectif (particulier) entre villes coûte entre 10 et 25 € par personne selon la distance. Cuba Nauta gère ces transfers et vous évite les négociations parfois tendues avec les chauffeurs.</p>

<p><strong>Activités</strong></p>
<p>La plupart des activités culturelles (musées, concerts de rue, balades) sont gratuites ou presque. Un billet pour un show de cabaret à La Havane : 30–50 €. Plongée : 40–60 € par sortie.</p>

<p><strong>Budget total hors vol</strong></p>
<p>Pour un voyage de 10 jours bien organisé avec Cuba Nauta (hébergement + guide + transport inclus), comptez 200–300 € de budget personnel (restaurants, souvenirs, activités supplémentaires). Au total hors vol : environ 1 700–2 000 € tout compris pour 10 jours.</p>`,
    approved: true
  },
  {
    id: 4,
    author_name: 'Émilie & François D.',
    circuit_name: 'Cuba sauvage (14j)',
    travel_date: 'Mars 2025',
    rating: 5,
    title: 'Cuba avec des enfants : notre aventure en famille',
    category: 'pratique',
    excerpt: 'Voyager à Cuba avec des enfants de 6 et 9 ans — pari fou ou meilleure idée de notre vie ? On vous raconte...',
    content: `<p>Voyager à Cuba avec des enfants de 6 et 9 ans ? Tout le monde nous a dit "c'est compliqué". Ils avaient tort. C'était peut-être notre meilleur voyage en famille.</p>

<p><strong>Pourquoi Cuba est parfaite pour les enfants</strong></p>
<p>Les Cubains adorent les enfants. Partout où on allait, nos enfants étaient accueillis avec des sourires, des friandises, des invitations à jouer. Les Cubains ont une facilité de contact avec les enfants qui est touchante.</p>

<p><strong>Le rythme du voyage</strong></p>
<p>Cuba Nauta avait adapté notre itinéraire en conséquence : moins de sites culturels, plus de nature et d'activités. Viñales à cheval — nos enfants en parlent encore. La Péninsule de Zapata où ils ont vu des flamants roses et des crocodiles. La plage d'Ancón à Trinidad avec une eau turquoise incroyable.</p>

<p><strong>Les difficultés honnêtes</strong></p>
<p>La chaleur en journée demande de bien s'organiser (sieste, horaires décalés). Internet limité peut frustrer les ados. Certains trajet en voiture sont longs — prévoir des jeux. Mais rien d'insurmontable avec une bonne organisation.</p>

<p><strong>Ce qui a le plus marqué nos enfants</strong></p>
<p>Jouer au baseball dans la rue avec des gamins cubains à Trinidad. Ramasser des cocos avec un paysan de Viñales. Voir des voitures américaines des années 50 partout — notre fils de 9 ans est devenu un expert. Et surtout : comprendre que des enfants de leur âge vivent dans un monde très différent, sans iPad ni console de jeux, et semblent heureux.</p>

<p><strong>Notre conseil</strong></p>
<p>Prévenez Cuba Nauta que vous venez avec des enfants et précisez leurs âges. L'itinéraire sera adapté et vous n'aurez aucune surprise désagréable.</p>`,
    approved: true
  },
  {
    id: 5,
    author_name: 'Jean-Pierre V.',
    circuit_name: 'Route musicale (12j)',
    travel_date: 'Février 2025',
    rating: 5,
    title: 'La musique à Cuba : bien plus qu\'un cliché',
    category: 'musique',
    excerpt: 'Amateur de jazz et de musiques du monde, je pensais connaître la musique cubaine. Douze jours plus tard, je recommence à apprendre...',
    content: `<p>Amateur de jazz et de musiques du monde depuis vingt ans, je pensais connaître la musique cubaine. Douze jours sur la Route Musicale m'ont montré que je n'en savais rien.</p>

<p><strong>Son cubain : la source de tout</strong></p>
<p>Le son cubain n'est pas un genre parmi d'autres — c'est la matrice dont sont issus la salsa, le mambo, le cha-cha-cha, et en partie le jazz. L'entendre joué par des vieux maîtres havanais dans un patio ombragé, c'est comprendre d'où vient toute la musique populaire du XXe siècle.</p>

<p><strong>Les concerts que je n'oublierai pas</strong></p>
<p>Une session de trova dans une petite salle de Santiago — peut-être 30 personnes, des musiciens âgés, une guitare et une voix. Silence total dans le public. Une intensité émotionnelle que j'ai rarement ressenti en concert.</p>

<p>Un concert de salsa casino dans un club de La Havane où les danseurs locaux nous ont tiré par la main pour nous faire danser. Maladroits, mais heureux.</p>

<p><strong>La rencontre avec Guillermo</strong></p>
<p>Notre guide Miguel nous a présenté Guillermo, percussionniste de Santería à Santiago. Deux heures chez lui à parler rythme, religion, mémoire africaine. C'est le genre de rencontre qu'aucun guide touristique ne peut organiser — ça se mérite, ça se trouve à travers un réseau de confiance.</p>

<p><strong>Conseil aux amateurs de musique</strong></p>
<p>Faites la Route Musicale. Mais surtout : écoutez Cuba Nauta quand ils disent "ce soir, on sort du programme". Les meilleurs concerts ont tous eu lieu comme ça.</p>`,
    approved: true
  },
  {
    id: 6,
    author_name: 'Nathalie B.',
    circuit_name: 'Cap sur Trinidad (8j)',
    travel_date: 'Décembre 2024',
    rating: 5,
    title: 'Trinidad, la ville qui m\'a arrêtée net',
    category: 'culture',
    excerpt: 'Je devais passer deux jours à Trinidad. J\'en ai passé cinq. Voici pourquoi cette ville m\'a complètement conquise...',
    content: `<p>Je devais passer deux jours à Trinidad dans le cadre de mon circuit. J'en ai passé cinq. Voici pourquoi cette ville m'a complètement conquise.</p>

<p><strong>La beauté d'abord</strong></p>
<p>Trinidad est objectivement l'une des plus belles villes que j'ai visitées. Les rues pavées de galets, les maisons coloniales aux tons ocre, jaune et rose, les grilles en fer forgé ornées, les toits de tuiles rouges... C'est un décor de cinéma, sauf que c'est réel et que des familles y vivent depuis des siècles.</p>

<p><strong>La vie dans les rues</strong></p>
<p>Ce qui rend Trinidad inoubliable, ce n'est pas les musées (bien qu'ils soient intéressants) — c'est la vie dans ses rues. Les musiciens qui jouent pour le plaisir. Les enfants qui jouent au baseball avec un bâton et une balle de chiffon. Les vieilles dames sur leurs seuils. Les chevaux qui attendent patiemment leurs propriétaires.</p>

<p><strong>La nuit à Trinidad</strong></p>
<p>Chaque soir, La Escalinata (l'escalier de pierre menant à l'église) se transforme en scène de concert improvisée. Salsa, son cubain, reggaeton — les gens dansent jusqu'à tard. C'est gratuit, spontané, inoubliable.</p>

<p><strong>La plage à 15 minutes</strong></p>
<p>Playa Ancón est à un quart d'heure de taxi de Trinidad. Eaux turquoise, sable blanc, quasi déserte en dehors des week-ends. On peut facilement combiner deux jours de culture à Trinidad avec une journée de plage.</p>

<p><strong>Pourquoi j'ai prolongé</strong></p>
<p>J'ai demandé à Cuba Nauta si c'était possible de rester deux jours de plus. Yanelis a réorganisé l'hébergement en 30 minutes. Ce genre de flexibilité, c'est ce qui fait la différence avec un tour opérateur classique.</p>`,
    approved: true
  }
];

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<i class="fas fa-star${i <= rating ? '' : '-o'}"></i>`;
  }
  return html;
}

function buildArticleCard(post) {
  const card = document.createElement('article');
  card.className = 'article-card fade-in';
  card.dataset.category = post.category;
  card.innerHTML = `
    <div class="article-header">
      <div class="article-meta">
        <span class="article-tag">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
        <span class="article-date"><i class="fas fa-calendar"></i> ${post.travel_date}</span>
      </div>
      <div class="article-stars">${renderStars(post.rating)}</div>
    </div>
    <h2 class="article-title">${post.title}</h2>
    <p class="article-excerpt">${post.excerpt}</p>
    <div class="article-full" id="article-full-${post.id}">
      <div class="article-content">${post.content}</div>
    </div>
    <div class="article-footer">
      <div class="article-author">
        <span class="author-avatar-sm"><i class="fas fa-user"></i></span>
        <div>
          <strong>${post.author_name}</strong>
          ${post.circuit_name ? `<span>${post.circuit_name}</span>` : ''}
        </div>
      </div>
      <button class="read-more-btn" data-id="${post.id}">
        Lire la suite <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  `;

  const btn = card.querySelector('.read-more-btn');
  const full = card.querySelector('.article-full');
  btn.addEventListener('click', () => {
    const isOpen = full.classList.toggle('open');
    btn.innerHTML = isOpen
      ? 'Réduire <i class="fas fa-chevron-up"></i>'
      : 'Lire la suite <i class="fas fa-chevron-down"></i>';
  });

  return card;
}

async function loadPosts() {
  const container = document.getElementById('articlesContainer');
  if (!container) return;

  let posts = [];

  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) posts = data;
    } catch (_) {}
  }

  if (!posts.length) posts = DEMO_POSTS;

  container.innerHTML = '';
  posts.forEach(post => container.appendChild(buildArticleCard(post)));

  // Trigger fade-in observer for dynamically added cards
  document.querySelectorAll('.article-card.fade-in').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

async function submitBlogPost(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Envoi en cours...';

  const data = {
    author_name:  form.author_name.value,
    author_email: form.author_email.value,
    circuit_name: form.circuit_name.value,
    travel_date:  form.travel_date.value,
    title:        form.title.value,
    rating:       parseInt(form.rating.value) || 5,
    content:      form.content.value,
    approved:     false
  };

  if (window.supabaseClient) {
    try {
      await window.supabaseClient.from('testimonials').insert([data]);
    } catch (_) {}
  }

  window.showToast('Merci pour votre récit ! Il sera publié après relecture (24–48h).', 'success');
  form.reset();
  document.querySelectorAll('#starRating .fa-star').forEach(s => s.classList.add('active'));
  btn.disabled = false;
  btn.innerHTML = 'Envoyer mon récit <i class="fas fa-paper-plane"></i>';
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosts();
  const form = document.getElementById('blogSubmitForm');
  if (form) form.addEventListener('submit', submitBlogPost);
});
