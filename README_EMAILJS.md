# Configuration EmailJS avec Nuxt

## 🚀 Installation et Configuration

### 1. Dépendances installées
- `@emailjs/browser` - SDK officiel d'EmailJS

### 2. Configuration EmailJS

#### Étape 1 : Créer un compte EmailJS
1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre tableau de bord

#### Étape 2 : Configurer un service d'email
1. Dans votre tableau de bord, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour l'authentification
5. Notez votre **Service ID**

#### Étape 3 : Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Créez votre template avec les variables suivantes :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Contenu du message
   - `{{to_name}}` - Nom du destinataire
4. Notez votre **Template ID**

#### Étape 4 : Obtenir votre clé publique
1. Allez dans "Account" > "API Keys"
2. Copiez votre **Public Key**

### 3. Variables d'environnement

Créez un fichier `.env` à la racine de votre projet avec :

```bash
# EmailJS Configuration
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_cle_publique_ici
NUXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id_ici
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id_ici
```

### 4. Structure des fichiers créés

```
├── plugins/
│   └── emailjs.client.js          # Plugin d'initialisation EmailJS
├── composables/
│   └── useEmailJS.js              # Composable pour gérer les emails
├── components/
│   └── ContactForm.vue            # Formulaire de contact
├── pages/
│   └── index.vue                  # Page mise à jour avec le formulaire
└── nuxt.config.ts                 # Configuration mise à jour
```

## 📧 Utilisation

### Dans un composant Vue :

```vue
<script setup>
const { isLoading, error, success, sendEmail } = useEmailJS();

const handleSubmit = async () => {
  const templateParams = {
    from_name: 'John Doe',
    from_email: 'john@example.com',
    subject: 'Demande de contact',
    message: 'Bonjour, j\'ai une question...',
    to_name: 'Chafi AADSSI'
  };

  const result = await sendEmail(templateParams);
  
  if (result.success) {
    console.log('Email envoyé !');
  } else {
    console.error('Erreur:', result.message);
  }
};
</script>
```

### Fonctionnalités incluses :

- ✅ Gestion des états de chargement
- ✅ Gestion des erreurs
- ✅ Messages de succès
- ✅ Validation des formulaires
- ✅ Interface utilisateur responsive
- ✅ Intégration Tailwind CSS

## 🔧 Personnalisation

### Modifier le template EmailJS :
- Allez dans votre tableau de bord EmailJS
- Modifiez votre template selon vos besoins
- Ajoutez/supprimez des variables selon vos besoins

### Modifier le formulaire :
- Éditez `components/ContactForm.vue`
- Ajoutez/supprimez des champs selon vos besoins
- Modifiez la validation et les styles

### Modifier la logique d'envoi :
- Éditez `composables/useEmailJS.js`
- Ajoutez des fonctionnalités comme la validation côté client
- Modifiez la gestion des erreurs

## 🚨 Dépannage

### Erreur "Service ID not found"
- Vérifiez que votre Service ID est correct dans `.env`
- Assurez-vous que le service est bien configuré dans EmailJS

### Erreur "Template ID not found"
- Vérifiez que votre Template ID est correct dans `.env`
- Assurez-vous que le template existe et est publié

### Erreur "Public Key invalid"
- Vérifiez que votre clé publique est correcte
- Assurez-vous que la clé est active dans votre compte EmailJS

### Emails non reçus
- Vérifiez votre dossier spam
- Vérifiez la configuration de votre service d'email
- Testez avec un email de test

## 📱 Test

1. Démarrez votre serveur de développement : `npm run dev`
2. Remplissez le formulaire de contact
3. Vérifiez que l'email est bien reçu
4. Vérifiez les logs dans la console du navigateur

## 🎯 Prochaines étapes

- Ajouter la validation côté client
- Implémenter un système de captcha
- Ajouter des notifications toast
- Créer des templates d'email personnalisés
- Ajouter la gestion des pièces jointes
