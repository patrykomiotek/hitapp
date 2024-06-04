type Props = {
  children: string | string[]; // React.ReactNode
  // children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};

// <Text>today is Monday</Text>
