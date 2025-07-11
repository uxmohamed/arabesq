import { Checkbox } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex w-fit flex-col gap-6 text-left">
      <Checkbox label={t("checkbox.required")} required />

      <Checkbox
        description={t("checkbox.optional")}
        helperText={t("checkbox.helperText")}
        label={t("checkbox.label")}
        tooltip={t("checkbox.tooltip")}
      />

      <Checkbox
        helperText={t("checkbox.indeterminate")}
        label={t("checkbox.label")}
        tooltip={t("checkbox.tooltip")}
        checked="indeterminate"
      />

      <Checkbox defaultChecked disabled description={t("checkbox.disabled")} tooltip={t("checkbox.tooltip")} />
    </div>
  );
}
