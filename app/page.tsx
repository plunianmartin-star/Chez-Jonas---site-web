import Image from 'next/image'
import Script from 'next/script'
import { ResizeObserverErrorSuppressor } from '@/components/resize-observer-error-suppressor'

const tripadvisor = 'https://www.tripadvisor.fr/Restaurant_Review-g1163082-d34336212-Reviews-Chez_Jonas-Ile_aux_Moines_Morbihan_Brittany.html'
const instagram = 'https://www.instagram.com/chez.jonas/'
const facebook = 'https://www.facebook.com/p/Chez-Jonas-61589251843973/'
const phone = 'tel:+33297688293'

const reviews = [
  ['Un accueil chaleureux', 'Un jeune couple attentionné, souriant et passionné. On se sent ici comme à la maison, avec la mer en plus.', '/images/proprietaires.jpeg'],
  ['La vue vaut le voyage', 'Une table face au golfe du Morbihan, des bateaux à l’horizon et le temps qui ralentit enfin.', '/images/vue-interieure.jpeg'],
  ['Un métissage réussi', 'La Bretagne et la Thaïlande se rencontrent dans l’assiette avec justesse, fraîcheur et générosité.', '/images/galette.jpeg'],
]

const faq = [
  ['Faut-il réserver ?', 'La réservation est conseillée, surtout pour profiter des tables face à la mer. Appelez-nous au 02 97 68 82 93.'],
  ['Quels sont vos horaires ?', 'Lundi : 11h45–17h30 et 19h00–21h00. Mardi–jeudi : 11h45–17h30. Vendredi : 11h45–15h00 et 19h00–21h00. Samedi : 11h45–17h00. Dimanche : fermé.'],
  ['Avez-vous une terrasse ?', 'Oui, notre terrasse se trouve directement face au golfe du Morbihan, à quelques pas de l'embarcadère.'],
  ['Les animaux sont-ils acceptés ?', 'Oui, les chiens sont les bienvenus chez Chez Jonas.'],
  ['Le restaurant est-il accessible PMR ?', 'Oui, le restaurant est accessible aux personnes à mobilité réduite.'],
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Restaurant', name: 'Chez Jonas',
    image: '/images/vue-principale.jpeg', telephone: '+33297688293',
    address: { '@type': 'PostalAddress', streetAddress: '271 Rue Benoni Praud', postalCode: '56780', addressLocality: 'Île-aux-Moines', addressCountry: 'FR' },
    servesCuisine: ['Cuisine bretonne', 'Cuisine thaïlandaise'], priceRange: '€€',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '15' },
    openingHours: 'Mo-Sa 12:00-17:00', sameAs: [instagram, facebook, tripadvisor],
  }

  return (
    <main>
      <ResizeObserverErrorSuppressor />
      <Script id="restaurant-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div className="topline"><span>Ouvert 6 jours sur 7 · fermé le dimanche</span><a href={phone}>02 97 68 82 93</a></div>
      <header className="nav-wrap">
        <a className="brand logo-link" href="#accueil" aria-label="Chez Jonas, accueil"><Image src="/logo-chez-jonas.png" alt="Logo Chez Jonas" width={60} height={60} className="logo-img" /></a>
        <nav aria-label="Navigation principale"><a href="#maison">La maison</a><a href="#carte">La carte</a><a href="#avis">Avis</a><a href="#visite">Nous trouver</a></nav>
        <a className="button nav-cta" href={phone}>Appeler pour réserver</a>
      </header>

      <section className="hero shell" id="accueil">
        <div className="hero-copy">
          <p className="kicker">Crêperie · Brasserie · Glacier</p>
          <h1>Le bateau vous dépose, <em>la carte</em> vous embarque.</h1>
          <p className="lead">Une cuisine bretonne et thaïlandaise faite maison, servie face au golfe du Morbihan. Ici, le dépaysement commence avant même l’assiette.</p>
          <div className="actions"><a className="button" href={phone}>Appeler pour réserver</a><a className="text-link" href="/carte-chez-jonas.pdf" target="_blank" rel="noreferrer">Découvrir notre carte ↗</a></div>
          <div className="mini-stats"><div><strong>4,9/5</strong><span>Google · +120 avis</span></div><div><strong>Ouvert</strong><span>6 jours sur 7</span></div></div>
        </div>
        <div className="hero-visual">
          <Image src="/images/vue-principale.jpeg" alt="Terrasse de Chez Jonas face au golfe du Morbihan" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
          <span className="stamp">Vue mer<br />garantie</span>
          <div className="visual-note"><strong>À 2 pas</strong><span>de l’embarcadère</span></div>
        </div>
      </section>

      <section className="paper-section" id="maison"><div className="shell house-grid">
        <div className="house-copy"><p className="kicker">La maison</p><h2>Deux cultures,<br />une même <em>générosité.</em></h2><p className="lead">Chez Jonas, un jeune couple fait dialoguer les classiques bretons et les parfums de Thaïlande. Galettes, crêpes et plats thaïlandais sont préparés maison avec des produits choisis au plus près.</p><p className="lead">Le reste est simple : une équipe chaleureuse, une salle ouverte sur le golfe et une terrasse où l'on aurait volontiers oublié le dernier bateau.</p></div>
        <div className="photo-scatter">
          <figure className="polaroid p1"><Image src="/images/proprietaires.jpeg" alt="Les propriétaires de Chez Jonas devant le restaurant" fill sizes="300px" /><figcaption>Bienvenue chez nous</figcaption></figure>
          <figure className="polaroid p2"><Image src="/images/interieur-premium.jpeg" alt="Salle élégante du restaurant avec baie vitrée et vue sur le golfe" fill sizes="300px" /><figcaption>Une fenêtre sur le golfe</figcaption></figure>
          <figure className="polaroid p3"><Image src="/images/terrasse-exterior.jpeg" alt="Terrasse dressée face aux bateaux avec vue dégagée" fill sizes="260px" /><figcaption>À table, côté mer</figcaption></figure>
        </div>
      </div></section>

      <section className="pillars shell" aria-label="Nos engagements">{['Produits locaux','Fait maison','Cuisine bretonne-thaï','Ouvert 6 jours sur 7'].map((item,i)=><article key={item}><span>0{i+1}</span><h3>{item}</h3><p>{['Le goût du golfe et de ses producteurs.','Chaque assiette passe par notre cuisine.','Deux horizons, une cuisine sans frontières.','Fermés le dimanche, ouverts pour vous le reste de la semaine.'][i]}</p></article>)}</section>

      <section className="menu-section shell" id="carte">
        <div className="menu-copy"><p className="kicker">À la carte</p><h2>Du sarrasin,<br />des épices et <em>du large.</em></h2><p className="lead">Galettes croustillantes, recettes thaïlandaises parfumées et douceurs maison : découvrez ce qui mijote aujourd'hui.</p><a className="button" href="/carte-chez-jonas.pdf" target="_blank" rel="noreferrer">Découvrir notre carte ↗</a></div>
        <div className="dish-grid"><Image src="/images/galette.jpeg" alt="Galette bretonne aux champignons et bacon" width={700} height={700}/><Image src="/images/galette-saumon.jpeg" alt="Galette au saumon fumé et salade" width={550} height={550}/><Image src="/images/curry-massaman.jpeg" alt="Curry Massaman maison accompagné de riz" width={550} height={550}/></div>
      </section>

      <section className="gallery-showcase shell"><div className="showcase-grid"><Image src="/images/terrasse-hangings.jpeg" alt="Terrasse ombragée avec feuillages et vue sur l'eau" width={800} height={600} style={{objectFit:'cover'}} /><Image src="/images/interieur-premium.jpeg" alt="Intérieur élégant avec baie vitrée panoramique sur le golfe" width={800} height={600} style={{objectFit:'cover'}} /></div><p className="gallery-label">Les plus beaux endroits pour savourer</p></section>

      <section className="sourcing"><div className="shell sourcing-grid"><figure><Image src="/images/moules-frites.jpeg" alt="Moules-frites servies face à la mer" fill sizes="(max-width: 900px) 100vw, 48vw" /></figure><div><p className="kicker light">L’île dans l’assiette</p><h2>Du bon, du frais,<br />et surtout <em>du vrai.</em></h2><p>Nous privilégions les produits locaux, les préparations maison et une carte à taille humaine. Une cuisine sincère, sans détour — sauf celui par la Thaïlande.</p><div className="dark-stats"><div><strong>100%</strong><span>fait avec cœur</span></div><div><strong>2</strong><span>cultures réunies</span></div><div><strong>1</strong><span>vue imprenable</span></div></div></div></div></section>

      <section className="reviews shell" id="avis"><p className="kicker">Vos mots doux</p><div className="section-heading"><h2>Ils sont venus,<br />ils ont <em>aimé.</em></h2><p><strong>4,9/5</strong><br />+120 avis Google</p></div><div className="review-grid">{reviews.map(([title,quote,img])=><article key={title}><Image src={img} alt="" width={90} height={90}/><h3>{title}</h3><blockquote>« {quote} »</blockquote><a href={tripadvisor} target="_blank" rel="noreferrer">Voir sur Tripadvisor ↗</a></article>)}</div><div className="actions centered"><a className="button" href={tripadvisor} target="_blank" rel="noreferrer">Lire tous les avis</a><a className="button outline" href={instagram} target="_blank" rel="noreferrer">Instagram</a><a className="button outline" href={facebook} target="_blank" rel="noreferrer">Facebook</a></div><div className="google-reviews"><p className="kicker">Avis Google</p><div className="elfsight-app-e43398a2-62d7-45d0-84a6-3ed76aaf95c9" data-elfsight-app-lazy /></div></section>

      <section className="visit" id="visite"><div className="shell visit-grid"><div><p className="kicker">Cap sur Chez Jonas</p><h2>Venez par la mer.<br />Restez pour <em>la vue.</em></h2><div className="info-list"><div><span>Adresse</span><p>271 Rue Benoni Praud<br />56780 Île-aux-Moines</p></div><div><span>Horaires</span><p>Lundi : 11h45–17h30, 19h00–21h00<br />Mardi–jeudi : 11h45–17h30<br />Vendredi : 11h45–15h00, 19h00–21h00<br />Samedi : 11h45–17h00<br />Dimanche : Fermé</p></div><div><span>Bon à savoir</span><p>Terrasse · PMR · Chiens acceptés<br />Chaises hautes · Cartes bancaires</p></div></div><a className="button" href={phone}>Appeler pour réserver</a></div><iframe title="Carte de Chez Jonas" src="https://www.google.com/maps?q=271+Rue+Benoni+Praud,+56780+Ile-aux-Moines&output=embed" width="100%" height="450" style={{border:0,borderRadius:14}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

      <section className="faq shell"><p className="kicker">Quelques réponses</p><h2>Avant de <em>larguer les amarres.</em></h2><div className="faq-list">{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="social-band"><p className="kicker light">Suivez la marée</p><h2>@chez.jonas</h2><a className="text-link light-link" href={instagram} target="_blank" rel="noreferrer">Nous suivre sur Instagram ↗</a></section>

      <footer><div className="shell footer-grid"><div className="footer-brand"><span className="brand-mark">CJ</span><h3>Chez Jonas</h3><p>Crêperie · Brasserie · Glacier<br />face au golfe du Morbihan.</p></div><div><h4>Navigation</h4><a href="#maison">La maison</a><a href="#carte">La carte</a><a href="#avis">Les avis</a></div><div><h4>Nous trouver</h4><p>271 Rue Benoni Praud<br />56780 Île-aux-Moines</p><a href={phone}>02 97 68 82 93</a></div><div><h4>Réseaux</h4><a href={instagram}>Instagram</a><a href={facebook}>Facebook</a><a href={tripadvisor}>Tripadvisor</a></div></div><div className="footer-bottom shell"><span>© 2026 Chez Jonas</span><span>Fait avec vue sur mer</span></div></footer>
      <div className="mobile-bar"><a href={phone}>Appeler</a><a href="https://maps.google.com/?q=271+Rue+Benoni+Praud,+56780+Ile-aux-Moines" target="_blank" rel="noreferrer">Itinéraire</a></div>
    </main>
  )
}
