import { useTranslation } from "react-i18next";

export function ColorsExample() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center rounded border border-surface-100 bg-surface p-20 leading-6">
      <span className="text-surface-500">{t("colors.easyPeasy")}</span>
      <span className="font-medium text-surface-900">{t("colors.lemonSqueezy")}</span>
    </div>
  );
}
