import { Input } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto max-w-sm text-left">
      <Input
        required
        label={t("form.label")}
        description={t("form.description")}
        placeholder={t("form.placeholder")}
        helperText={t("form.helperText")}
      />
    </div>
  );
}

export default Example;
