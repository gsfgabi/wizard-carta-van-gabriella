// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Exemplo: espera um token em um contexto global (exemplo simples)
// import { useAuth } from '../../context/AuthContext';

// interface AuthWrapperProps {
//   children: React.ReactNode;
// }

// const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();

//   React.useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);

//   // Só renderiza os filhos se estiver autenticado
//   return isAuthenticated ? <>{children}</> : null;
// };

// export default AuthWrapper;