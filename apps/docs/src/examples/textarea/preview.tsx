import { Textarea } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto max-w-sm text-left">
      <Textarea label={t("form.label")} placeholder={t("form.placeholder")} />
    </div>
  );
}

export default Example;
