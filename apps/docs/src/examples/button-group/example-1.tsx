import {
  ChevronDownIcon,
  DotsVerticalIcon,
  GridIcon,
  GridMasonryIcon,
  Monitor2Icon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/react";
import { ButtonGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Example 1 */}
      <ButtonGroup orientation="vertical">
        <ButtonGroup.Item className="justify-start" before={<SunIcon />}>
          {t("buttonGroup.light")}
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<MoonIcon />}>
          {t("buttonGroup.dark")}
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<Monitor2Icon />}>
          {t("buttonGroup.system")}
        </ButtonGroup.Item>
      </ButtonGroup>

      {/* Example 2 */}
      <ButtonGroup>
        <ButtonGroup.Item after={<GridIcon />} />
        <ButtonGroup.Item after={<GridMasonryIcon />} />
        <ButtonGroup.Item after={<TableColumnsIcon />} />
        <ButtonGroup.Item after={<TableRowsIcon />} />
      </ButtonGroup>

      {/* Example 3 */}
      <ButtonGroup>
        <ButtonGroup.Item disabled>{t("buttonGroup.publishPost")}</ButtonGroup.Item>
        <ButtonGroup.Item>{t("buttonGroup.draft")}</ButtonGroup.Item>
        <ButtonGroup.Item before={<DotsVerticalIcon />} />
      </ButtonGroup>

      {/* Example 4 */}
      <ButtonGroup size="sm">
        <ButtonGroup.Item destructive before={<PlusIcon />}>
          {t("buttonGroup.destructive")}
        </ButtonGroup.Item>

        <ButtonGroup.Item before={<PlusIcon />}>{t("buttonGroup.button")}</ButtonGroup.Item>

        <ButtonGroup.Item before={<ChevronDownIcon />} />
      </ButtonGroup>
    </div>
  );
}
