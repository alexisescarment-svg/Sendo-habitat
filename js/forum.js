/* ============================================
   CUBA NAUTA — Forum
   ============================================ */

const DEMO_THREADS = [
  {
    id: 1,
    title: 'Peut-on payer par carte bancaire à Cuba ?',
    content: 'Je pars en mars et je voulais savoir si les cartes Visa/Mastercard françaises fonctionnent à Cuba. J\'ai entendu des choses contradictoires. Est-ce que quelqu\'un peut confirmer la situation actuelle ?',
    author_name: 'Claire M.',
    category: 'logistique',
    views: 234,
    created_at: '2025-01-15',
    replies: [
      {
        author_name: 'Équipe Cuba Nauta',
        is_expert: true,
        content: 'Bonne question, et effectivement c\'est une source de confusion. En 2024-2025, les cartes bancaires françaises (Visa, Mastercard, même Amex) ne fonctionnent PAS à Cuba — cela est dû aux restrictions liées à l\'embargo américain qui touche les réseaux de paiement internationaux. Notre conseil : apportez suffisamment d\'espèces en euros. Vous pouvez changer en CUP (peso cubain) à l\'aéroport ou dans les CADECA (bureaux de change officiels). Évitez les dollars américains — ils subissent une taxe supplémentaire de 10% au change. Les euros ou les dollars canadiens sont idéaux.'
      },
      {
        author_name: 'Thomas L.',
        is_expert: false,
        content: 'Confirmé ! Je suis rentré en janvier. J\'avais pris 1500€ en espèces pour 2 personnes sur 2 semaines, c\'était suffisant avec un peu de marge. Les hôtels et casas acceptent le paiement en espèces directement.'
      }
    ]
  },
  {
    id: 2,
    title: 'Meilleure période pour visiter Cuba en famille ?',
    content: 'Nous sommes une famille avec deux enfants (7 et 10 ans). Nous hésitons entre novembre-décembre et mars-avril. Quels sont les avantages et inconvénients de chaque période ?',
    author_name: 'Julien & Céline',
    category: 'avant-le-depart',
    views: 187,
    created_at: '2025-01-20',
    replies: [
      {
        author_name: 'Alexis — Cuba Nauta',
        is_expert: true,
        content: 'Pour une famille avec enfants, je recommande décembre-janvier ou mars-avril. Les deux sont excellents : saison sèche, températures agréables (25-30°C), peu de risques de cyclone (la saison cyclonique se termine fin novembre). Différence : décembre-janvier est légèrement plus frais et plus "animé" culturellement (fêtes, carnavals). Mars-avril est magnifique pour la nature (verdure après les pluies), les plages sont parfaites, et il y a moins de touristes. Si vos enfants sont en vacances scolaires de printemps, mars-avril est idéal.'
      },
      {
        author_name: 'Marie F.',
        is_expert: false,
        content: 'On est allés en famille en mars 2024, c\'était parfait. Pas trop chaud pour les enfants, mer belle, et les sites touristiques étaient moins bondés qu\'en décembre. Je recommande !'
      }
    ]
  },
  {
    id: 3,
    title: 'Vaccins recommandés pour Cuba ?',
    content: 'Mon médecin traitant ne connaît pas très bien Cuba. Quels vaccins sont vraiment nécessaires ou recommandés pour un voyage de 2 semaines ?',
    author_name: 'Patricia H.',
    category: 'sante',
    views: 145,
    created_at: '2025-02-03',
    replies: [
      {
        author_name: 'Équipe Cuba Nauta',
        is_expert: true,
        content: 'Consultez idéalement un centre de vaccination internationale (service de médecine des voyages) plutôt que votre généraliste pour ce type de question spécifique. Cela dit, voici les recommandations générales : les vaccins de base à jour sont indispensables (diphtérie, tétanos, poliomyélite). Hépatite A et B sont fortement recommandées. La fièvre typhoïde peut être conseillée si vous mangez dans des endroits non touristiques. Aucun vaccin n\'est exigé à l\'entrée de Cuba (sauf fièvre jaune si vous venez d\'une zone endémique). Le paludisme n\'est pas présent à Cuba. La dengue existe, donc protégez-vous contre les moustiques (répulsif, vêtements couvrants le soir).'
      }
    ]
  },
  {
    id: 4,
    title: 'Comment fonctionne internet à Cuba ?',
    content: 'Je lis partout que l\'internet est très limité à Cuba. C\'est vrai ? Comment mes enfants ados vont-ils réagir ? Y a-t-il des solutions ?',
    author_name: 'Bernard T.',
    category: 'logistique',
    views: 312,
    created_at: '2025-02-10',
    replies: [
      {
        author_name: 'Équipe Cuba Nauta',
        is_expert: true,
        content: 'Oui, internet à Cuba est limité mais la situation s\'améliore. En 2025, la plupart des casas particulares et hôtels proposent le WiFi — la qualité est variable mais suffisante pour envoyer des messages. Dans les parcs publics des grandes villes, ETECSA (l\'opérateur d\'État) vend des cartes WiFi (~1-2 € l\'heure). Les données mobiles existent maintenant mais nécessitent une SIM cubaine. Notre conseil : voyez ce voyage comme une excellente occasion de se déconnecter ! Mais pour les ados, prévenez-les à l\'avance et fixez des moments "connexion" le soir. La plupart des voyageurs ressortent en disant que ça leur a fait du bien.'
      },
      {
        author_name: 'Sandrine P.',
        is_expert: false,
        content: 'Nos ados de 14 et 16 ans ont d\'abord grognés, puis ont adoré. Sans portable, ils regardaient autour d\'eux, parlaient avec les locaux (même sans parler espagnol — le langage des signes et les sourires fonctionnent !), et ont vécu le voyage vraiment. L\'un d\'eux dit maintenant que c\'est son meilleur souvenir de voyage.'
      }
    ]
  },
  {
    id: 5,
    title: 'Casa particular ou hôtel : quel choix pour un premier voyage ?',
    content: 'Pour un premier voyage à Cuba, hésitation entre dormir en casa particular (chez l\'habitant) et hôtel classique. Quels sont les vrais avantages et inconvénients de chaque option ?',
    author_name: 'Alexandre D.',
    category: 'hebergement',
    views: 198,
    created_at: '2025-02-15',
    replies: [
      {
        author_name: 'Alexis — Cuba Nauta',
        is_expert: true,
        content: 'Pour un premier voyage, je recommande sans hésitation les casas particulares — et c\'est ce que nous proposons par défaut. Voici pourquoi : (1) Immersion authentique : vous vivez chez des familles cubaines, vous partagez leurs espaces, vous entendez leur quotidien. C\'est la vraie Cuba. (2) Le petit-déjeuner cubain en casa est imbattable : fruits frais, jus de goyave, œufs, café fort. (3) Votre famille d\'accueil devient souvent votre meilleure source de conseils locaux. (4) Votre argent va directement à la famille, pas à une chaîne hôtelière. Le seul inconvénient : moins de services qu\'un hôtel (pas de piscine, pas de room service). Mais honnêtement, qui a besoin de ça à Cuba ?' },
      {
        author_name: 'Lucie M.',
        is_expert: false,
        content: 'Je suis entièrement d\'accord. Mes casa-familles sont les meilleurs souvenirs de mon voyage. La dame qui m\'a appris à faire la conga dans son salon à Santiago... Comment oublier ça ?'
      }
    ]
  },
  {
    id: 6,
    title: 'Cuba en solo en tant que femme : c\'est raisonnable ?',
    content: 'Je souhaite partir en solo, je suis une femme de 35 ans. Est-ce que Cuba est une destination sûre ? Y a-t-il des précautions particulières à prendre ?',
    author_name: 'Amélie V.',
    category: 'avant-le-depart',
    views: 267,
    created_at: '2025-03-01',
    replies: [
      {
        author_name: 'Sarah — Cuba Nauta',
        is_expert: true,
        content: 'Cuba est généralement considérée comme une destination safe pour les voyageuses en solo. Le taux de criminalité violente est faible comparé à d\'autres pays d\'Amérique latine. Cela dit, quelques précautions d\'usage : évitez de vous promener seule dans des quartiers isolés la nuit (comme dans n\'importe quelle ville). Méfiez-vous des "jineteros" — des personnes qui se lient facilement à vous pour ensuite vous proposer des services ou vous guider moyennant rémunération. Avec un guide Cuba Nauta, vous avez toujours un point de contact. La plupart de nos voyageuses solo disent avoir été très à l\'aise et décrivent Cuba comme une destination où les Cubains sont extrêmement bienveillants envers les femmes qui voyagent.'
      },
      {
        author_name: 'Caroline J.',
        is_expert: false,
        content: 'J\'y suis allée seule à deux reprises. Jamais eu le moindre problème. Les Cubains sont super attentionnés — parfois trop, dans le sens flirteur — mais jamais agressif ni menaçant. Cuba Nauta m\'a mise en contact avec Yanelis à La Havane et ça m\'a donné une tranquillité d\'esprit immense d\'avoir un contact local.'
      }
    ]
  },
  {
    id: 7,
    title: 'Quel budget pour les pourboires ("propinas") à Cuba ?',
    content: 'J\'ai lu que les pourboires sont très importants à Cuba et font partie du salaire des travailleurs. Quelles sont les normes ? Combien prévoir ?',
    author_name: 'Michel G.',
    category: 'budget',
    views: 134,
    created_at: '2025-03-10',
    replies: [
      {
        author_name: 'Équipe Cuba Nauta',
        is_expert: true,
        content: 'Effectivement, le pourboire (propina) est une partie importante du revenu des travailleurs cubains dans le secteur du tourisme. Voici les normes : restaurant — 10 à 15% de l\'addition est bien vu ; musiciens dans les bars — 1 à 2 CUC/EUR par chanson si vous les avez appréciés ; guide — 10 à 15 EUR par jour par personne est la norme et vraiment très apprécié ; chauffeur de taxi — 1 à 2 EUR par trajet ; femme de chambre en casa — 1 à 2 EUR par nuit. Prévoyez d\'avoir toujours des petites coupures sur vous (euros ou dollars canadiens, convertibles facilement). Votre guide Cuba Nauta vous conseillera sur les moments et montants appropriés au fur et à mesure.'
      }
    ]
  },
  {
    id: 8,
    title: 'Les activités incontournables à ne pas rater à Cuba ?',
    content: 'Premier voyage à Cuba, 12 jours. Quelles sont les activités absolument incontournables selon vous, au-delà des sites touristiques classiques ?',
    author_name: 'Stéphanie R.',
    category: 'activites',
    views: 423,
    created_at: '2025-03-18',
    replies: [
      {
        author_name: 'Miguel — Guide Cuba Nauta',
        is_expert: true,
        content: 'Ma liste des incontournables "hors des sentiers battus" : (1) Aller dans un vrai concert de son cubain dans un patio havanais — pas le show touristique, la vraie musique pour cubains ; (2) Prendre un "almendron" (les vieilles Américaines qui servent de taxis collectifs à La Havane) au moins une fois — inoubliable et économique ; (3) Visiter un tabaquero dans une manufacture ou à Viñales — voir comment est fabriqué un vrai cigare cubain à la main ; (4) Assister au défilé du soir sur le Malecón à La Havane — les Havanais se retrouvent là pour discuter, se draguer, jouer de la musique ; (5) Manger dans un "comedor" local (cantine populaire) — dépayant et délicieux ; (6) Si vous êtes à Trinidad : danser la salsa sur La Escalinata au coucher du soleil.'
      },
      {
        author_name: 'Isabelle K.',
        is_expert: false,
        content: 'J\'ajouterais : une balade à cheval dans la vallée de Viñales au lever du soleil. On s\'était levé à 6h, et c\'était l\'une des plus belles heures de ma vie. La brume sur les mogotes, les coqs qui chantent, le café noir bu chez un paysan... Réservez via votre guide, pas via les agences à l\'entrée de la ville.'
      }
    ]
  }
];

function timeSince(dateStr) {
  const date = new Date(dateStr);
  const now  = new Date();
  const days = Math.floor((now - date) / 86400000);
  if (days < 1)  return 'Aujourd\'hui';
  if (days < 30) return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
  if (days < 365) {
    const m = Math.floor(days / 30);
    return `Il y a ${m} mois`;
  }
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

function buildThreadCard(thread) {
  const card = document.createElement('div');
  card.className = 'thread-card fade-in';
  card.dataset.category = thread.category;

  const repliesHtml = (thread.replies || []).map(r => `
    <div class="reply-item ${r.is_expert ? 'expert-reply' : ''}">
      <div class="reply-header">
        <span class="reply-author">
          ${r.is_expert ? `<span class="expert-badge"><i class="fas fa-star"></i> Expert Cuba Nauta</span>` : ''}
          <strong>${r.author_name}</strong>
        </span>
      </div>
      <div class="reply-content">${r.content}</div>
    </div>
  `).join('');

  const replyCount = (thread.replies || []).length;

  card.innerHTML = `
    <div class="thread-summary">
      <div class="thread-info">
        <span class="thread-category-tag">${thread.category.replace('-', ' ')}</span>
        <button class="thread-title-btn">${thread.title}</button>
        <div class="thread-meta">
          <span><i class="fas fa-user"></i> ${thread.author_name}</span>
          <span><i class="fas fa-clock"></i> ${timeSince(thread.created_at)}</span>
          <span><i class="fas fa-eye"></i> ${thread.views} vues</span>
          <span><i class="fas fa-comment"></i> ${replyCount} réponse${replyCount !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <button class="thread-toggle-btn" aria-label="Ouvrir"><i class="fas fa-chevron-down"></i></button>
    </div>
    <div class="thread-body">
      <div class="thread-question">
        <p>${thread.content}</p>
      </div>
      ${repliesHtml ? `<div class="thread-replies"><h4><i class="fas fa-comments"></i> Réponses</h4>${repliesHtml}</div>` : '<p class="no-replies"><i class="fas fa-info-circle"></i> Pas encore de réponse. Soyez le premier !</p>'}
      <div class="thread-reply-form">
        <h4>Votre réponse</h4>
        <form class="reply-form" data-thread-id="${thread.id}">
          <div class="form-row">
            <input type="text"  name="author_name"  placeholder="Votre prénom *" required>
            <input type="email" name="author_email" placeholder="Votre e-mail (non publié)">
          </div>
          <textarea name="content" rows="4" placeholder="Votre réponse..." required></textarea>
          <button type="submit" class="btn btn-blue">Répondre <i class="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  `;

  // Toggle accordion
  const toggleBtn  = card.querySelector('.thread-toggle-btn');
  const titleBtn   = card.querySelector('.thread-title-btn');
  const body       = card.querySelector('.thread-body');

  function toggleThread() {
    const isOpen = card.classList.toggle('expanded');
    toggleBtn.innerHTML = isOpen
      ? '<i class="fas fa-chevron-up"></i>'
      : '<i class="fas fa-chevron-down"></i>';
  }

  toggleBtn.addEventListener('click', toggleThread);
  titleBtn.addEventListener('click', toggleThread);

  // Reply form
  const replyForm = card.querySelector('.reply-form');
  replyForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = replyForm.querySelector('[type="submit"]');
    btn.disabled = true;

    const replyData = {
      thread_id:    thread.id,
      author_name:  replyForm.author_name.value,
      author_email: replyForm.author_email.value,
      content:      replyForm.content.value,
      is_expert:    false
    };

    if (window.supabaseClient) {
      try {
        await window.supabaseClient.from('forum_replies').insert([replyData]);
      } catch (_) {}
    }

    // Add reply to DOM immediately
    const repliesContainer = card.querySelector('.thread-replies') || (() => {
      const div = document.createElement('div');
      div.className = 'thread-replies';
      div.innerHTML = '<h4><i class="fas fa-comments"></i> Réponses</h4>';
      card.querySelector('.no-replies')?.remove();
      replyForm.parentElement.before(div);
      return div;
    })();

    const newReply = document.createElement('div');
    newReply.className = 'reply-item';
    newReply.innerHTML = `
      <div class="reply-header"><span class="reply-author"><strong>${replyData.author_name}</strong></span></div>
      <div class="reply-content">${replyData.content}</div>
    `;
    repliesContainer.appendChild(newReply);

    window.showToast('Votre réponse a été publiée !', 'success');
    replyForm.reset();
    btn.disabled = false;
  });

  return card;
}

async function loadThreads() {
  const container = document.getElementById('threadsContainer');
  if (!container) return;

  let threads = [];

  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('forum_threads')
        .select('*, forum_replies(*)')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        threads = data.map(t => ({ ...t, replies: t.forum_replies || [] }));
      }
    } catch (_) {}
  }

  if (!threads.length) threads = DEMO_THREADS;

  container.innerHTML = '';
  threads.forEach(t => container.appendChild(buildThreadCard(t)));

  document.querySelectorAll('.thread-card.fade-in').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    obs.observe(el);
  });
}

async function submitThread(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Publication...';

  const data = {
    title:        form.title.value,
    content:      form.content.value,
    author_name:  form.author_name.value,
    author_email: form.author_email.value,
    category:     form.category.value,
    views:        0
  };

  if (window.supabaseClient) {
    try {
      await window.supabaseClient.from('forum_threads').insert([data]);
    } catch (_) {}
  }

  window.showToast('Votre question a été publiée ! Notre équipe vous répond sous 24h.', 'success');
  form.reset();
  btn.disabled = false;
  btn.innerHTML = 'Publier ma question <i class="fas fa-paper-plane"></i>';

  // Prepend new thread to list
  const container = document.getElementById('threadsContainer');
  if (container) {
    const newThread = { ...data, id: Date.now(), created_at: new Date().toISOString(), replies: [] };
    container.insertBefore(buildThreadCard(newThread), container.firstChild);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadThreads();
  const form = document.getElementById('forumForm');
  if (form) form.addEventListener('submit', submitThread);
});
