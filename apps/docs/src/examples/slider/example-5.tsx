import { EmojiHappyIcon, EmojiSadIcon, MoonIcon, StarIcon, SunIcon } from "@iconicicons/react";
import { Slider } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-20">
      <Slider
        defaultValue={[5]}
        description={t("form.ratingRange", "(1-10)")}
        helperText={t("form.howHappy")}
        label={t("form.rating")}
        max={10}
        min={1}
        showTooltip="hover"
        before={
          <div className="flex items-center gap-4">
            <EmojiSadIcon className="size-6 opacity-50" />
            <span>1</span>
          </div>
        }
        after={
          <div className="flex items-center gap-4">
            <span>10</span>
            <EmojiHappyIcon className="size-6 opacity-50" />
          </div>
        }
      />

      <Slider
        after={<SunIcon className="size-6 opacity-50" />}
        before={<MoonIcon className="size-6 opacity-50" />}
        defaultValue={[50]}
        label={t("form.brightness")}
        max={100}
        min={1}
        showTooltip="always"
        renderTooltip={(val) =>
          val <= 25
            ? t("form.dark")
            : val <= 50
            ? t("form.dim")
            : val <= 75
            ? t("form.bright")
            : t("form.veryBright")
        }
      />

      <Slider
        after="$10,000"
        before="$1,000"
        defaultValue={[2500, 5000]}
        label={t("form.priceRange")}
        max={10000}
        min={1000}
        renderTooltip={(val) => "$" + val.toLocaleString("en-US")}
        showTooltip="hover"
        step={100}
      />

      <Slider
        after="10"
        before={<StarIcon className="size-6 opacity-50" />}
        defaultValue={[6]}
        max={10}
        min={1}
      />

      <Slider defaultValue={[50]} />
    </div>
  );
}
