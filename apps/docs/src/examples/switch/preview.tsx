import { Switch } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <Switch
      required
      alignLabel="end"
      description={t("form.description")}
      disabled={false}
      helperText={t("form.helperText")}
      label={t("form.label")}
      tooltip={t("form.tooltip")}
    />
  );
}

export default Example;
