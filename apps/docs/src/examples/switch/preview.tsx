import { Switch } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <Switch
      required
      alignLabel="end"
      description={t("form.description", "(description)")}
      disabled={false}
      helperText={t("form.helperText", "Helper Text")}
      label={t("form.label", "Label")}
      tooltip={t("form.tooltip", "Tooltip example")}
    />
  );
}
