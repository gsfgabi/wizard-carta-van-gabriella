import { toast, Toaster, ToastBar } from 'react-hot-toast';
import colors from '../../themes/colors';

export const showSuccess = (message: string) =>
  toast.success(message, {
    style: {
      background: colors.primary,
      color: colors.white,
      maxWidth: 'calc(100vw - 2rem)', 
      wordBreak: 'break-word',
      fontSize: '14px',
      padding: '12px 16px',
    },
    iconTheme: {
      primary: colors.white,
      secondary: colors.primary,
    },
  });

export const showError = (message: string) =>
  toast.error(message, {
    style: {
      background: colors.error,
      color: colors.white,
      maxWidth: 'calc(100vw - 2rem)', 
      wordBreak: 'break-word',
      fontSize: '14px',
      padding: '12px 16px',
    },
    iconTheme: {
      primary: colors.white,
      secondary: colors.error,
    },
  });

export const CustomToaster = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      style: {
        fontWeight: 500,
        borderRadius: 8,
        maxWidth: 'calc(100vw - 2rem)', 
        wordBreak: 'break-word',
        fontSize: '14px',
        padding: '12px 16px',
      },
    }}
  >
    {(t) => <ToastBar toast={t} />}
  </Toaster>
);