import { Textarea } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto max-w-sm text-left">
      <Textarea
        destructive
        required
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.label")}
        placeholder={t("form.placeholder")}
        tooltip={t("form.tooltip")}
        className="max-h-64"
      />
    </div>
  );
}

export default Example;
