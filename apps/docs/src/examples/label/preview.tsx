import { Label } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <Label description={t("form.description")} required tooltip={t("form.tooltip")}>{t("form.label")}</Label>
  );
}

export default Example;
