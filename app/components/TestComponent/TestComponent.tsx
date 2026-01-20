import { Button } from "../Button/Button";
const TestComponent = () => {
  return (
    <div className="bg-default p-8 min-h-screen">
      <div className="bg-surface p-6 border border-defaultBorder p-10 h-100">
        <h2 className="text-defaultText text-2xl mb-4">Heading</h2>
        <p className="text-muted mb-4">This is muted text</p>
        <Button id="example-button">Button</Button>
      </div>
    </div>
  );
};

export { TestComponent };
