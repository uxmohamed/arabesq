import { Alert, Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <Alert
      closable
      color="primary"
      onClose={() => alert("onClose callback")}
      title={t("alert.title")}
      variant="expanded"
      after={
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="light:bg-white">
            {t("button.save")}
          </Button>

          <Button variant="link" size="sm" className="text-surface-500 hover:text-surface-900">
            {t("button.cancel")}
          </Button>
        </div>
      }
    >
      {t("alert.content")}
    </Alert>
  );
}
