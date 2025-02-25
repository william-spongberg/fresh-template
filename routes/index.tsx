import * as Layout from '../components/Layout.tsx';
import * as Text from '../components/Text.tsx';
import * as Icons from "../components/Icons.tsx";
import Button from "../components/Button.tsx";

export default function Home() {
  return (
    <Layout.Page>
      <Layout.Element>
        <Text.Title>Welcome to the fresh-template</Text.Title>
        <Text.Paragraph>
          This is a fresh-template project.
        </Text.Paragraph>
        <Button href="https://github.com/william-spongberg/fresh-template">
          <Icons.GitHub />
        </Button>
      </Layout.Element>
    </Layout.Page>
  );
}
