import { PlusIcon } from "@iconicicons/react";
import { Badge } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <Badge before={<PlusIcon />} after={<PlusIcon />}>
      {t("badge.label")}
    </Badge>
  );
}

export default Example;
