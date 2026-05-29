/* ============================================
   CUBA NAUTA — Blog / Témoignages
   ============================================ */

const DEMO_POSTS = [
  {
    id: 1,
    title: "15 jours à Cuba : une plongée dans l'âme de La Havane",
    author_name: "Sophie & Marc",
    country: "France",
    circuit_name: "Cuba en Profondeur",
    travel_date: "Mars 2025",
    rating: 5,
    excerpt: "Depuis que nous sommes rentrés, nos amis ne veulent plus nous entendre parler que de Cuba. La Havane nous a envoûtés comme aucune autre ville...",
    content: "",
    category: "Récit de voyage",
    img_bg: "linear-gradient(135deg, #9B3A28 0%, #F4A922 100%)"
  },
  {
    id: 2,
    title: "Trinidad, la ville hors du temps qui m'a volé le cœur",
    author_name: "Julien R.",
    country: "Belgique",
    circuit_name: "Cap sur Trinidad",
    travel_date: "Janvier 2025",
    rating: 5,
    excerpt: "Marcher dans les rues pavées de Trinidad au coucher du soleil, avec en fond la musique qui s'échappe des maisons colorées... c'est une image que je n'oublierai jamais.",
    content: "",
    category: "Coup de cœur",
    img_bg: "linear-gradient(135deg, #1A3D2B 0%, #3BBCBC 100%)"
  },
  {
    id: 3,
    title: "Premier voyage à Cuba : les 10 conseils que j'aurais aimé avoir",
    author_name: "Camille D.",
    country: "Canada",
    circuit_name: "L'Essentiel de Cuba",
    travel_date: "Novembre 2024",
    rating: 4,
    excerpt: "Cuba, ça se prépare différemment que n'importe quelle autre destination. Voici ce que j'ai appris au fil de mes 10 jours sur l'île, avec l'aide précieuse de Cuba Nauta.",
    content: "",
    category: "Conseils",
    img_bg: "linear-gradient(135deg, #2A5A3E 0%, #F4A922 60%, #9B3A28 100%)"
  },
  {
    id: 4,
    title: "La Route Musicale : salsa, son et cigares — un voyage de l'âme",
    author_name: "Élise & Pierre",
    country: "Suisse",
    circuit_name: "Route Musicale",
    travel_date: "Février 2025",
    rating: 5,
    excerpt: "Je pensais aimer la salsa. Mais entendre les musiciens de Santiago jouer dans leur patio, ça m'a appris ce que la musique veut vraiment dire.",
    content: "",
    category: "Récit de voyage",
    img_bg: "linear-gradient(135deg, #9B3A28 0%, #2A5A3E 100%)"
  },
  {
    id: 5,
    title: "Varadero vs Playa Larga : choisir sa plage à Cuba",
    author_name: "Thomas M.",
    country: "France",
    circuit_name: "Cuba sur Mesure",
    travel_date: "Décembre 2024",
    rating: 4,
    excerpt: "Avant de partir, on nous disait 'vas à Varadero'. On a bien fait de suivre les conseils de Cuba Nauta et de choisir Playa Larga...",
    content: "",
    category: "Conseils",
    img_bg: "linear-gradient(135deg, #3BBCBC 0%, #1A3D2B 100%)"
  },
  {
    id: 6,
    title: "Voyage en solo à Cuba : est-ce que c'est raisonnable ?",
    author_name: "Aurélie V.",
    country: "France",
    circuit_name: "Cuba en Profondeur",
    travel_date: "Octobre 2024",
    rating: 5,
    excerpt: "Tout le monde m'avait dit que Cuba en solo c'était compliqué. Avec Cuba Nauta, j'avais un réseau de contacts locaux et je n'ai jamais été seule quand je ne le voulais pas.",
    content: "",
    category: "Témoignage",
    img_bg: "linear-gradient(135deg, #F4A922 0%, #9B3A28 100%)"
  }
];

function renderStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function getInitials(name) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

function buildPostCard(post) {
  return `
    <article class="blog-post-card fade-in">
      <div class="post-img" style="background:${post.img_bg}"></div>
      <div class="post-body">
        <div class="post-header">
          <span class="post-category">${post.category}</span>
          <span class="post-date">${post.travel_date} · ${post.country}</span>
        </div>
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <div class="post-footer">
          <div>
            <div class="testimonial-author" style="padding:0;border:none;">
              <div class="author-avatar">${getInitials(post.author_name)}</div>
              <div>
                <div class="author-name">${post.author_name}</div>
                <div class="author-trip">${post.circuit_name}</div>
              </div>
            </div>
          </div>
          <div style="text-align:right;">
            <div class="post-rating">${renderStars(post.rating)}</div>
            <a href="#" class="read-more">Lire la suite <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </article>`;
}

async function loadPosts() {
  const container = document.getElementById('blog-posts');
  if (!container) return;

  let posts = DEMO_POSTS;

  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) posts = data;
    } catch (e) { /* use demo posts */ }
  }

  container.innerHTML = posts.map(buildPostCard).join('');

  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  });
}

async function submitTestimonial(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const data = Object.fromEntries(new FormData(form));

  btn.disabled = true;
  btn.textContent = 'Envoi…';

  if (window.supabaseClient) {
    try {
      const { error } = await window.supabaseClient
        .from('testimonials')
        .insert([{
          author_name: data.name,
          author_email: data.email || null,
          country: data.country || 'France',
          circuit_name: data.circuit || null,
          travel_date: data.travel_date || null,
          rating: parseInt(data.rating) || 5,
          title: data.title,
          content: data.content,
          approved: false
        }]);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  }

  form.reset();
  btn.disabled = false;
  btn.textContent = 'Partager mon témoignage';
  window.showToast && window.showToast('Merci pour votre témoignage ! Il sera publié après modération.', 'success');
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosts();

  const form = document.getElementById('testimonial-form');
  if (form) form.addEventListener('submit', submitTestimonial);
});
