import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <Button after={<PlusIcon />} before={<PlusIcon />}>
      {t("button.save")}
    </Button>
  );
}
