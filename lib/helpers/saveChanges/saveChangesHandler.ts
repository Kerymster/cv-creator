import { User } from 'firebase/auth';

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
    console.error('Save failed:', error);
    setSaveStatus('error');
    setTimeout(() => setSaveStatus('idle'), 3000);
  } finally {
    setSaving(false);
  }
};
