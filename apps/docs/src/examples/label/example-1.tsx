import { Label } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start text-start">
      <Label description={t("form.description")} required tooltip={t("form.tooltip")}>{t("form.label")}</Label>

      <Label.Helper error>{t("form.errorsInForm")}</Label.Helper>
    </div>
  );
}
