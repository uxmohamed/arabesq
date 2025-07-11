import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-fit items-start gap-10">
      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" />
        <Button before={<PlusIcon />} variant="secondary" />
        <Button before={<PlusIcon />} variant="tertiary" />
        <Button before={<PlusIcon />} variant="outline" />
        <Button before={<PlusIcon />} variant="transparent" />
        <Button before={<PlusIcon />} variant="link" />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />}>
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="secondary">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="tertiary">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="transparent">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link">
          {t("button.label")}
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" shape="pill" />
        <Button before={<PlusIcon />} variant="secondary" shape="pill" />
        <Button before={<PlusIcon />} variant="tertiary" shape="pill" />
        <Button before={<PlusIcon />} variant="outline" shape="pill" />
        <Button before={<PlusIcon />} variant="transparent" shape="pill" />
        <Button before={<PlusIcon />} variant="link" shape="pill" />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />} shape="pill">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="secondary" shape="pill">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="tertiary" shape="pill">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline" shape="pill">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="transparent" shape="pill">
          {t("button.label")}
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link" shape="pill">
          {t("button.label")}
        </Button>
      </div>
    </div>
  );
}
