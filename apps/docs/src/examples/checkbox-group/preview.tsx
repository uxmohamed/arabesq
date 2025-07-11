import { CheckboxGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-fit text-left">
      <CheckboxGroup
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.label")}
        required
        tooltip={t("form.tooltip")}
      >
        <CheckboxGroup.Item label={t("form.option1")} />
        <CheckboxGroup.Item label={t("form.option2")} />
        <CheckboxGroup.Item label={t("form.option3")} />
        <CheckboxGroup.Item label={t("form.option4")} />
      </CheckboxGroup>
    </div>
  );
}

export default Example;
