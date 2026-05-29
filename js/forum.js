/* ============================================
   CUBA NAUTA — Forum
   ============================================ */

const CATEGORIES = [
  { id: 'avant-depart',  label: 'Avant le départ',    icon: 'fa-solid fa-plane-departure', cls: 'cat-avant' },
  { id: 'logistique',    label: 'Logistique & Transport', icon: 'fa-solid fa-car',          cls: 'cat-logis' },
  { id: 'hebergement',   label: 'Hébergement',         icon: 'fa-solid fa-house',           cls: 'cat-heberg' },
  { id: 'sante',         label: 'Santé & Sécurité',    icon: 'fa-solid fa-kit-medical',     cls: 'cat-sante' },
  { id: 'budget',        label: 'Budget & Argent',      icon: 'fa-solid fa-coins',           cls: 'cat-avant' },
  { id: 'activites',     label: 'Activités & Sorties',  icon: 'fa-solid fa-music',           cls: 'cat-logis' },
];

const DEMO_THREADS = [
  {
    id: 1,
    title: "Quelle carte SIM acheter à Cuba en 2025 ?",
    content: "J'entends des choses contradictoires sur internet. Est-ce qu'on peut vraiment acheter une SIM cubaine facilement à l'aéroport ?",
    author_name: "Marie L.",
    category: "avant-depart",
    views: 284,
    replies: 7,
    solved: true,
    created_at: "2025-04-12"
  },
  {
    id: 2,
    title: "Combien d'argent liquide prévoir pour 2 semaines ?",
    content: "On part en couple pour 15 jours. Budget hébergement déjà payé. Combien de CUP / Euros emporter ?",
    author_name: "Jean-Luc B.",
    category: "budget",
    views: 412,
    replies: 12,
    solved: true,
    created_at: "2025-03-28"
  },
  {
    id: 3,
    title: "Location de voiture possible sans carte de crédit internationale ?",
    content: "Je n'ai qu'une Visa Electron (débit). Les loueurs acceptent-ils ça ou faut-il absolument une carte crédit ?",
    author_name: "Nathalie C.",
    category: "logistique",
    views: 178,
    replies: 4,
    solved: false,
    created_at: "2025-05-01"
  },
  {
    id: 4,
    title: "Faut-il prendre une assurance voyage spéciale pour Cuba ?",
    content: "L'assurance de ma carte bancaire suffit-elle ou Cuba exige-t-elle une assurance spécifique à l'entrée ?",
    author_name: "Thomas R.",
    category: "sante",
    views: 335,
    replies: 8,
    solved: true,
    created_at: "2025-02-15"
  },
  {
    id: 5,
    title: "Casa particular vs hôtel : votre avis après expérience ?",
    content: "On hésite vraiment. Les casas particulares qu'on voit sur les sites Cuba Nauta ont l'air top, mais on est habitués aux hôtels...",
    author_name: "Anne & Paul",
    category: "hebergement",
    views: 521,
    replies: 19,
    solved: true,
    created_at: "2025-01-20"
  },
  {
    id: 6,
    title: "Meilleur moment pour assister à une soirée salsa à La Havane ?",
    content: "On arrive un jeudi soir. Est-ce qu'il y a des bons plans salsa en semaine ou il faut attendre le week-end ?",
    author_name: "Isabelle M.",
    category: "activites",
    views: 265,
    replies: 6,
    solved: false,
    created_at: "2025-05-10"
  },
  {
    id: 7,
    title: "Visiter Cuba avec un enfant de 7 ans : conseils ?",
    content: "Mon fils de 7 ans est curieux mais fatigable. Quelles sont vos recommandations pour adapter l'itinéraire ?",
    author_name: "Famille Dubois",
    category: "avant-depart",
    views: 198,
    replies: 11,
    solved: true,
    created_at: "2025-04-05"
  },
  {
    id: 8,
    title: "La route de Trinidad depuis La Havane en bus ou taxi partagé ?",
    content: "Le bus Viazul m'a l'air bien mais les horaires ne cadrent pas. Quelqu'un a testé le taxi collectif ?",
    author_name: "Renaud F.",
    category: "logistique",
    views: 153,
    replies: 5,
    solved: false,
    created_at: "2025-05-18"
  }
];

function getCatConfig(catId) {
  return CATEGORIES.find(c => c.id === catId) || { icon: 'fa-solid fa-circle-question', cls: 'cat-avant', label: catId };
}

function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function buildThreadCard(thread) {
  const cat = getCatConfig(thread.category);
  return `
    <div class="thread-card fade-in" data-cat="${thread.category}" data-id="${thread.id}">
      <div class="thread-icon ${cat.cls}">
        <i class="${cat.icon}"></i>
      </div>
      <div class="thread-content">
        <a href="forum-thread.html?id=${thread.id}" class="thread-title-link">${thread.title}</a>
        <div class="thread-excerpt">${thread.content}</div>
        <div class="thread-meta" style="margin-top:6px;">
          Par <strong>${thread.author_name}</strong> · ${formatDate(thread.created_at)}
          <span class="tag" style="margin-left:8px;">${cat.label}</span>
        </div>
      </div>
      <div class="thread-aside">
        <div class="thread-replies">
          <strong>${thread.replies}</strong>
          réponse${thread.replies > 1 ? 's' : ''}
        </div>
        ${thread.solved
          ? '<span class="thread-solved"><i class="fa-solid fa-circle-check"></i> Résolu</span>'
          : '<span class="thread-unsolved">En attente</span>'
        }
        <div style="font-size:.72rem;color:var(--text-light);margin-top:4px;">${thread.views} vues</div>
      </div>
    </div>`;
}

function buildCategoryList(threads) {
  const countEl = document.getElementById('category-list');
  if (!countEl) return;
  const counts = {};
  threads.forEach(t => { counts[t.category] = (counts[t.category] || 0) + 1; });
  const total = threads.length;
  countEl.innerHTML = `
    <button class="cat-btn active" data-cat="all">
      <span><i class="fa-solid fa-border-all" style="margin-right:8px;"></i>Toutes les questions</span>
      <span class="cat-count">${total}</span>
    </button>
    ${CATEGORIES.map(c => `
      <button class="cat-btn" data-cat="${c.id}">
        <span><i class="${c.icon}" style="margin-right:8px;"></i>${c.label}</span>
        <span class="cat-count">${counts[c.id] || 0}</span>
      </button>
    `).join('')}
  `;
  countEl.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      countEl.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.thread-card').forEach(card => {
        card.style.display = (!cat || cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

async function loadThreads() {
  const container = document.getElementById('thread-list');
  if (!container) return;

  let threads = DEMO_THREADS;

  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('forum_threads')
        .select('*, forum_replies(count)')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        threads = data.map(t => ({ ...t, replies: t.forum_replies?.[0]?.count || 0 }));
      }
    } catch (e) { /* use demo */ }
  }

  buildCategoryList(threads);
  container.innerHTML = threads.map(buildThreadCard).join('');

  setTimeout(() => {
    container.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  }, 100);
}

async function submitThread(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const data = Object.fromEntries(new FormData(form));

  if (!data.title?.trim() || !data.content?.trim() || !data.author_name?.trim()) {
    window.showToast && window.showToast('Veuillez remplir tous les champs obligatoires.', 'error');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Publication…';

  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient
        .from('forum_threads')
        .insert([{
          title: data.title,
          content: data.content,
          author_name: data.author_name,
          author_email: data.email || null,
          category: data.category || 'avant-depart'
        }]);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  }

  form.reset();
  btn.disabled = false;
  btn.textContent = 'Poser ma question';
  window.showToast && window.showToast('Votre question a été publiée ! Un expert Cuba Nauta vous répondra bientôt.', 'success');

  const newThread = {
    id: Date.now(),
    title: data.title,
    content: data.content,
    author_name: data.author_name,
    category: data.category || 'avant-depart',
    views: 1,
    replies: 0,
    solved: false,
    created_at: new Date().toISOString()
  };
  const container = document.getElementById('thread-list');
  if (container) {
    container.insertAdjacentHTML('afterbegin', buildThreadCard(newThread));
    container.querySelector('.thread-card').classList.add('visible');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadThreads();
  const form = document.getElementById('new-thread-form');
  if (form) form.addEventListener('submit', submitThread);
});
