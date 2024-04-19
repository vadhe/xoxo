type ReactComponent = JSX.Element | null;

export const renderComponentBasedOnCondition = (
  condition: boolean,
  componentTrue: ReactComponent,
  componentFalse: ReactComponent
): ReactComponent => {
  return condition ? componentTrue : componentFalse;
};
