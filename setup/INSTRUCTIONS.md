# Cuba Nauta — Instructions de mise en ligne

## 1. Personnalisation immédiate

### Informations à remplacer dans tous les fichiers HTML :
- `contact@cubanauta.fr` → votre vraie adresse e-mail
- `+33 (0)1 XX XX XX XX` → votre numéro de téléphone
- `Alexis` → votre prénom (si différent)

### Photos à ajouter dans le dossier `images/` :
- `hero-cuba.jpg` — Photo pour le fond du héro (1920×1080, La Havane recommandée)
- `cuba-street.jpg` — Photo pour la section "Pourquoi nous" (800×1000)
- `founder.jpg` — Votre photo (400×500)

Sans ces images, les sections affichent des dégradés de couleur (fonctionnel mais moins percutant).

## 2. Activation du blog et du forum dynamiques (Supabase)

### Étapes (15 minutes) :

1. Créez un compte gratuit sur https://supabase.com
2. Créez un **Nouveau projet** (choisissez la région Europe/Paris)
3. Dans le panneau **SQL Editor**, cliquez **New Query**
4. Copiez-collez le contenu de `supabase-schema.sql` et cliquez **Run**
5. Dans **Settings > API**, copiez :
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon public key** (longue chaîne de caractères)
6. Ouvrez `js/supabase-client.js` et remplacez :
   ```js
   const SUPABASE_URL  = 'VOTRE_SUPABASE_URL';
   const SUPABASE_KEY  = 'VOTRE_SUPABASE_ANON_KEY';
   ```

**Sans Supabase** : le site fonctionne avec des données d'exemple pré-remplies.

## 3. Modération des témoignages

Dans votre tableau de bord Supabase, rubrique **Table Editor > testimonials** :
- Les nouveaux témoignages arrivent avec `approved = false`
- Passez à `true` ceux que vous souhaitez publier

## 4. Hébergement recommandé

### Netlify (gratuit, recommandé) :
1. Créez un compte sur https://netlify.com
2. Glissez-déposez le dossier du projet dans l'interface
3. URL automatique fournie, nom de domaine personnalisable

### Alternatives :
- **OVH / Hostinger** : hébergement mutualisé, uploader les fichiers en FTP
- **GitHub Pages** : gratuit, bonne option si vous connaissez Git

## 5. Domaine

Si vous prenez `cubanauta.fr` ou `cubanauta.com` :
- Disponible chez OVH, Gandi ou Namecheap (~15€/an)
- À configurer dans les DNS de votre hébergeur après achat

## 6. Pour aller plus loin

- Ajoutez vos vrais circuits dans `circuits.html` avec vos photos
- Personnalisez la section "Notre équipe" dans `a-propos.html`
- Connectez un vrai service d'envoi d'e-mails au formulaire de contact (Netlify Forms, Formspree, ou EmailJS — tous gratuits dans leur tier de base)
- Ajoutez Google Analytics pour suivre vos visiteurs
