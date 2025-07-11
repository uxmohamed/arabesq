"use client";

import { useState } from "react";
import { Slider } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  const [value, setValue] = useState([2500, 5000]);
  return (
    <Slider
      after="$10,000"
      before="$1,000"
      defaultValue={[2500, 5000]}
      label={t("form.priceRange")}
      max={10000}
      min={1000}
      showTooltip="hover"
      onValueChange={(val) => setValue(val)}
      helperText={t("form.selectedRange", { min: value[0]?.toLocaleString("en-us"), max: value[1]?.toLocaleString("en-us") })}
      renderTooltip={(val) => {
        if (val) {
          return "$" + val.toLocaleString("en-US");
        }
        return "";
      }}
      step={100}
    />
  );
}

export default Example;
