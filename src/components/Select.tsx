import { styled } from '../styles/stiches.config';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as FiIcons from 'react-icons/fi';
import * as SelectCss from '../styles/components/SelectCss';
import { CSS } from '@stitches/react';

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  id: string;
  data: number[];
  description: {
    singular: string;
    plural: string;
  };
  css?: CSS;
  aria_label: string;
};

// Exports
const Root = styled(SelectPrimitive.Root, {});
const SelectTrigger = styled(SelectPrimitive.Trigger, SelectCss.SelectTrigger);
const SelectValue = styled(SelectPrimitive.Value, {});
const SelectIcon = styled(SelectPrimitive.Icon, {});
const SelectContent = styled(SelectPrimitive.Content, SelectCss.SelectContent);
const SelectViewport = styled(SelectPrimitive.Viewport, SelectCss.SelectViewport);
const SelectGroup = styled(SelectPrimitive.Group, {});
const SelectItem = styled(SelectPrimitive.Item, SelectCss.SelectItem);
const SelectItemText = styled(SelectPrimitive.ItemText, SelectCss.SelectItemText);
const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator, SelectCss.SelectItemIndicator);
const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton, SelectCss.ScrollButtonStyles);
const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton, SelectCss.ScrollButtonStyles);

const Box = styled('div', { marginBottom: 10 });

export const Select = ({ description, data, id, aria_label, css, ...props }: SelectProps): JSX.Element => (
  <Box>
    <Root {...props} defaultValue={`${data[0]}`}>
      <SelectTrigger aria-label={aria_label} id={id} css={css}>
        <SelectValue />
        <SelectIcon>
          <FiIcons.FiChevronDown />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <FiIcons.FiChevronUp />
        </SelectScrollUpButton>
        <SelectViewport>
          {data.map((item, key) => {
            return (
              <SelectItem key={key} value={`${item}`}>
                {item === 0 && <SelectItemText>Nenhuma {description.singular}</SelectItemText>}
                {item === 1 && (
                  <SelectItemText>
                    {item} {description.singular}
                  </SelectItemText>
                )}
                {item > 1 && (
                  <SelectItemText>
                    {item} {description.plural}
                  </SelectItemText>
                )}
                <SelectItemIndicator>
                  <FiIcons.FiCheck />
                </SelectItemIndicator>
              </SelectItem>
            );
          })}
        </SelectViewport>
        <SelectScrollDownButton>
          <FiIcons.FiChevronDown />
        </SelectScrollDownButton>
      </SelectContent>
    </Root>
  </Box>
);
