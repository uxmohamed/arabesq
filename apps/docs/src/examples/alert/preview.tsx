import { Alert, Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <Alert title={t("alert.title")} after={<Button variant="link">{t("button.save")}</Button>}>
      {t("alert.content")}
    </Alert>
  );
}
