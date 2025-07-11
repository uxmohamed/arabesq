import {
  ColumnsHorizontalIcon,
  GridIcon,
  GridMasonryIcon,
  RowsIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/react";
import { ToggleGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-fit flex-col items-center gap-6">
      <ToggleGroup type="single" defaultValue="days">
        <ToggleGroup.Item value="days">{t("toggleGroup.days")}</ToggleGroup.Item>
        <ToggleGroup.Item value="months">{t("toggleGroup.months")}</ToggleGroup.Item>
        <ToggleGroup.Item value="years">{t("toggleGroup.years")}</ToggleGroup.Item>
      </ToggleGroup>

      <ToggleGroup type="single" size="sm" defaultValue="grid">
        <ToggleGroup.Item before={<GridIcon />} value="grid">
          {t("toggleGroup.grid")}
        </ToggleGroup.Item>

        <ToggleGroup.Item before={<ColumnsHorizontalIcon />} value="column">
          {t("toggleGroup.column")}
        </ToggleGroup.Item>

        <ToggleGroup.Item before={<RowsIcon />} value="row">
          {t("toggleGroup.row")}
        </ToggleGroup.Item>
      </ToggleGroup>

      <div className="flex items-center gap-6">
        <ToggleGroup orientation="vertical" size="md" defaultValue="grid" type="single">
          <ToggleGroup.Item value="grid" before={<GridIcon />} />
          <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
          <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
          <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
        </ToggleGroup>

        <ToggleGroup orientation="vertical" size="sm" defaultValue="grid" type="single">
          <ToggleGroup.Item value="grid" before={<GridIcon />} />
          <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
          <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
          <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
        </ToggleGroup>
      </div>
    </div>
  );
}
