import { RadioGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      {/* Example 1 */}
      <RadioGroup
        required
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.vertical")}
        tooltip={t("form.tooltip")}
      >
        <RadioGroup.Item value="option-1" label={t("form.option1")} />
        <RadioGroup.Item value="option-2" label={t("form.option2")} />
        <RadioGroup.Item value="option-3" label={t("form.option3")} />
        <RadioGroup.Item value="option-4" description={t("form.description")} helperText={t("form.helperText")} label={t("form.option4")} tooltip={t("form.tooltip")} >children?</RadioGroup.Item>
      </RadioGroup>
      {/* Example 2 */}
      <RadioGroup
        disabled
        description={t("form.disabled")}
        helperText={t("form.helperText")}
        label={t("form.horizontal")}
        orientation="horizontal"
        tooltip={t("form.tooltip")}
      >
        <RadioGroup.Item value="option-1" label={t("form.option1")} />
        <RadioGroup.Item value="option-2" label={t("form.option2")} />
        <RadioGroup.Item value="option-3" label={t("form.option3")} />
      </RadioGroup>
    </div>
  );
}
