import { Box, Container } from '@mui/material';
import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({children}: any) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '75px' }}>
      <Navbar/>
      {children}
    </Box>
  )
}

/**
 Dans Next.js, le fichier layout.tsx (ou avec l'extension .jsx si vous utilisez JavaScript) est utilisé pour créer un composant de mise en page réutilisable. Un composant de mise en page agit comme un conteneur qui englobe d'autres composants et définit la structure globale de la page. Il est utilisé pour regrouper des éléments communs tels que l'en-tête, le pied de page, la barre de navigation ou tout autre élément qui doit être affiché sur toutes les pages de votre application.

 Le fichier layout.tsx n'est pas un fichier spécifique à Next.js ; c'est un modèle de nommage commun utilisé pour désigner un composant de mise en page. Vous pouvez nommer le fichier selon vos préférences, mais le concept reste le même : regrouper la mise en page commune de votre application.
*/