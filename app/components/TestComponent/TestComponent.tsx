const TestComponent = () => {
  return (
    <div className="bg-default p-8 min-h-screen">
      <div className="bg-surface p-6 border border-defaultBorder">
        <h2 className="text-defaultText text-2xl mb-4">Heading</h2>
        <p className="text-muted mb-4">This is muted text</p>
        <button className="bg-primary hover:bg-primary-hover text-buttonText px-4 py-2">
          Button
        </button>
      </div>
    </div>
  );
};

export { TestComponent };
