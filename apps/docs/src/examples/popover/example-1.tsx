import * as React from "react";
import { ChevronDownIcon, CopyIcon, DownloadIcon } from "@iconicicons/react";
import { ButtonGroup, CheckboxGroup, Popover } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  const wrapper = React.useRef(null);
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setContainer(wrapper.current);
  }, []);

  return (
    <div id="popover-example-1" ref={wrapper}>
      <ButtonGroup>
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>

        <ButtonGroup.Item isIconOnly>
          <DownloadIcon />
        </ButtonGroup.Item>

        <Popover>
          <Popover.Trigger asChild>
            <ButtonGroup.Item isIconOnly>
              <ChevronDownIcon />
            </ButtonGroup.Item>
          </Popover.Trigger>

          {container ? (
            <Popover.Portal container={container}>
              <Popover.Content align="end" className="min-w-[130px]">
                <CheckboxGroup label={t("popover.groupLabel")}>
                  <CheckboxGroup.Item label={t("popover.option1")} />
                  <CheckboxGroup.Item label={t("popover.option2")} />
                  <CheckboxGroup.Item label={t("popover.option3")} />
                  <CheckboxGroup.Item label={t("popover.option4")} />
                </CheckboxGroup>
              </Popover.Content>
            </Popover.Portal>
          ) : null}
        </Popover>
      </ButtonGroup>
    </div>
  );
}
