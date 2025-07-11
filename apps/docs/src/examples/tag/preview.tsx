import { Tag } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <Tag
      closable
      onClose={(e: React.MouseEvent) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        alert("Custom onClose callback with preventDefault()");
      }}
    >
      {t("tag.tag", "Tag")}
    </Tag>
  );
}
