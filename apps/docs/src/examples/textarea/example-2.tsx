import { Textarea } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex max-w-sm flex-col gap-10 text-left">
      <Textarea
        className="resize-none"
        placeholder={t("form.placeholder")}
        label={t("form.label")}
        tooltip={t("form.tooltip")}
        value={t("form.valueDisabled")}
        disabled
      />

      <Textarea
        className="resize-none"
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.label")}
      />
    </div>
  );
}
