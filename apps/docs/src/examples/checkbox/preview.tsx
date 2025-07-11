import { Checkbox } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-fit text-left">
      <Checkbox
        description={t("checkbox.description")}
        helperText={t("checkbox.helperText")}
        label={t("checkbox.label")}
        required
        tooltip={t("checkbox.tooltip")}
      />
    </div>
  );
}
