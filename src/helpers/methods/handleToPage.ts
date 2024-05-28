export function handleToPage(sectionId: string, onSuccess?: () => void) {
  const section = document.getElementById(sectionId);

  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth' });

  if (onSuccess) {
    onSuccess();
  }
}
