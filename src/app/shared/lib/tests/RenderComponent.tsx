import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'src/app/shared/translation/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

interface RenderComponentProps {
  route?: string;
}

export function RenderComponent(component: ReactNode, props: RenderComponentProps = {}) {
  const { route = '/' } = props;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
