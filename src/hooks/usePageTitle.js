import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const usePageTitle = (titleKey, fallbackTitle) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const title = titleKey ? t(titleKey) : fallbackTitle;
    const baseTitle = 'Gov Schemes India';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [titleKey, fallbackTitle, t]);
};

export default usePageTitle;