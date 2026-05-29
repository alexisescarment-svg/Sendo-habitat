-- ============================================
-- CUBA NAUTA — Schéma Supabase
-- Copiez-collez ce code dans SQL Editor > New Query
-- ============================================

-- Table : témoignages / blog
CREATE TABLE testimonials (
  id            uuid    DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name   text    NOT NULL,
  author_email  text,
  country       text    DEFAULT 'France',
  circuit_name  text,
  travel_date   text,
  rating        int     CHECK (rating >= 1 AND rating <= 5),
  title         text    NOT NULL,
  content       text    NOT NULL,
  photo_url     text,
  approved      boolean DEFAULT false,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture témoignages approuvés"
  ON testimonials FOR SELECT
  USING (approved = true);

CREATE POLICY "Soumission témoignage"
  ON testimonials FOR INSERT
  WITH CHECK (true);

-- Table : fils de discussion du forum
CREATE TABLE forum_threads (
  id            uuid    DEFAULT gen_random_uuid() PRIMARY KEY,
  title         text    NOT NULL,
  content       text    NOT NULL,
  author_name   text    NOT NULL,
  author_email  text,
  category      text    NOT NULL,
  views         int     DEFAULT 0,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE forum_threads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture threads forum"
  ON forum_threads FOR SELECT USING (true);

CREATE POLICY "Création thread forum"
  ON forum_threads FOR INSERT WITH CHECK (true);

-- Table : réponses du forum
CREATE TABLE forum_replies (
  id            uuid    DEFAULT gen_random_uuid() PRIMARY KEY,
  thread_id     uuid    REFERENCES forum_threads(id) ON DELETE CASCADE,
  content       text    NOT NULL,
  author_name   text    NOT NULL,
  author_email  text,
  is_expert     boolean DEFAULT false,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture réponses forum"
  ON forum_replies FOR SELECT USING (true);

CREATE POLICY "Création réponse forum"
  ON forum_replies FOR INSERT WITH CHECK (true);

-- Index pour les performances
CREATE INDEX idx_testimonials_approved ON testimonials(approved, created_at DESC);
CREATE INDEX idx_forum_threads_cat ON forum_threads(category, created_at DESC);
CREATE INDEX idx_forum_replies_thread ON forum_replies(thread_id, created_at ASC);
