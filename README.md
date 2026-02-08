# Coinsplace - Cryptocurrency Marketplace

Une application React moderne pour explorer et analyser les données des cryptomonnaies en temps réel.

## Fonctionnalités

- 📊 **Liste des Top 10 Cryptomonnaies** - Affichage du classement, nom, prix, et variation 24h
- 🔍 **Recherche en temps réel** - Filtrage rapide par nom ou symbole
- 💱 **Conversion de devises** - Support USD, EUR, INR
- 📈 **Graphiques historiques** - Visualisation des prix sur 10 jours
- 📱 **Responsive Design** - Mobile, tablet, et desktop optimisé
- ⚡ **Performance** - Interface rapide et fluide

## Technologies Utilisées

- **React 19** - Framework UI
- **React Router** - Navigation
- **Tailwind CSS** - Styling responsive
- **React Google Charts** - Graphiques de prix
- **Vite** - Build tool
- **CoinGecko API** - Données cryptomonnaies

## Installation

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/Owedjangdev/coinplace-.git
cd coinsplace
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Accéder à l'application**
```
http://localhost:5173
```

## Structure du Projet

```
src/
├── components/
│   ├── Navbar.jsx       - Barre de navigation avec sélecteur de devise
│   ├── Footer.jsx       - Pied de page
│   └── Linechart.jsx    - Graphique des prix historiques
├── pages/
│   ├── Home.jsx         - Page d'accueil avec liste des cryptos
│   └── Coin.jsx         - Page détails d'une cryptomonnaie
├── assets/
│   ├── context/
│   │   └── CoinContext.jsx  - Context API pour les données globales
│   └── [images]
├── App.jsx              - Composant principal
├── main.jsx             - Point d'entrée
└── index.css            - Styles globaux Tailwind
```

## Utilisation

### Page d'Accueil
- Affiche le top 10 des cryptomonnaies avec prix en temps réel
- Barre de recherche pour filtrer par nom ou symbole
- Changement de devise en haut à droite

### Page Détails
- Cliquez sur une cryptomonnaie pour voir les détails
- Informations complètes : rank, prix actuel, market cap, variations 24h
- Graphique d'historique des 10 derniers jours
- Spinner de chargement pendant la récupération des données

## Architecture

### Context API (CoinContext)
- Gestion centralisée des données des cryptos
- Récupération depuis CoinGecko API
- Support multi-devise

### Fetch Pattern
- `async/await` avec gestion d'erreurs `try/catch`
- Endpoints API utilisés :
  - `/coins/markets` - Liste des cryptos
  - `/coins/{id}` - Détails d'une crypto
  - `/coins/{id}/market_chart` - Historique des prix

## Responsive Design

- **Mobile** : Layout colonne, menu caché, textes réduits
- **Tablet** : Adaptations intermédiaires
- **Desktop** : Grilles multi-colonnes, full width

## API utilisée

**CoinGecko API** (gratuit)
- Pas de limite de débit pour utilisation personnelle
- API Key : `CG-wJQUzMn1RYwtSMgTdXWk8s6f`
- Documentation : https://www.coingecko.com/api

## Build pour Production

```bash
npm run build
npm run preview
```

Génère les fichiers optimisés dans le dossier `dist/`.

## Améliorations Futures

- [ ] Historique de recherche
- [ ] Favoris / Watchlist
- [ ] Alertes de prix
- [ ] Mode sombre/clair
- [ ] Cache localStorage
- [ ] Tests unitaires
- [ ] PWA (Progressive Web App)

## Problèmes Connus

- Les données se rafraîchissent lors du changement de devise
- Limitation API : 10-50 appels par minute selon l'endpoint

## License

MIT

## Auteur

Développé avec ❤️ par Owedjang Dev

---

**Note de développement** : Toujours utiliser `async/await` avec `try/catch` pour les appels fetch. Les erreurs sont loggées en console pour faciliter le débogage.
