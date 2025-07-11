import { RadioGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-fit text-left">
      <RadioGroup
        defaultValue="value-1"
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.label")}
        required
        tooltip={t("form.tooltip")}
      >
        <RadioGroup.Item label={t("form.value1", "Value 1")} value="value-1" />
        <RadioGroup.Item label={t("form.value2", "Value 2")} value="value-2" />
        <RadioGroup.Item label={t("form.value3", "Value 3")} value="value-3" />
        <RadioGroup.Item label={t("form.value4", "Value 4")} value="value-4" />
      </RadioGroup>
    </div>
  );
}
