import { User } from 'firebase/auth';
import { toast } from 'react-toastify';

export const handleSave = async (
  user: User | null,
  onSave: () => Promise<void>,
  setSaveStatus: (status: 'success' | 'error' | 'idle') => void,
  setSaving: (saving: boolean) => void
) => {
  if (!user) {
    setSaveStatus('error');
    setTimeout(() => setSaveStatus('idle'), 3000);
    return;
  }

  try {
    setSaving(true);
    await onSave();
    setSaveStatus('success');
    setTimeout(() => setSaveStatus('idle'), 3000);
  } catch (error) {
    toast.error(`Save failed. Please try again.${error}`);
    setSaveStatus('error');
    setTimeout(() => setSaveStatus('idle'), 3000);
  } finally {
    setSaving(false);
  }
};
